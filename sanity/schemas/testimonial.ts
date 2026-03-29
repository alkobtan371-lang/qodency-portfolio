import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'author',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Company / Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Quote / Review Text',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Client Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'rating',
      title: 'Rating (1-5)',
      type: 'number',
      initialValue: 5,
      validation: (Rule) => Rule.required().min(1).max(5),
    }),
  ],
})
