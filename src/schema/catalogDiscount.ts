import { Field, ObjectType } from 'type-graphql'
import { Money } from './money'

/** A discount applicable to items. */
@ObjectType()
export class CatalogDiscount {
  /** The discount name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  @Field({ nullable: true })
  name?: string

  /** How to apply a CatalogDiscount to a CatalogItem. */
  @Field({ nullable: true })
  discountType?: string

  /**
   * The percentage of the discount as a string representation of a decimal number, using a `.` as the decimal
   * separator and without a `%` sign. A value of `7.5` corresponds to `7.5%`. Specify a percentage of `0` if `discount_type`
   * is `VARIABLE_PERCENTAGE`.
   * Do not use this field for amount-based or variable discounts.
   */
  @Field({ nullable: true })
  percentage?: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  amountMoney?: Money

  /**
   * Indicates whether a mobile staff member needs to enter their PIN to apply the
   * discount to a payment in the Square Point of Sale app.
   */
  @Field({ nullable: true })
  pinRequired?: boolean

  /** The color of the discount display label in the Square Point of Sale app. This must be a valid hex color code. */
  @Field({ nullable: true })
  labelColor?: string

  @Field({ nullable: true })
  modifyTaxBasis?: string
}
