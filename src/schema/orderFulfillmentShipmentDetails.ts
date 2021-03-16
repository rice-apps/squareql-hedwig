import { Field, InputType, ObjectType } from 'type-graphql'
import { OrderFulfillmentRecipient } from './orderFulfillmentRecipient'

/** Contains details necessary to fulfill a shipment order. */
@ObjectType()
@InputType('OrderFulfillmentShipmentDetailsInput')
export class OrderFulfillmentShipmentDetails {
  /** Contains information on the recipient of a fulfillment. */
  @Field(() => OrderFulfillmentRecipient, { nullable: true })
  recipient?: OrderFulfillmentRecipient

  /**
   * The shipping carrier being used to ship this fulfillment
   * e.g. UPS, FedEx, USPS, etc.
   */
  @Field({ nullable: true })
  carrier?: string

  /** A note with additional information for the shipping carrier. */
  @Field({ nullable: true })
  shippingNote?: string

  /**
   * A description of the type of shipping product purchased from the carrier.
   * e.g. First Class, Priority, Express
   */
  @Field({ nullable: true })
  shippingType?: string

  /** The reference number provided by the carrier to track the shipment's progress. */
  @Field({ nullable: true })
  trackingNumber?: string

  /** A link to the tracking webpage on the carrier's website. */
  @Field({ nullable: true })
  trackingUrl?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the shipment was
   * requested. Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  placedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment was
   * moved to the `RESERVED` state. Indicates that preparation of this shipment has begun.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  inProgressAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * was moved to the `PREPARED` state. Indicates that the fulfillment is packaged.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  packagedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the shipment is
   * expected to be delivered to the shipping carrier. Must be in RFC 3339 timestamp
   * format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  expectedShippedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating when this fulfillment
   * was moved to the `COMPLETED`state. Indicates that the fulfillment has been given
   * to the shipping carrier. Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  shippedAt?: string

  /**
   * The [timestamp](#workingwithdates) indicating the shipment was canceled.
   * Must be in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  canceledAt?: string

  /** A description of why the shipment was canceled. */
  @Field({ nullable: true })
  cancelReason?: string

  /**
   * The [timestamp](#workingwithdates) indicating when the shipment
   * failed to be completed. Must be in RFC 3339 timestamp format, e.g.,
   * "2016-09-04T23:59:33.123Z".
   */
  @Field({ nullable: true })
  failedAt?: string

  /** A description of why the shipment failed to be completed. */
  @Field({ nullable: true })
  failureReason?: string
}
