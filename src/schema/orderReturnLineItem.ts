import { Field, ID, InputType, ObjectType } from 'type-graphql'

import { Money } from './money'
import { OrderLineItemAppliedDiscount } from './orderLineItemAppliedDiscount'
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax'
import { OrderQuantityUnit } from './orderQuantityUnit'
import { OrderReturnLineItemModifier } from './orderReturnLineItemModifier'

/** The line item being returned in an Order. */
@ObjectType()
@InputType('OrderReturnLineItemInput')
export class OrderReturnLineItem {
  /** Unique identifier for this return line item entry. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** `uid` of the LineItem in the original sale Order. */
  @Field(() => ID, { nullable: true })
  sourceLineItemUid?: string

  /** The name of the line item. */
  @Field({ nullable: true })
  name?: string

  /**
   * The quantity returned, formatted as a decimal number.
   * For example: `"3"`.
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

  /** The note of the returned line item. */
  @Field({ nullable: true })
  note?: string

  /** The [CatalogItemVariation](#type-catalogitemvariation) id applied to this returned line item. */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /** The name of the variation applied to this returned line item. */
  @Field({ nullable: true })
  variationName?: string

  /** The [CatalogModifier](#type-catalogmodifier)s applied to this line item. */
  @Field(() => [OrderReturnLineItemModifier], { nullable: 'itemsAndList' })
  returnModifiers?: OrderReturnLineItemModifier[]

  /**
   * The list of references to `OrderReturnTax` entities applied to the returned line item. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderReturnTax` applied to the returned line item. On reads, the amount applied
   * is populated.
   */
  @Field(() => [OrderLineItemAppliedTax], { nullable: 'itemsAndList' })
  appliedTaxes?: OrderLineItemAppliedTax[]

  /**
   * The list of references to `OrderReturnDiscount` entities applied to the returned line item. Each
   * `OrderLineItemAppliedDiscount` has a `discount_uid` that references the `uid` of a top-level
   * `OrderReturnDiscount` applied to the returned line item. On reads, the amount
   * applied is populated.
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
  grossReturnMoney?: Money

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
}
