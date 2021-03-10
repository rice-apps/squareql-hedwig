import { Field, ObjectType } from 'type-graphql'
import { SubscriptionPhase } from './subscriptionPhase'

/**
 * Describes a subscription plan. For more information, see
 * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
 */
@ObjectType()
export class CatalogSubscriptionPlan {
  /** The name of the plan. */
  @Field({ nullable: true })
  name?: string

  /** A list of SubscriptionPhase containing the [SubscriptionPhase](#type-SubscriptionPhase) for this plan. */
  @Field(() => [SubscriptionPhase], { nullable: 'itemsAndList' })
  phases?: SubscriptionPhase[]
}
