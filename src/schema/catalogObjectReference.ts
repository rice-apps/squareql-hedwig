import { Field, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

/**
 * A reference to a Catalog object at a specific version. In general this is
 * used as an entry point into a graph of catalog objects, where the objects exist
 * at a specific version.
 */
@ObjectType()
export class CatalogObjectReference {
  /** The ID of the referenced object. */
  @Field({ nullable: true })
  objectId?: string

  /** The version of the object. */
  @Field(() => BigInt, { nullable: true })
  catalogVersion?: bigint
}
