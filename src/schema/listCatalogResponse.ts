import { Field, ObjectType } from 'type-graphql'
import { CatalogObject } from './catalogObject'
import { Error } from './error'

@ObjectType()
export class ListCatalogResponse {
  /** Any errors that occurred during the request. */
  @Field(() => [Error], { nullable: true })
  errors?: Error[]

  /**
   * The pagination cursor to be used in a subsequent request. If unset, this is the final response.
   * See [Pagination](https://developer.squareup.com/docs/basics/api101/pagination) for more information.
   */
  @Field({ nullable: true })
  cursor?: string

  /** The CatalogObjects returned. */
  @Field(() => [CatalogObject], { nullable: 'itemsAndList' })
  objects?: CatalogObject[]
}
