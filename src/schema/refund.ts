import { Field, ID, ObjectType } from 'type-graphql'
import { AdditionalRecipient } from './additionalRecipient'
import { Money } from './money'

/** Represents a refund processed for a Square transaction. */
@ObjectType()
export class Refund {
  /** The refund's unique ID. */
  @Field(() => ID)
  id: string

  /** The ID of the refund's associated location. */
  @Field(() => ID)
  locationId: string

  /** The ID of the transaction that the refunded tender is part of. */
  @Field(() => ID)
  transactionId: string

  /** The ID of the refunded tender. */
  @Field(() => ID)
  tenderId: string

  /** The timestamp for when the refund was created, in RFC 3339 format. */
  @Field({ nullable: true })
  createdAt?: string

  /** The reason for the refund being issued. */
  @Field()
  reason: string

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

  /** Indicates a refund's current status. */
  @Field()
  status: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  processingFeeMoney?: Money

  /**
   * Additional recipients (other than the merchant) receiving a portion of this refund.
   * For example, fees assessed on a refund of a purchase by a third party integration.
   */
  @Field(() => [AdditionalRecipient], { nullable: 'itemsAndList' })
  additionalRecipients?: AdditionalRecipient[]
}
