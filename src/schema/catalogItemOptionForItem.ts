import { Field, ObjectType } from 'type-graphql'

/**
 * An option that can be assigned to an item.
 * For example, a t-shirt item may offer a color option or a size option.
 */
@ObjectType()
export class CatalogItemOptionForItem {
  /** The unique id of the item option, used to form the dimensions of the item option matrix in a specified order. */
  @Field({ nullable: true })
  itemOptionId?: string
}
