import { Field, InputType, Int } from 'type-graphql'
import { SearchOrdersQuery } from './searchOrdersQuery'

/**
 * The request does not have any required fields. When given no query criteria,
 * SearchOrders will return all results for all of the merchant’s locations. When fetching additional
 * pages using a `cursor`, the `query` must be equal to the `query` used to fetch the first page of
 * results.
 */
@InputType()
export class SearchOrdersRequest {
  /**
   * The location IDs for the orders to query. All locations must belong to
   * the same merchant.
   * Min: 1 location IDs.
   * Max: 10 location IDs.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  locationIds?: string[]

  /**
   * A pagination cursor returned by a previous call to this endpoint.
   * Provide this to retrieve the next set of results for your original query.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  @Field({ nullable: true })
  cursor?: string

  /** Contains query criteria for the search. */
  @Field(() => SearchOrdersQuery, { nullable: true })
  query?: SearchOrdersQuery

  /**
   * Maximum number of results to be returned in a single page. It is
   * possible to receive fewer results than the specified limit on a given page.
   * Default: `500`
   */
  @Field(() => Int, { nullable: true })
  limit?: number

  /**
   * Boolean that controls the format of the search results. If `true`,
   * SearchOrders will return [`OrderEntry`](#type-orderentry) objects. If `false`, SearchOrders
   * will return complete Order objects.
   * Default: `false`.
   */
  @Field({ nullable: true })
  returnEntries?: boolean
}
