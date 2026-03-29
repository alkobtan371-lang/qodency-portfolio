import { groq } from "next-sanity";

export const projectsQuery = groq`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    status,
    category,
    techStack,
    description,
    "image": image.asset->url,
    demoLink,
    githubLink
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    author,
    role,
    content,
    "image": image.asset->url,
    rating
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(title asc) {
    _id,
    title,
    description,
    iconName,
    features
  }
`;
