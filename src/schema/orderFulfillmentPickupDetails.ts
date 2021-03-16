import { Field, InputType, ObjectType } from 'type-graphql'
import { OrderFulfillmentPickupDetailsCurbsidePickupDetails } from './orderFulfillmentPickupDetailsCurbsidePickupDetails'
import { OrderFulfillmentRecipient } from './orderFulfillmentRecipient'

/** Contains details necessary to fulfill a pickup order. */
@ObjectType()
@InputType('OrderFulfillmentPickupDetailsInput')
export class OrderFulfillmentPickupDetails {
  /** Contains information on the recipient of a fulfillment. */
  @Field(() => OrderFulfillmentRecipient, { nullable: true })
  recipient?: OrderFulfillmentRecipient

  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * will expire if it is not accepted. Must be in RFC 3339 format
   * e.g., "2016-09-04T23:59:33.123Z". Expiration time can only be set up to 7
   * days in the future. If `expires_at` is not set, this pickup fulfillment
   * will be automatically accepted when placed.
   */
  @Field({ nullable: true })
  expiresAt?: string

  /**
   * The duration of time after which an open and accepted pickup fulfillment
   * will automatically move to the `COMPLETED` state. Must be in RFC3339
   * duration format e.g., "P1W3D".
   * If not set, this pickup fulfillment will remain accepted until it is canceled or completed.
   */
  @Field({ nullable: true })
  autoCompleteDuration?: string

  /** The schedule type of the pickup fulfillment. */
  @Field({ nullable: true })
  scheduleType?: string

  /**
   * The [timestamp](#workingwithdates) that represents the start of the pickup window.
   * Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   * For fulfillments with the schedule type `ASAP`, this is automatically set
   * to the current time plus the expected duration to prepare the fulfillment.
   */
  @Field({ nullable: true })
  pickupAt?: string

  /**
   * The window of time in which the order should be picked up after the `pickup_at` timestamp.
   * Must be in RFC3339 duration format, e.g., "P1W3D". Can be used as an
   * informational guideline for merchants.
   */
  @Field({ nullable: true })
  pickupWindowDuration?: string

  /**
   * The duration of time it takes to prepare this fulfillment.
   * Must be in RFC3339 duration format, e.g., "P1W3D".
   */
  @Field({ nullable: true })
  prepTimeDuration?: string

  /**
   * A note meant to provide additional instructions about the pickup
   * fulfillment displayed in the Square Point of Sale and set by the API.
   */
  @Field({ nullable: true })
  note?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was placed. Must be in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  placedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was accepted. In RFC3339 timestamp format,
   * e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  acceptedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was rejected. In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  rejectedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment is
   * marked as ready for pickup. In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  readyAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment expired.
   * In RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  expiredAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the fulfillment
   * was picked up by the recipient. In RFC3339 timestamp format,
   * e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  pickedUpAt?: string

  /**
   * The [timestamp](#workingwithdates) in RFC3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z",
   * indicating when the fulfillment was canceled.
   */
  @Field({ nullable: true })
  canceledAt?: string

  /** A description of why the pickup was canceled. Max length: 100 characters. */
  @Field({ nullable: true })
  cancelReason?: string

  /** If true, indicates this pickup order is for curbside pickup, not in-store pickup. */
  @Field({ nullable: true })
  isCurbsidePickup?: boolean

  /** Specific details for curbside pickup. */
  @Field(() => OrderFulfillmentPickupDetailsCurbsidePickupDetails, {
    nullable: true
  })
  curbsidePickupDetails?: OrderFulfillmentPickupDetailsCurbsidePickupDetails
}
