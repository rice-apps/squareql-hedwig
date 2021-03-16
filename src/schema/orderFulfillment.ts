import { Field, ID, InputType, ObjectType } from 'type-graphql'
import { OrderFulfillmentPickupDetails } from './orderFulfillmentPickupDetails'
import { OrderFulfillmentShipmentDetails } from './orderFulfillmentShipmentDetails'

/** Contains details on how to fulfill this order. */
@ObjectType()
@InputType('OrderFulfillmentInput')
export class OrderFulfillment {
  /** Unique ID that identifies the fulfillment only within this order. */
  @Field(() => ID, { nullable: true })
  uid?: string

  /** The type of fulfillment. */
  @Field({ nullable: true })
  type?: string

  /** The current state of this fulfillment. */
  @Field({ nullable: true })
  state?: string

  /** Contains details necessary to fulfill a pickup order. */
  @Field(() => OrderFulfillmentPickupDetails, { nullable: true })
  pickupDetails?: OrderFulfillmentPickupDetails

  /** Contains details necessary to fulfill a shipment order. */
  @Field(() => OrderFulfillmentShipmentDetails, { nullable: true })
  shipmentDetails?: OrderFulfillmentShipmentDetails
}
