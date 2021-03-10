import { Field, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

import { Money } from './money'

/** Price and inventory alerting overrides for a `CatalogItemVariation` at a specific `Location`. */
@ObjectType()
export class ItemVariationLocationOverrides {
  /** The ID of the `Location`. */
  @Field({ nullable: true })
  locationId?: string

  /**
   * Represents an amount of money. `Money` fields can be signed or unsigned.
   * Fields that do not explicitly define whether they are signed or unsigned are
   * considered unsigned and can only hold positive amounts. For signed fields, the
   * sign of the value indicates the purpose of the money transfer. See
   * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
   * for more information.
   */
  @Field(() => Money, { nullable: true })
  priceMoney?: Money

  /** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
  @Field({ nullable: true })
  pricingType?: string

  /** If `true`, inventory tracking is active for the `CatalogItemVariation` at this `Location`. */
  @Field({ nullable: true })
  trackInventory?: boolean

  /** Indicates whether Square should alert the merchant when the inventory quantity of a CatalogItemVariation is low. */
  @Field({ nullable: true })
  inventoryAlertType?: string

  /**
   * If the inventory quantity for the variation is less than or equal to this value and `inventory_alert_type`
   * is `LOW_QUANTITY`, the variation displays an alert in the merchant dashboard.
   * This value is always an integer.
   */
  @Field(() => BigInt, { nullable: true })
  inventoryAlertThreshold?: bigint
}
