import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
// import { visionTool } from '@sanity/vision' (optional plugin)
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool(),
    // Vision is a tool to test GROQ queries in the studio
    // visionTool({defaultApiVersion: apiVersion}),
  ],
})
