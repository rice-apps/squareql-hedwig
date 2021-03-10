import { Field, ObjectType } from 'type-graphql'

import { MeasurementUnitCustom } from './measurementUnitCustom'

/**
 * Represents a unit of measurement to use with a quantity, such as ounces
 * or inches. Exactly one of the following fields are required: `custom_unit`,
 * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
 */
@ObjectType()
export class MeasurementUnit {
  /** The information needed to define a custom unit, provided by the seller. */
  @Field(() => MeasurementUnitCustom, { nullable: true })
  customUnit?: MeasurementUnitCustom

  /** Unit of area used to measure a quantity. */
  @Field({ nullable: true })
  areaUnit?: string

  /** The unit of length used to measure a quantity. */
  @Field({ nullable: true })
  lengthUnit?: string

  /** The unit of volume used to measure a quantity. */
  @Field({ nullable: true })
  volumeUnit?: string

  /** Unit of weight used to measure a quantity. */
  @Field({ nullable: true })
  weightUnit?: string

  @Field({ nullable: true })
  genericUnit?: string

  /** Unit of time used to measure a quantity (a duration). */
  @Field({ nullable: true })
  timeUnit?: string

  /** Describes the type of this unit and indicates which field contains the unit information. This is an ‘open’ enum. */
  @Field({ nullable: true })
  type?: string
}
