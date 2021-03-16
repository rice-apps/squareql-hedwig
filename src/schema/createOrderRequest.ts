import { Field, InputType } from 'type-graphql'
import { Order } from './order'

@InputType()
export class CreateOrderRequest {
  @Field(() => Order, { nullable: true })
  order?: Order

  @Field({ nullable: true })
  idempotencyKey?: string
}
