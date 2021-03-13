import { Field, ID, ObjectType } from 'type-graphql'
import { Address } from './address'

/** Contains information on the recipient of a fulfillment. */
@ObjectType()
export class OrderFulfillmentRecipient {
  /**
   * The Customer ID of the customer associated with the fulfillment.
   * If `customer_id` is provided, the fulfillment recipient's `display_name`,
   * `email_address`, and `phone_number` are automatically populated from the
   * targeted customer profile. If these fields are set in the request, the request
   * values will override the information from the customer profile. If the
   * targeted customer profile does not contain the necessary information and
   * these fields are left unset, the request will result in an error.
   */
  @Field(() => ID, { nullable: true })
  customerId?: string

  /**
   * The display name of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  @Field({ nullable: true })
  displayName?: string

  /**
   * The email address of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  @Field({ nullable: true })
  emailAddress?: string

  /**
   * The phone number of the fulfillment recipient.
   * If provided, overrides the value pulled from the customer profile indicated by `customer_id`.
   */
  @Field({ nullable: true })
  phoneNumber?: string

  /** Represents a physical address. */
  @Field(() => Address, { nullable: true })
  address?: Address
}
