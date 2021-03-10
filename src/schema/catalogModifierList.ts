import { Field, Int, ObjectType } from 'type-graphql'
import { CatalogObject } from './catalogObject'

/**
 * A list of modifiers applicable to items at the time of sale.
 * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
 * may contain "Ketchup", "Mustard", and "Relish" modifiers.
 * Use the `selection_type` field to specify whether or not multiple selections from
 * the modifier list are allowed.
 */
@ObjectType()
export class CatalogModifierList {
  /** The name for the `CatalogModifierList` instance. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  @Field({ nullable: true })
  name?: string

  /** Determines where this modifier list appears in a list of `CatalogModifierList` values. */
  @Field(() => Int, { nullable: true })
  ordinal?: number

  /** Indicates whether a CatalogModifierList supports multiple selections. */
  @Field({ nullable: true })
  selectionType?: string

  /**
   * The options included in the `CatalogModifierList`.
   * You must include at least one `CatalogModifier`.
   * Each CatalogObject must have type `MODIFIER` and contain
   * `CatalogModifier` data.
   */
  @Field(() => [CatalogObject], { nullable: 'itemsAndList' })
  modifiers?: CatalogObject[]
}
