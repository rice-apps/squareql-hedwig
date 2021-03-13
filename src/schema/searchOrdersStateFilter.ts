import { Field, InputType } from 'type-graphql'

/** Filter by current Order `state`. */
@InputType()
export class SearchOrdersStateFilter {
  /**
   * States to filter for.
   * See [OrderState](#type-orderstate) for possible values
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  states: string[]
}
