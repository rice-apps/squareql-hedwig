import { Field, InputType } from 'type-graphql'

/** Filter based on [Order Fulfillment](#type-orderfulfillment) information. */
@InputType()
export class SearchOrdersFulfillmentFilter {
  /**
   * List of [fulfillment types](#type-orderfulfillmenttype) to filter
   * for. Will return orders if any of its fulfillments match any of the fulfillment types
   * listed in this field.
   * See [OrderFulfillmentType](#type-orderfulfillmenttype) for possible values
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  fulfillmentTypes?: string[]

  /**
   * List of [fulfillment states](#type-orderfulfillmentstate) to filter
   * for. Will return orders if any of its fulfillments match any of the
   * fulfillment states listed in this field.
   * See [OrderFulfillmentState](#type-orderfulfillmentstate) for possible values
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  fulfillmentStates?: string[]
}
