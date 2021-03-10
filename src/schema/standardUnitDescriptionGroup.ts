import { Field, ObjectType } from 'type-graphql'

import { StandardUnitDescription } from './standardUnitDescription'

/** Group of standard measurement units. */
@ObjectType()
export class StandardUnitDescriptionGroup {
  /** List of standard (non-custom) measurement units in this description group. */
  @Field(() => [StandardUnitDescription], { nullable: true })
  standardUnitDescriptions?: StandardUnitDescription[]

  /** IETF language tag. */
  @Field({ nullable: true })
  languageCode?: string
}
