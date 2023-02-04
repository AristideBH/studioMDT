import { graphql } from '$houdini'
import { error } from '@sveltejs/kit'
import type { GetProductBySlugVariables } from './$houdini'

export const _houdini_load = graphql(`
  query GetProductBySlug($id: ID = "vase-s") {
    product(id: $id, idType: SLUG) {
      title
      slug
      uri
      status
      data_product {
        featured {
          sourceUrl
          sizes
          srcSet
          altText
          caption
        }
        description
        type {
          name
          slug
          uri
        }
      }
    }
  }
`)

// This is the function for the AllItems query.
// Query variable functions must be named _<QueryName>Variables.
export const _GetProductBySlugVariables: GetProductBySlugVariables = ({ params }) => {
  // make sure we recognize the value
  if (!params.slug) throw error(404, { message: "No slug has been provided" });
  return {
    id: params.slug
  }
}