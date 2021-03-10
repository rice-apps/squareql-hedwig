import { Field, InputType } from 'type-graphql'

/** The query filter to return the items containing the specified tax IDs. */
@InputType()
export class CatalogQueryItemsForTax {
  /** A set of `CatalogTax` IDs to be used to find associated `CatalogItem`s. */
  @Field(() => [String], { nullable: 'itemsAndList' })
  taxIds: string[]
}
