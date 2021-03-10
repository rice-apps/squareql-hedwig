import { Arg, Query, Resolver } from 'type-graphql'
import { CatalogObject } from '../schema'
import { getSquare } from '../utils/square'

@Resolver(CatalogObject)
class CatalogResolver {
  @Query(() => [CatalogObject], { nullable: 'itemsAndList' })
  async catalog (@Arg('vendorName') vendorName: string) {
    return await getSquare(vendorName).getCatalog()
  }
}

export { CatalogResolver }
