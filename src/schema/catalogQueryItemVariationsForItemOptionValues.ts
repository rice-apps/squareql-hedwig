import { Field, InputType } from 'type-graphql'

/** The query filter to return the item variations containing the specified item option value IDs. */
@InputType()
export class CatalogQueryItemVariationsForItemOptionValues {
  /**
   * A set of `CatalogItemOptionValue` IDs to be used to find associated
   * `CatalogItemVariation`s. All ItemVariations that contain all of the given
   * Item Option Values (in any order) will be returned.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  itemOptionValueIds?: string[]
}
