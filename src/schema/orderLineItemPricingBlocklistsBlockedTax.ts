import { Field, ID, ObjectType } from 'type-graphql'

/**
 * A tax to block from applying to a line item. The tax must be
 * identified by either `tax_uid` or `tax_catalog_object_id`, but not both.
 */
@ObjectType()
export class OrderLineItemPricingBlocklistsBlockedTax {
  /** Unique ID of the `BlockedTax` within the order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /**
   * The `uid` of the tax that should be blocked. Use this field to block
   * ad-hoc taxes. For catalog taxes use the `tax_catalog_object_id` field.
   */
  @Field(() => ID, { nullable: true })
  taxUid?: string

  /**
   * The `catalog_object_id` of the tax that should be blocked.
   * Use this field to block catalog taxes. For ad-hoc taxes use the
   * `tax_uid` field.
   */
  @Field(() => ID, { nullable: true })
  taxCatalogObjectId?: string
}
