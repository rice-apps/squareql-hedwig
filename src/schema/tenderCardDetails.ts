import { Field, ObjectType } from 'type-graphql'
import { Card } from './card'

/** Represents additional details of a tender with `type` `CARD` or `SQUARE_GIFT_CARD` */
@ObjectType()
export class TenderCardDetails {
  /** Indicates the card transaction's current status. */
  @Field({ nullable: true })
  status?: string

  /**
   * Represents the payment details of a card to be used for payments. These
   * details are determined by the `card_nonce` generated by `SqPaymentForm`.
   */
  @Field(() => Card, { nullable: true })
  card?: Card

  /** Indicates the method used to enter the card's details. */
  @Field({ nullable: true })
  entryMethod?: string
}