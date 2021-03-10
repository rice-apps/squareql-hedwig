import { Field, InputType } from 'type-graphql'

/** The query filter to return the items containing the specified item option IDs. */
@InputType()
export class CatalogQueryItemsForItemOptions {
  /**
   * A set of `CatalogItemOption` IDs to be used to find associated
   * `CatalogItem`s. All Items that contain all of the given Item Options (in any order)
   * will be returned.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  itemOptionIds?: string[]
}
