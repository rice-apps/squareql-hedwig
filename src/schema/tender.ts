import { Field, ID, ObjectType } from 'type-graphql'
import { AdditionalRecipient } from './additionalRecipient'
import { Money } from './money'
import { TenderCardDetails } from './tenderCardDetails'
import { TenderCashDetails } from './tenderCashDetails'

/** Represents a tender (i.e., a method of payment) used in a Square transaction. */
@ObjectType()
export class Tender {
  /** The tender's unique ID. */
  @Field(() => ID, { nullable: true })
  id?: string

  /** The ID of the transaction's associated location. */
  @Field(() => ID, { nullable: true })
  locationId?: string

  /** The ID of the tender's associated transaction. */
  @Field(() => ID, { nullable: true })
  transactionId?: string

  /** The timestamp for when the tender was created, in RFC 3339 format. */
  @Field({ nullable: true })
  createdAt?: string

  /** An optional note associated with the tender at the time of payment. */
  @Field({ nullable: true })
  note?: string

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
  tipMoney?: Money

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
   * If the tender is associated with a customer or represents a customer's card on file,
   * this is the ID of the associated customer.
   */
  @Field(() => ID, { nullable: true })
  customerId?: string

  /** Indicates a tender's type. */
  @Field()
  type: string

  /** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
  @Field(() => TenderCardDetails, { nullable: true })
  cardDetails?: TenderCardDetails

  /** Represents the details of a tender with `type` `CASH`. */
  @Field(() => TenderCashDetails, { nullable: true })
  cashDetails?: TenderCashDetails

  /**
   * Additional recipients (other than the merchant) receiving a portion of this tender.
   * For example, fees assessed on the purchase by a third party integration.
   */
  @Field(() => [AdditionalRecipient], { nullable: 'itemsAndList' })
  additionalRecipients?: AdditionalRecipient[]

  /**
   * The ID of the [Payment](#type-payment) that corresponds to this tender.
   * This value is only present for payments created with the v2 Payments API.
   */
  @Field(() => ID, { nullable: true })
  paymentId?: string
}
