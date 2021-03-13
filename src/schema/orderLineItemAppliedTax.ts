import { Field, ID, ObjectType } from 'type-graphql'

import { Money } from './money'

/**
 * Represents an applied portion of a tax to a line item in an order.
 * Order-scoped taxes automatically include the applied taxes in each line item.
 * Line item taxes must be referenced from any applicable line items.
 * The corresponding applied money is automatically computed, based on the
 * set of participating line items.
 */
@ObjectType()
export class OrderLineItemAppliedTax {
  /** Unique ID that identifies the applied tax only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /**
   * The `uid` of the tax for which this applied tax represents.  Must reference
   * a tax present in the `order.taxes` field.
   * This field is immutable. To change which taxes apply to a line item, delete and add new
   * `OrderLineItemAppliedTax`s.
   */
  @Field(() => ID, { nullable: true })
  taxUid: string

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
