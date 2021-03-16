import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { Money } from './money'

/** A line item modifier being returned. */
@ObjectType()
@InputType('OrderReturnLineItemModifierInput')
export class OrderReturnLineItemModifier {
  /** Unique ID that identifies the return modifier only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /**
   * `uid` of the Modifier from the LineItem from the Order which contains the
   * original sale of this line item modifier.
   */
  @Field(() => ID, { nullable: true })
  sourceModifierUid?: string

  /** The catalog object id referencing [CatalogModifier](#type-catalogmodifier). */
  @Field(() => ID, { nullable: true })
  catalogObjectId?: string

  /** The name of the item modifier. */
  @Field({ nullable: true })
  name?: string

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
  totalPriceMoney?: Money
}
