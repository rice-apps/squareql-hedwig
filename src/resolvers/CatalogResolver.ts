import { Arg, Query, Resolver } from 'type-graphql'
import { CatalogObject as BaseCatalogObject } from 'square'

import { CatalogObject } from '../schema'
import { getSquare } from '../utils/square'

@Resolver(CatalogObject)
class CatalogResolver {
  @Query(() => [CatalogObject], { nullable: 'itemsAndList' })
  async catalog (
    @Arg('vendorName') vendorName: string
  ): Promise<BaseCatalogObject[] | undefined> {
    return await getSquare(vendorName)?.getCatalog()
  }

  @Query(() => [CatalogObject], { nullable: 'itemsAndList' })
  async items (
    @Arg('vendorName') vendorName: string,
      @Arg('itemIds', () => [String]) itemIds: string[]
  ): Promise<BaseCatalogObject[] | undefined> {
    return await getSquare(vendorName)?.getItems(itemIds)
  }
}

export { CatalogResolver }
