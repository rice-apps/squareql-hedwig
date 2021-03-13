import { Field, InputType } from 'type-graphql'

/**
 * Filter based on Order `customer_id` and any Tender `customer_id`
 * associated with the Order. Does not filter based on the
 * [FulfillmentRecipient](#type-orderfulfillmentrecipient) `customer_id`.
 */
@InputType()
export class SearchOrdersCustomerFilter {
  /**
   * List of customer IDs to filter by.
   * Max: 10 customer IDs.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  customerIds?: string[]
}
