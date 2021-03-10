import { ApiError, Client, Environment } from 'square'
import { ApolloError } from 'apollo-server-express'

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

  async getCatalog () {
    try {
      const {
        result: { objects }
      } = await this.squareClient.catalogApi.listCatalog(
        undefined,
        'ITEM,CATEGORY,MODIFIER_LIST'
      )

      return objects
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
}

export { SquareService }