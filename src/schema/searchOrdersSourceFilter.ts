import { Field, InputType } from 'type-graphql'

/** Filter based on order `source` information. */
@InputType()
export class SearchOrdersSourceFilter {
  /**
   * Filters by [Source](#type-ordersource) `name`. Will return any orders
   * with with a `source.name` that matches any of the listed source names.
   * Max: 10 source names.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  sourceNames?: string[]
}
