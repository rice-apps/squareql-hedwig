import { Field, ObjectType } from 'type-graphql'
import { CatalogObject } from './catalogObject'

/** A batch of catalog objects. */
@ObjectType()
export class CatalogObjectBatch {
  /** A list of CatalogObjects belonging to this batch. */
  @Field(() => [CatalogObject])
  objects: CatalogObject[]
}
