import { Field, ID, InputType, ObjectType } from 'type-graphql'

import { Money } from './money'

/**
 * Represents a discount that applies to one or more line items in an
 * order.
 * Fixed-amount, order-scoped discounts are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the
 * amount contributed by the item to the order subtotal.
 */
@ObjectType()
@InputType('OrderLineItemDiscountInput')
export class OrderLineItemDiscount {
  /** Unique ID that identifies the discount only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** The catalog object id referencing [CatalogDiscount](#type-catalogdiscount). */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /** The discount's name. */
  @Field({ nullable: true })
  name?: string

  /** Indicates how the discount is applied to the associated line item or order. */
  @Field({ nullable: true })
  type?: string

  /**
   * The percentage of the discount, as a string representation of a decimal number.
   * A value of `7.25` corresponds to a percentage of 7.25%.
   * `percentage` is not set for amount-based discounts.
   */
  @Field({ nullable: true })
  percentage?: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  amountMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  appliedMoney?: Money

  /** Indicates whether this is a line item or order level discount. */
  @Field({ nullable: true })
  scope?: string

  /**
   * The reward identifiers corresponding to this discount. The application and
   * specification of discounts that have `reward_ids` are completely controlled by the backing
   * criteria corresponding to the reward tiers of the rewards that are added to the order
   * through the Loyalty API. To manually unapply discounts that are the result of added rewards,
   * the rewards must be removed from the order through the Loyalty API.
   */
  @Field(() => [ID], { nullable: 'itemsAndList' })
  rewardIds?: string[]

  /**
   * The object identifier of a [pricing rule](#type-CatalogPricingRule) to be applied automatically
   * to this discount. The specification and application of the discounts, to which a `pricing_rule_id` is
   * assigned, are completely controlled by the corresponding pricing rule.
   */
  @Field({ nullable: true })
  pricingRuleId?: string
}
