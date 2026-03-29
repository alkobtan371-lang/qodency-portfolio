import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'lead',
  title: 'رسائل العملاء',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'الاسم',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'email',
      title: 'البريد الإلكتروني',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'phone',
      title: 'رقم الهاتف',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'subject',
      title: 'الموضوع / نوع المشروع',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'message',
      title: 'الرسالة',
      type: 'text',
      readOnly: true,
    }),
    defineField({
      name: 'status',
      title: 'الحالة',
      type: 'string',
      options: {
        list: [
          { title: 'جديد', value: 'new' },
          { title: 'تم الرد', value: 'replied' },
          { title: 'مؤرشف', value: 'archived' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'subject',
    },
  },
})
