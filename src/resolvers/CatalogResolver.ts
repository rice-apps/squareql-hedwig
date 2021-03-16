import { Arg, Args, Query, Resolver } from 'type-graphql'
import {
  BatchRetrieveCatalogObjectsResponse as BaseBatchRetrieveCatalogObjectResponse,
  ListCatalogResponse as BaseListCatalogResponse
} from 'square'

import {
  BatchRetrieveCatalogObjectsResponse,
  ListCatalogResponse,
  ListCatalogArgs
} from '../schema'
import { getSquare } from '../utils/square'
import { ApolloError } from 'apollo-server-express'

@Resolver()
export class CatalogResolver {
  @Query(() => ListCatalogResponse)
  async catalog (
    @Arg('vendorName') vendorName: string,
      @Args() { cursor, types, catalogVersion }: ListCatalogArgs
  ): Promise<BaseListCatalogResponse> {
    const squareService = getSquare(vendorName)

    if (typeof squareService === 'undefined') {
      throw new ApolloError(`Vendor ${vendorName} doesn't exist`)
    }

    return await squareService.getCatalog(cursor, types, catalogVersion)
  }

  @Query(() => BatchRetrieveCatalogObjectsResponse)
  async items (
    @Arg('vendorName') vendorName: string,
      @Arg('itemIds', () => [String]) itemIds: string[]
  ): Promise<BaseBatchRetrieveCatalogObjectResponse> {
    const squareService = getSquare(vendorName)

    if (typeof squareService === 'undefined') {
      throw new ApolloError(`Vendor ${vendorName} doesn't exist`)
    }

    return squareService.getItems(itemIds)
  }
}
