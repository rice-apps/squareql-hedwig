import { Field, ObjectType } from 'type-graphql'

/**
 * Pricing options for an order. The options affect how the order's price is calculated.
 * They can be used, for example, to apply automatic price adjustments that are based on pre-configured
 * [pricing rules](https://developer.squareup.com/docs/reference/square/objects/CatalogPricingRule).
 */
@ObjectType()
export class OrderPricingOptions {
  /**
   * The option to determine whether pricing rule-based
   * discounts are automatically applied to an order.
   */
  @Field({ nullable: true })
  autoApplyDiscounts?: boolean

  /**
   * The option to determine whether rule-based taxes are automatically
   * applied to an order when the criteria of the corresponding rules are met.
   */
  @Field({ nullable: true })
  autoApplyTaxes?: boolean
}
