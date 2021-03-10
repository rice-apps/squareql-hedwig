import { Field, InputType } from 'type-graphql'

/** The query expression to specify the key to sort search results. */
@InputType()
export class CatalogQuerySortedAttribute {
  /** The attribute whose value is used as the sort key. */
  @Field()
  attributeName: string

  /**
   * The first attribute value to be returned by the query. Ascending sorts will return only
   * objects with this value or greater, while descending sorts will return only objects with this value
   * or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
   */
  @Field({ nullable: true })
  initialAttributeValue?: string

  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  @Field({ nullable: true })
  sortOrder?: string
}
