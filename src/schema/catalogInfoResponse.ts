import { Field, ObjectType } from 'type-graphql'

import { CatalogInfoResponseLimits } from './catalogInfoResponseLimits'
import { Error } from './error'
import { StandardUnitDescriptionGroup } from './standardUnitDescriptionGroup'

@ObjectType()
export class CatalogInfoResponse {
  /** Any errors that occurred during the request. */
  @Field(() => [Error], { nullable: 'itemsAndList' })
  errors?: Error[]

  @Field(() => CatalogInfoResponse, { nullable: true })
  limits?: CatalogInfoResponseLimits

  /** Group of standard measurement units. */
  @Field(() => StandardUnitDescriptionGroup, { nullable: true })
  standardUnitDescriptionGroup?: StandardUnitDescriptionGroup
}
