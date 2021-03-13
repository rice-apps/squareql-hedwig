import { Field, ObjectType } from 'type-graphql'

/** Specific details for curbside pickup. */
@ObjectType()
export class OrderFulfillmentPickupDetailsCurbsidePickupDetails {
  /** Specific details for curbside pickup, such as parking number, vehicle model, etc. */
  @Field({ nullable: true })
  curbsideDetails?: string

  /**
   * The [timestamp](#workingwithdates) in RFC 3339 timestamp format, e.g., "2016-09-04T23:59:33.123Z",
   * indicating when the buyer arrived and is waiting for pickup.
   */
  @Field({ nullable: true })
  buyerArrivedAt?: string
}
