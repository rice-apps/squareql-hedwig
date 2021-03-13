import { Field, ID, ObjectType } from 'type-graphql'
import { Money } from './money'
import { OrderLineItemAppliedTax } from './orderLineItemAppliedTax'

/** Represents a service charge applied to an order. */
@ObjectType()
export class OrderServiceCharge {
  /** Unique ID that identifies the service charge only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** The name of the service charge. */
  @Field({ nullable: true })
  name?: string

  /** The catalog object ID referencing the service charge [CatalogObject](#type-catalogobject). */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /**
   * The service charge percentage as a string representation of a
   * decimal number. For example, `"7.25"` indicates a service charge of 7.25%.
   * Exactly 1 of `percentage` or `amount_money` should be set.
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
   * Represents a phase in the process of calculating order totals.
   * Service charges are applied __after__ the indicated phase.
   * [Read more about how order totals are calculated.](https://developer.squareup.com/docs/orders-api/how-it-works#how-totals-are-calculated)
   */
  @Field({ nullable: true })
  calculationPhase?: string

  /**
   * Indicates whether the service charge can be taxed. If set to `true`,
   * order-level taxes automatically apply to the service charge. Note that
   * service charges calculated in the `TOTAL_PHASE` cannot be marked as taxable.
   */
  @Field({ nullable: true })
  taxable?: boolean

  /**
   * The list of references to taxes applied to this service charge. Each
   * `OrderLineItemAppliedTax` has a `tax_uid` that references the `uid` of a top-level
   * `OrderLineItemTax` that is being applied to this service charge. On reads, the amount applied
   * is populated.
   * An `OrderLineItemAppliedTax` will be automatically created on every taxable service charge
   * for all `ORDER` scoped taxes that are added to the order. `OrderLineItemAppliedTax` records
   * for `LINE_ITEM` scoped taxes must be added in requests for the tax to apply to any taxable
   * service charge.  Taxable service charges have the `taxable` field set to true and calculated
   * in the `SUBTOTAL_PHASE`.
   * To change the amount of a tax, modify the referenced top-level tax.
   */
  @Field(() => [OrderLineItemAppliedTax], { nullable: 'itemsAndList' })
  appliedTaxes?: OrderLineItemAppliedTax[]
}
