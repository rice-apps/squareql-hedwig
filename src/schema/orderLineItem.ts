import { Field, ID, ObjectType } from 'type-graphql'
import { Money } from './money'
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount'
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax'
import { OrderLineItemModifier } from './orderLineItemModifier'
import { OrderLineItemPricingBlocklists } from './orderLineItemPricingBlocklists'
import { OrderQuantityUnit } from './orderQuantityUnit'

/**
 * Represents a line item in an order. Each line item describes a different
 * product to purchase, with its own quantity and price details.
 */
@ObjectType()
export class OrderLineItem {
  /** Unique ID that identifies the line item only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** The name of the line item. */
  @Field({ nullable: true })
  name?: string

  /**
   * The quantity purchased, formatted as a decimal number.
   * For example: `"3"`.
   * Line items with a quantity of `"0"` will be automatically removed
   * upon paying for or otherwise completing the order.
   * Line items with a `quantity_unit` can have non-integer quantities.
   * For example: `"1.70000"`.
   */
  @Field()
  quantity: string

  /**
   * Contains the measurement unit for a quantity and a precision which
   * specifies the number of digits after the decimal point for decimal quantities.
   */
  @Field(() => OrderQuantityUnit, { nullable: true })
  quantityUnit?: OrderQuantityUnit

  /** The note of the line item. */
  @Field({ nullable: true })
  note?: string

  /** The [CatalogItemVariation](#type-catalogitemvariation) id applied to this line item. */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /** The name of the variation applied to this line item. */
  @Field({ nullable: true })
  variationName?: string

  /** The [CatalogModifier](#type-catalogmodifier)s applied to this line item. */
  @Field(() => [OrderLineItemModifier], { nullable: 'itemsAndList' })
  modifiers?: OrderLineItemModifier[]

  /**
   * The list of references to taxes applied to this line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a
   * top-level `OrderLineItemTax` applied to the line item. On reads, the
   * amount applied is populated.
   * An `OrderLineItemAppliedTax` will be automatically created on every line
   * item for all `ORDER` scoped taxes added to the order. `OrderLineItemAppliedTax`
   * records for `LINE_ITEM` scoped taxes must be added in requests for the tax
   * to apply to any line items.
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  @Field(() => [OrderLineItemAppliedTax], { nullable: 'itemsAndList' })
  appliedTaxes?: OrderLineItemAppliedTax[]

  /**
   * The list of references to discounts applied to this line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderLineItemDiscounts` applied to the line item. On reads, the amount
   * applied is populated.
   * An `OrderLineItemAppliedDiscount` will be automatically created on every line item for all
   * `ORDER` scoped discounts that are added to the order. `OrderLineItemAppliedDiscount` records
   * for `LINE_ITEM` scoped discounts must be added in requests for the discount to apply to any
   * line items.
   * To change the amount of a discount, modify the referenced top-level discount.
   */
  @Field(() => [OrderLineItemAppliedDiscount], { nullable: 'itemsAndList' })
  appliedDiscounts?: OrderLineItemAppliedDiscount[]

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  basePriceMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  variationTotalPriceMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  grossSalesMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  totalTaxMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  totalDiscountMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  totalMoney?: Money

  /**
   * Describes pricing adjustments that are blocked from manual and
   * automatic application to a line item. For more information, see
   * [Apply Taxes and Discounts](https://developer.squareup.com/docs/orders-api/apply-taxes-and-discounts).
   */
  @Field(() => OrderLineItemPricingBlocklists, { nullable: true })
  pricingBlocklists?: OrderLineItemPricingBlocklists
}
