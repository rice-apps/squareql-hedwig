import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { Money } from './money'

/**
 * Represents an applied portion of a discount to a line item in an order.
 * Order scoped discounts will automatically have applied discounts present for each line item.
 * Line item scoped discounts must have applied discounts added manually for any applicable line
 * items. The corresponding applied money will automatically be computed based on participating
 * line items.
 */
@ObjectType()
@InputType('OrderLineItemAppliedDiscountInput')
export class OrderLineItemAppliedDiscount {
  /** Unique ID that identifies the applied discount only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /**
   * The `uid` of the discount the applied discount represents. Must
   * reference a discount present in the `order.discounts` field.
   * This field is immutable. To change which discounts apply to a line item,
   * you must delete the discount and re-add it as a new `OrderLineItemAppliedDiscount`.
   */
  @Field(() => ID, { nullable: true })
  discountUid: string

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
}
