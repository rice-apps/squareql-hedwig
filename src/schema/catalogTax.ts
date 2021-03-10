import { Field, ObjectType } from 'type-graphql'

/** A tax applicable to an item. */
@ObjectType()
export class CatalogTax {
  /** The tax's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  @Field({ nullable: true })
  name?: string

  /** When to calculate the taxes due on a cart. */
  @Field({ nullable: true })
  calculationPhase?: string

  /** Whether to the tax amount should be additional to or included in the CatalogItem price. */
  @Field({ nullable: true })
  inclusionType?: string

  /**
   * The percentage of the tax in decimal form, using a `'.'` as the decimal separator and without a `'%'` sign.
   * A value of `7.5` corresponds to 7.5%.
   */
  @Field({ nullable: true })
  percentage?: string

  /**
   * If `true`, the fee applies to custom amounts entered into the Square Point of Sale
   * app that are not associated with a particular `CatalogItem`.
   */
  @Field({ nullable: true })
  appliesToCustomAmounts?: boolean

  /** A Boolean flag to indicate whether the tax is displayed as enabled (`true`) in the Square Point of Sale app or not (`false`). */
  @Field({ nullable: true })
  enabled?: boolean
}
