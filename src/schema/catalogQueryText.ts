import { Field, InputType } from 'type-graphql'

/** The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case. */
@InputType()
export class CatalogQueryText {
  /** A list of 1, 2, or 3 search keywords. Keywords with fewer than 3 characters are ignored. */
  @Field(() => [String], { nullable: true })
  keywords: string[]
}
