import { Field, InputType } from 'type-graphql'

/**
 * Sorting criteria for a SearchOrders request. Results can only be sorted
 * by a timestamp field.
 */
@InputType()
export class SearchOrdersSort {
  /** Specifies which timestamp to use to sort SearchOrder results. */
  @Field()
  sortField: string

  /** The order (e.g., chronological or alphabetical) in which results from a request are returned. */
  @Field({ nullable: true })
  sortOrder?: string
}
