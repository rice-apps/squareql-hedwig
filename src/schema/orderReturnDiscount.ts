import { Field, ID, ObjectType } from 'type-graphql'
import { Money } from './money'

/**
 * Represents a discount being returned that applies to one or more return line items in an
 * order.
 * Fixed-amount, order-scoped discounts are distributed across all non-zero return line item totals.
 * The amount distributed to each return line item is relative to that item’s contribution to the
 * order subtotal.
 */
@ObjectType()
export class OrderReturnDiscount {
  /** Unique ID that identifies the return discount only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** `uid` of the Discount from the Order which contains the original application of this discount. */
  @Field(() => ID, { nullable: true })
  sourceDiscountUid?: string

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
   * The percentage of the tax, as a string representation of a decimal number.
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
}
