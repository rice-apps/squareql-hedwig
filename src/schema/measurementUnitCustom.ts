import { Field, InputType, ObjectType } from 'type-graphql'

/** The information needed to define a custom unit, provided by the seller. */
@ObjectType()
@InputType('MeasurementUnitCustomInput')
export class MeasurementUnitCustom {
  /** The name of the custom unit, for example "bushel". */
  @Field()
  name: string

  /**
   * The abbreviation of the custom unit, such as "bsh" (bushel). This appears
   * in the cart for the Point of Sale app, and in reports.
   */
  @Field()
  abbreviation: string
}
