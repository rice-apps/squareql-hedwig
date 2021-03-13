import { Field, ID, ObjectType } from 'type-graphql'
import { Money } from './money'

/** Represents an additional recipient (other than the merchant) receiving a portion of this tender. */
@ObjectType()
export class AdditionalRecipient {
  /** The location ID for a recipient (other than the merchant) receiving a portion of this tender. */
  @Field(() => ID, { nullable: true })
  locationId: string

  /** The description of the additional recipient. */
  @Field()
  description: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money)
  amountMoney: Money

  /** The unique ID for this [AdditionalRecipientReceivable](#type-additionalrecipientreceivable), assigned by the server. */
  @Field(() => ID, { nullable: true })
  receivableId?: string
}
