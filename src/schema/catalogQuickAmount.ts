import { Field, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

import { Money } from './money'

/** Represents a Quick Amount in the Catalog. */
@ObjectType()
export class CatalogQuickAmount {
  /** Determines the type of a specific Quick Amount. */
  @Field()
  type: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money)
  amount: Money

  /**
   * Describes the ranking of the Quick Amount provided by machine learning model, in the range [0, 100].
   * MANUAL type amount will always have score = 100.
   */
  @Field(() => BigInt, { nullable: true })
  score?: bigint

  /** The order in which this Quick Amount should be displayed. */
  @Field(() => BigInt, { nullable: true })
  ordinal?: bigint
}
