import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "next-sanity";

// Sanity Client with WRITE access
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-28",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "الاسم، البريد الإلكتروني، والرسالة حقول مطلوبة." },
        { status: 400 }
      );
    }

    // 1. Archive in Sanity
    const sanityPromise = sanityClient.create({
      _type: "lead",
      name,
      email,
      phone: phone || "غير مزود",
      subject: subject || "استفسار عام",
      message,
      status: "new",
    });

    // 2. Send Email via Resend
    const emailPromise = resend.emails.send({
      from: "Qodency System <system@qodency.online>", // Using your verified domain
      to: process.env.CONTACT_EMAIL || "info@qodency.online",
      replyTo: email,
      subject: `طلب مشروع جديد: ${subject}`,
      html: `
        <div dir="rtl" style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #10b981;">طلب مشروع جديد من Qodency</h2>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>البريد الإلكتروني:</strong> ${email}</p>
          <p><strong>رقم الهاتف:</strong> ${phone || "غير مزود"}</p>
          <p><strong>نوع المشروع:</strong> ${subject}</p>
          <hr />
          <p><strong>الرسالة:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
          <hr />
          <p style="font-size: 12px; color: #666;">تم استقبال هذه الرسالة عبر موقع qodency.online وأرشفتها في Sanity.</p>
        </div>
      `,
    });

    // Run both operations
    await Promise.all([sanityPromise, emailPromise]);

    return NextResponse.json(
      { message: "تم إرسال رسالتك بنجاح وأرشفتها." },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("API Contact Error:", error);
    return NextResponse.json(
      { error: "حدث خطأ أثناء معالجة طلبك.", details: error.message },
      { status: 500 }
    );
  }
}
