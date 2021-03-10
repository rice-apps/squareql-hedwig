import { Field, ObjectType } from 'type-graphql'

/** Options to control how to override the default behavior of the specified modifier. */
@ObjectType()
export class CatalogModifierOverride {
  /** The ID of the `CatalogModifier` whose default behavior is being overridden. */
  @Field({ nullable: true })
  modifierId: string

  /** If `true`, this `CatalogModifier` should be selected by default for this `CatalogItem`. */
  @Field({ nullable: true })
  onByDefault?: boolean
}
