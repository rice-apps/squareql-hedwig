import { Field, ID, Int, ObjectType } from 'type-graphql'

import { Money } from './money'
import { OrderFulfillment } from './orderFulfillment'
import { OrderLineItem } from './orderLineItem'
import { OrderLineItemDiscount } from './orderLineItemDiscount'
import { OrderLineItemTax } from './orderLineItemTax'
import { OrderMoneyAmounts } from './orderMoneyAmounts'
import { OrderPricingOptions } from './orderPricingOptions'
import { OrderReturn } from './orderReturn'
import { OrderReward } from './orderReward'
import { OrderRoundingAdjustment } from './orderRoundingAdjustment'
import { OrderServiceCharge } from './orderServiceCharge'
import { OrderSource } from './orderSource'
import { Refund } from './refund'
import { Tender } from './tender'

/**
 * Contains all information related to a single order to process with Square,
 * including line items that specify the products to purchase. Order objects also
 * include information on any associated tenders, refunds, and returns.
 * All Connect V2 Transactions have all been converted to Orders including all associated
 * itemization data.
 */
@ObjectType()
export class Order {
  /** The order's unique ID. */
  @Field(() => ID, { nullable: true })
  id?: string

  /** The ID of the merchant location this order is associated with. */
  @Field(() => ID)
  locationId: string

  /**
   * A client specified identifier to associate an entity in another system
   * with this order.
   */
  @Field(() => ID, { nullable: true })
  referenceId?: string

  /** Represents the origination details of an order. */
  @Field(() => OrderSource, { nullable: true })
  source?: OrderSource

  /** The [Customer](#type-customer) ID of the customer associated with the order. */
  @Field({ nullable: true })
  customerId?: string

  /** The line items included in the order. */
  @Field(() => [OrderLineItem], { nullable: 'itemsAndList' })
  lineItems?: OrderLineItem[]

  /**
   * The list of all taxes associated with the order.
   * Taxes can be scoped to either `ORDER` or `LINE_ITEM`. For taxes with `LINE_ITEM` scope, an
   * `OrderLineItemAppliedTax` must be added to each line item that the tax applies to. For taxes
   * with `ORDER` scope, the server will generate an `OrderLineItemAppliedTax` for every line item.
   * On reads, each tax in the list will include the total amount of that tax applied to the order.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any taxes in this field, usage of the deprecated
   * `line_items.taxes` field will result in an error. Please use `line_items.applied_taxes`
   * instead.
   */
  @Field(() => [OrderLineItemTax], { nullable: 'itemsAndList' })
  taxes?: OrderLineItemTax[]

  /**
   * The list of all discounts associated with the order.
   * Discounts can be scoped to either `ORDER` or `LINE_ITEM`. For discounts scoped to `LINE_ITEM`,
   * an `OrderLineItemAppliedDiscount` must be added to each line item that the discount applies to.
   * For discounts with `ORDER` scope, the server will generate an `OrderLineItemAppliedDiscount`
   * for every line item.
   * __IMPORTANT__: If `LINE_ITEM` scope is set on any discounts in this field, usage of the deprecated
   * `line_items.discounts` field will result in an error. Please use `line_items.applied_discounts`
   * instead.
   */
  @Field(() => [OrderLineItemDiscount], { nullable: 'itemsAndList' })
  discounts?: OrderLineItemDiscount[]

  /** A list of service charges applied to the order. */
  @Field(() => [OrderServiceCharge], { nullable: 'itemsAndList' })
  serviceCharges?: OrderServiceCharge[]

  /**
   * Details on order fulfillment.
   * Orders can only be created with at most one fulfillment. However, orders returned
   * by the API may contain multiple fulfillments.
   */
  @Field(() => [OrderFulfillment], { nullable: 'itemsAndList' })
  fulfillments?: OrderFulfillment[]

  /**
   * Collection of items from sale Orders being returned in this one. Normally part of an
   * Itemized Return or Exchange.  There will be exactly one `Return` object per sale Order being
   * referenced.
   */
  @Field(() => [OrderReturn], { nullable: 'itemsAndList' })
  returns?: OrderReturn[]

  /** A collection of various money amounts. */
  @Field(() => OrderMoneyAmounts, { nullable: true })
  returnAmounts?: OrderMoneyAmounts

  /** A collection of various money amounts. */
  @Field(() => OrderMoneyAmounts, { nullable: true })
  netAmounts?: OrderMoneyAmounts

  /**
   * A rounding adjustment of the money being returned. Commonly used to apply Cash Rounding
   * when the minimum unit of account is smaller than the lowest physical denomination of currency.
   */
  @Field(() => OrderRoundingAdjustment, { nullable: true })
  roundingAdjustment?: OrderRoundingAdjustment

  /** The Tenders which were used to pay for the Order. */
  @Field(() => [Tender], { nullable: 'itemsAndList' })
  tenders?: Tender[]

  /** The Refunds that are part of this Order. */
  @Field(() => [Refund], { nullable: 'itemsAndList' })
  refunds?: Refund[]

  /** Timestamp for when the order was created. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  @Field({ nullable: true })
  createdAt?: string

  /** Timestamp for when the order was last updated. In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  @Field({ nullable: true })
  updatedAt?: string

  /** Timestamp for when the order reached a terminal [state](#property-state). In RFC 3339 format, e.g., "2016-09-04T23:59:33.123Z". */
  @Field({ nullable: true })
  closedAt?: string

  /** The state of the order. */
  @Field({ nullable: true })
  state?: string

  /**
   * Version number which is incremented each time an update is committed to the order.
   * Orders that were not created through the API will not include a version and
   * thus cannot be updated.
   * [Read more about working with versions](https://developer.squareup.com/docs/orders-api/manage-orders#update-orders).
   */
  @Field(() => Int, { nullable: true })
  version?: number

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
  totalTipMoney?: Money

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  totalServiceChargeMoney?: Money

  /**
   * Pricing options for an order. The options affect how the order's price is calculated.
   * They can be used, for example, to apply automatic price adjustments that are based on pre-configured
   * [pricing rules](https://developer.squareup.com/docs/reference/square/objects/CatalogPricingRule).
   */
  @Field(() => OrderPricingOptions, { nullable: true })
  pricingOptions?: OrderPricingOptions

  /** A set-like list of rewards that have been added to the order. */
  @Field(() => [OrderReward], { nullable: 'itemsAndList' })
  rewards?: OrderReward[]
}
