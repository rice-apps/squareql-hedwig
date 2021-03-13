import { Field, ObjectType } from 'type-graphql'
import { Error } from './error'
import { Order } from './order'

/**
 * Only one of `order_entries` or `orders` fields will be set, depending on whether
 * `return_entries` was set on the [SearchOrdersRequest](#type-searchorderrequest).
 */
@ObjectType()
export class SearchOrdersResponse {
  /**
   * List of
   * [Order](#type-order) objects that match query conditions. Populated only if
   * `return_entries` in the request is set to `false`.
   */
  @Field(() => [Order], { nullable: 'itemsAndList' })
  orders?: Order[]

  /**
   * The pagination cursor to be used in a subsequent request. If unset,
   * this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  @Field({ nullable: true })
  cursor?: string

  /** [Errors](#type-error) encountered during the search. */
  @Field(() => [Error], { nullable: 'itemsAndList' })
  errors?: Error[]
}
