import { Field, ID, InputType, ObjectType } from 'type-graphql'

/**
 * Represents a reward that may be applied to an order if the necessary
 * reward tier criteria are met. Rewards are created through the Loyalty API.
 */
@ObjectType()
@InputType('OrderRewardInput')
export class OrderReward {
  /** The identifier of the reward. */
  @Field(() => ID)
  id: string

  /** The identifier of the reward tier corresponding to this reward. */
  @Field(() => ID)
  rewardTierId: string
}
