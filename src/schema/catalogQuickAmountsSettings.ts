import { Field, ObjectType } from 'type-graphql'
import { CatalogQuickAmount } from './catalogQuickAmount'

/** A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts. */
@ObjectType()
export class CatalogQuickAmountsSettings {
  /** Determines a seller's option on Quick Amounts feature. */
  @Field()
  option: string

  /**
   * Represents location's eligibility for auto amounts
   * The boolean should be consistent with whether there are AUTO amounts in the `amounts`.
   */
  @Field({ nullable: true })
  eligibleForAutoAmounts?: boolean

  /** Represents a set of Quick Amounts at this location. */
  @Field(() => [CatalogQuickAmount], { nullable: 'itemsAndList' })
  amounts?: CatalogQuickAmount[]
}
