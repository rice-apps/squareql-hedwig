import { Field, ObjectType } from 'type-graphql'

/** Represents the origination details of an order. */
@ObjectType()
export class OrderSource {
  /**
   * The name used to identify the place (physical or digital) that an order originates.
   * If unset, the name defaults to the name of the application that created the order.
   */
  @Field({ nullable: true })
  name?: string
}
