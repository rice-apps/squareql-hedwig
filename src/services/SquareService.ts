import {
  ApiError,
  Client,
  Environment,
  ListCatalogResponse,
  BatchRetrieveCatalogObjectsResponse
} from 'square'
import { ApolloError } from 'apollo-server-express'
import { SearchOrdersRequest, SearchOrdersResponse } from '../schema'

class SquareService {
  vendorName: string
  squareClient: Client

  constructor (
    vendorName: string,
    accessToken: string,
    isProductionSquare: boolean
  ) {
    this.vendorName = vendorName
    this.squareClient = new Client({
      accessToken: accessToken,
      environment: isProductionSquare
        ? Environment.Production
        : Environment.Sandbox
    })
  }

  async getCatalog (): Promise<ListCatalogResponse> {
    try {
      const { result } = await this.squareClient.catalogApi.listCatalog(
        undefined,
        'ITEM,CATEGORY,MODIFIER_LIST'
      )

      return result
    } catch (error) {
      if (error instanceof ApiError) {
        throw new ApolloError(
          `Getting Square catalog failed: ${JSON.stringify(error.result)}`
        )
      }

      throw new ApolloError(
        `Something went wrong getting Square catalog: ${JSON.stringify(error)}`
      )
    }
  }

  async getItems (
    itemIds: string[]
  ): Promise<BatchRetrieveCatalogObjectsResponse> {
    try {
      const {
        result
      } = await this.squareClient.catalogApi.batchRetrieveCatalogObjects({
        objectIds: itemIds
      })

      return result
    } catch (error) {
      if (error instanceof ApiError) {
        throw new ApolloError(
          `Retrieving item ${JSON.stringify(
            itemIds
          )} from Square failed because ${JSON.stringify(error.result)}`
        )
      }

      throw new ApolloError(
        `Something went wrong when retrieving item ${JSON.stringify(
          itemIds
        )}: ${JSON.stringify(error)}`
      )
    }
  }

  async getOrders (
    request: SearchOrdersRequest
  ): Promise<SearchOrdersResponse> {
    try {
      const { result } = await this.squareClient.ordersApi.searchOrders(request)

      return result
    } catch (error) {
      if (error instanceof ApiError) {
        throw new ApolloError(
          `Finding orders using Square failed because ${JSON.stringify(
            error.result
          )}`
        )
      }

      throw new ApolloError(
        `Something went wrong finding orders: ${JSON.stringify(error)}`
      )
    }
  }
}

export { SquareService }
