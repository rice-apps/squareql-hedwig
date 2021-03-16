import { Field, ObjectType } from 'type-graphql'
import { Error } from './error'
import { Order } from './order'

@ObjectType()
export class CreateOrderResponse {
  @Field(() => Order, { nullable: true })
  order?: Order

  @Field(() => [Error], { nullable: 'itemsAndList' })
  errors?: Error[]
}
