import { Field, ObjectType } from 'type-graphql'

import { MeasurementUnit } from './measurementUnit'

/** Contains the name and abbreviation for standard measurement unit. */
@ObjectType()
export class StandardUnitDescription {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces
   * or inches. Exactly one of the following fields are required: `custom_unit`,
   * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
   */
  @Field(() => MeasurementUnit, { nullable: true })
  unit?: MeasurementUnit

  /** UI display name of the measurement unit. For example, 'Pound'. */
  @Field({ nullable: true })
  name?: string

  /** UI display abbreviation for the measurement unit. For example, 'lb'. */
  @Field({ nullable: true })
  abbreviation?: string
}
