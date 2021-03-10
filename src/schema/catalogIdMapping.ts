import { Field, ObjectType } from 'type-graphql'

/**
 * A mapping between a temporary client-supplied ID and a permanent server-generated ID.
 * When calling [UpsertCatalogObject](#endpoint-Catalog-UpsertCatalogObject) or
 * [BatchUpsertCatalogObjects](#endpoint-Catalog-BatchUpsertCatalogObjects) to
 * create a [CatalogObject](#type-CatalogObject) instance, you can supply
 * a temporary ID for the to-be-created object, especially when the object is to be referenced
 * elsewhere in the same request body. This temporary ID can be any string unique within
 * the call, but must be prefixed by "#".
 * After the request is submitted and the object created, a permanent server-generated ID is assigned
 * to the new object. The permanent ID is unique across the Square catalog.
 */
@ObjectType()
export class CatalogIdMapping {
  /** The client-supplied temporary `#`-prefixed ID for a new `CatalogObject`. */
  @Field({ nullable: true })
  clientObjectId?: string

  /** The permanent ID for the CatalogObject created by the server. */
  @Field({ nullable: true })
  objectId?: string
}
