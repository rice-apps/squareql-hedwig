import { Field, InputType } from 'type-graphql'

/**
 * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
 * the `attribute_values`.
 */
@InputType()
export class CatalogQuerySet {
  /** The name of the attribute to be searched. Matching of the attribute name is exact. */
  @Field({ nullable: true })
  attributeName: string

  /**
   * The desired values of the search attribute. Matching of the attribute values is exact and case insensitive.
   * A maximum of 250 values may be searched in a request.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  attributeValues: string[]
}
