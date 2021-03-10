import { Field, ObjectType } from 'type-graphql'

/** A Square API V1 identifier of an item, including the object ID and its associated location ID. */
@ObjectType()
export class CatalogV1Id {
  /** The ID for an object used in the Square API V1, if the object ID differs from the Square API V2 object ID. */
  @Field({ nullable: true })
  catalogV1Id?: string

  /** The ID of the `Location` this Connect V1 ID is associated with. */
  @Field({ nullable: true })
  locationId?: string
}
