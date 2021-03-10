import { Field, InputType } from 'type-graphql'

/** The query filter to return the search result by exact match of the specified attribute name and value. */
@InputType()
export class CatalogQueryExact {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  @Field({ nullable: true })
  attributeName: string

  /**
   * The desired value of the search attribute. Matching of the attribute value is case insensitive and can be partial.
   * For example, if a specified value of "sma", objects with the named attribute value of "Small", "small" are both matched.
   */
  @Field({ nullable: true })
  attributeValue: string
}
