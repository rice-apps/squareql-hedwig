import { Field, ObjectType } from 'type-graphql'
import { CatalogObject } from './catalogObject'
import { Error } from './error'

@ObjectType()
export class BatchRetrieveCatalogObjectsResponse {
  /** Any errors that occurred during the request. */
  @Field(() => [Error], { nullable: 'itemsAndList' })
  errors?: Error[]

  /** A list of [CatalogObject](#type-catalogobject)s returned. */
  @Field(() => [CatalogObject], { nullable: 'itemsAndList' })
  objects?: CatalogObject[]

  /** A list of [CatalogObject](#type-catalogobject)s referenced by the object in the `objects` field. */
  @Field(() => [CatalogObject], { nullable: 'itemsAndList' })
  relatedObjects?: CatalogObject[]
}
