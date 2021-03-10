import { Field, InputType } from 'type-graphql'

/** The query filter to return the search result whose named attribute values fall between the specified range. */
@InputType()
export class CatalogQueryRange {
  /** The name of the attribute to be searched. */
  @Field({ nullable: true })
  attributeName: string

  /** The desired minimum value for the search attribute (inclusive). */
  @Field(() => BigInt, { nullable: true })
  attributeMinValue?: bigint

  /** The desired maximum value for the search attribute (inclusive). */
  @Field(() => BigInt, { nullable: true })
  attributeMaxValue?: bigint
}
