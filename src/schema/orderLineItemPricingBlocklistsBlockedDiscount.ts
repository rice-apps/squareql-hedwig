import { Field, ID, InputType, ObjectType } from 'type-graphql'

/**
 * A discount to block from applying to a line item. The discount must be
 * identified by either `discount_uid` or `discount_catalog_object_id`, but not both.
 */
@ObjectType()
@InputType('OrderLineItemPricingBlocklistsBlockedDiscountInput')
export class OrderLineItemPricingBlocklistsBlockedDiscount {
  /** Unique ID of the `BlockedDiscount` within the order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /**
   * The `uid` of the discount that should be blocked. Use this field to block
   * ad-hoc discounts. For catalog discounts use the `discount_catalog_object_id` field.
   */
  @Field(() => ID, { nullable: true })
  discountUid?: string

  /**
   * The `catalog_object_id` of the discount that should be blocked.
   * Use this field to block catalog discounts. For ad-hoc discounts use the
   * `discount_uid` field.
   */
  @Field(() => ID, { nullable: true })
  discountCatalogObjectId?: string
}
