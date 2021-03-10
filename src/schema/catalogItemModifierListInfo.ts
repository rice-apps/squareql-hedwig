import { Field, Int, ObjectType } from 'type-graphql'

import { CatalogModifierOverride } from './catalogModifierOverride'

/** Options to control the properties of a `CatalogModifierList` applied to a `CatalogItem` instance. */
@ObjectType()
export class CatalogItemModifierListInfo {
  /** The ID of the `CatalogModifierList` controlled by this `CatalogModifierListInfo`. */
  @Field({ nullable: true })
  modifierListId: string

  /** A set of `CatalogModifierOverride` objects that override whether a given `CatalogModifier` is enabled by default. */
  @Field(() => [CatalogModifierOverride], { nullable: 'itemsAndList' })
  modifierOverrides?: CatalogModifierOverride[]

  /** If 0 or larger, the smallest number of `CatalogModifier`s that must be selected from this `CatalogModifierList`. */
  @Field(() => Int, { nullable: true })
  minSelectedModifiers?: number

  /** If 0 or larger, the largest number of `CatalogModifier`s that can be selected from this `CatalogModifierList`. */
  @Field(() => Int, { nullable: true })
  maxSelectedModifiers?: number

  /** If `true`, enable this `CatalogModifierList`. The default value is `true`. */
  @Field({ nullable: true })
  enabled?: boolean
}
