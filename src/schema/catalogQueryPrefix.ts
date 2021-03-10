import { Field, InputType } from 'type-graphql'

/** The query filter to return the search result whose named attribute values are prefixed by the specified attribute value. */
@InputType()
export class CatalogQueryPrefix {
  /** The name of the attribute to be searched. */
  @Field({ nullable: true })
  attributeName: string

  /** The desired prefix of the search attribute value. */
  @Field({ nullable: true })
  attributePrefix: string
}
