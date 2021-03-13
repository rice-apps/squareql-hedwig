import { Field, InputType } from 'type-graphql'
import { SearchOrdersFilter } from './searchOrdersFilter'
import { SearchOrdersSort } from './searchOrdersSort'

/** Contains query criteria for the search. */
@InputType()
export class SearchOrdersQuery {
  /**
   * Filtering criteria to use for a SearchOrders request. Multiple filters
   * will be ANDed together.
   */
  @Field(() => SearchOrdersFilter, { nullable: true })
  filter?: SearchOrdersFilter

  /**
   * Sorting criteria for a SearchOrders request. Results can only be sorted
   * by a timestamp field.
   */
  @Field(() => SearchOrdersSort, { nullable: true })
  sort?: SearchOrdersSort
}
