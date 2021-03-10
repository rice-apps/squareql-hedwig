import { Field, ObjectType } from 'type-graphql'

/** A category to which a `CatalogItem` instance belongs. */
@ObjectType()
export class CatalogCategory {
  /** The category name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  @Field({ nullable: true })
  name?: string
}
