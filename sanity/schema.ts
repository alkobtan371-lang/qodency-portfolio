import { type SchemaTypeDefinition } from 'sanity'
import project from './schemas/project'
import service from './schemas/service'
import testimonial from './schemas/testimonial'
import lead from './schemas/lead'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, service, testimonial, lead],
}
