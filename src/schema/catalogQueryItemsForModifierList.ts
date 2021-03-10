import { Field, InputType } from 'type-graphql'

/** The query filter to return the items containing the specified modifier list IDs. */
@InputType()
export class CatalogQueryItemsForModifierList {
  /** A set of `CatalogModifierList` IDs to be used to find associated `CatalogItem`s. */
  @Field(() => [String], { nullable: 'itemsAndList' })
  modifierListIds: string[]
}
