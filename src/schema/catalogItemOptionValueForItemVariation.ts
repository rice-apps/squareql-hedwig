import { Field, ObjectType } from 'type-graphql'

/**
 * A `CatalogItemOptionValue` links an item variation to an item option as
 * an item option value. For example, a t-shirt item may offer a color option and
 * a size option. An item option value would represent each variation of t-shirt:
 * For example, "Color:Red, Size:Small" or "Color:Blue, Size:Medium".
 */
@ObjectType()
export class CatalogItemOptionValueForItemVariation {
  /** The unique id of an item option. */
  @Field({ nullable: true })
  itemOptionId?: string

  /** The unique id of the selected value for the item option. */
  @Field({ nullable: true })
  itemOptionValueId?: string
}
