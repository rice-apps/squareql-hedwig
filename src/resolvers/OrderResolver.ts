import { ApolloError } from 'apollo-server-express'
import { SearchOrdersResponse as BaseSearchOrdersResponse } from 'square'
import { Arg, Query, Resolver } from 'type-graphql'
import { SearchOrdersRequest, SearchOrdersResponse } from '../schema'
import { getSquare } from '../utils/square'

@Resolver()
export class OrderResolver {
  @Query(() => SearchOrdersResponse, { nullable: true })
  async orders (
    @Arg('vendorName') vendorName: string,
      @Arg('request') request: SearchOrdersRequest
  ): Promise<BaseSearchOrdersResponse> {
    const squareService = getSquare(vendorName)

    if (typeof squareService === 'undefined') {
      throw new ApolloError(`Vendor ${vendorName} doesn't exist`)
    }

    return await squareService.getOrders(request)
  }
}
