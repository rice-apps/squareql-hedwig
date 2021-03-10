import { Field, Int, ObjectType } from 'type-graphql'

/**
 * An enumerated value that can link a
 * `CatalogItemVariation` to an item option as one of
 * its item option values.
 */
@ObjectType()
export class CatalogItemOptionValue {
  /** Unique ID of the associated item option. */
  @Field({ nullable: true })
  itemOptionId?: string

  /** Name of this item option value. This is a searchable attribute for use in applicable query filters. */
  @Field({ nullable: true })
  name?: string

  /** A human-readable description for the option value. This is a searchable attribute for use in applicable query filters. */
  @Field({ nullable: true })
  description?: string

  /**
   * The HTML-supported hex color for the item option (e.g., "#ff8d4e85").
   * Only displayed if `show_colors` is enabled on the parent `ItemOption`. When
   * left unset, `color` defaults to white ("#ffffff") when `show_colors` is
   * enabled on the parent `ItemOption`.
   */
  @Field({ nullable: true })
  color?: string

  /** Determines where this option value appears in a list of option values. */
  @Field(() => Int, { nullable: true })
  ordinal?: number
}
