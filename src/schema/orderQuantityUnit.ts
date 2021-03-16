import { Field, InputType, Int, ObjectType } from 'type-graphql'

import { MeasurementUnit } from './measurementUnit'

/**
 * Contains the measurement unit for a quantity and a precision which
 * specifies the number of digits after the decimal point for decimal quantities.
 */
@ObjectType()
@InputType('OrderQuantityUnitInput')
export class OrderQuantityUnit {
  /**
   * Represents a unit of measurement to use with a quantity, such as ounces
   * or inches. Exactly one of the following fields are required: `custom_unit`,
   * `area_unit`, `length_unit`, `volume_unit`, and `weight_unit`.
   */
  @Field(() => MeasurementUnit, { nullable: true })
  measurementUnit?: MeasurementUnit

  /**
   * For non-integer quantities, represents the number of digits after the decimal point that are
   * recorded for this quantity.
   * For example, a precision of 1 allows quantities like `"1.0"` and `"1.1"`, but not `"1.01"`.
   * Min: 0. Max: 5.
   */
  @Field(() => Int, { nullable: true })
  precision?: number
}
