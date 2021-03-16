import { Field, ID, InputType, ObjectType } from 'type-graphql'

import { Money } from './money'

/**
 * Represents a tax that applies to one or more line item in the order.
 * Fixed-amount, order-scoped taxes are distributed across all non-zero line item totals.
 * The amount distributed to each line item is relative to the amount the item
 * contributes to the order subtotal.
 */
@ObjectType()
@InputType('OrderLineItemTaxInput')
export class OrderLineItemTax {
  /** Unique ID that identifies the tax only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** The catalog object id referencing [CatalogTax](#type-catalogtax). */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /** The tax's name. */
  @Field({ nullable: true })
  name?: string

  /** Indicates how the tax is applied to the associated line item or order. */
  @Field({ nullable: true })
  type?: string

  /**
   * The percentage of the tax, as a string representation of a decimal
   * number. For example, a value of `"7.25"` corresponds to a percentage of
   * 7.25%.
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
  appliedMoney?: Money

  /** Indicates whether this is a line item or order level tax. */
  @Field({ nullable: true })
  scope?: string

  /**
   * Determines whether the tax was automatically applied to the order based on
   * the catalog configuration. For an example, see
   * [Automatically Apply Taxes to an Order](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts/auto-apply-taxes).
   */
  @Field({ nullable: true })
  autoApplied?: boolean
}
