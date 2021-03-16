import { ArgsType, Field } from 'type-graphql'
import BigInt from 'graphql-bigint'

@ArgsType()
export class ListCatalogArgs {
  @Field({ nullable: true })
  cursor?: string

  @Field({ nullable: true, defaultValue: 'ITEM,CATEGORY,MODIFIER_LIST' })
  types?: string

  @Field(() => BigInt, { nullable: true })
  catalogVersion?: bigint
}
