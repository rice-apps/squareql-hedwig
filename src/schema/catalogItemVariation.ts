import { Field, ID, Int, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

import { CatalogItemOptionValueForItemVariation } from './catalogItemOptionValueForItemVariation'
import { ItemVariationLocationOverrides } from './itemVariationLocationOverrides'
import { Money } from './money'

/**
 * An item variation (i.e., product) in the Catalog object model. Each item
 * may have a maximum of 250 item variations.
 */
@ObjectType()
export class CatalogItemVariation {
  /** The ID of the `CatalogItem` associated with this item variation. */
  @Field(() => ID, { nullable: true })
  itemId?: string

  /** The item variation's name. This is a searchable attribute for use in applicable query filters, and its value length is of Unicode code points. */
  @Field({ nullable: true })
  name?: string

  /** The item variation's SKU, if any. This is a searchable attribute for use in applicable query filters. */
  @Field({ nullable: true })
  sku?: string

  /**
   * The universal product code (UPC) of the item variation, if any. This is a searchable attribute for use in applicable query filters.
   * The value of this attribute should be a number of 12-14 digits long.  This restriction is enforced on the Square Seller Dashboard,
   * Square Point of Sale or Retail Point of Sale apps, where this attribute shows in the GTIN field. If a non-compliant UPC value is assigned
   * to this attribute using the API, the value is not editable on the Seller Dashboard, Square Point of Sale or Retail Point of Sale apps
   * unless it is updated to fit the expected format.
   */
  @Field({ nullable: true })
  upc?: string

  /**
   * The order in which this item variation should be displayed. This value is read-only. On writes, the ordinal
   * for each item variation within a parent `CatalogItem` is set according to the item variations's
   * position. On reads, the value is not guaranteed to be sequential or unique.
   */
  @Field(() => Int, { nullable: true })
  ordinal?: number

  /** Indicates whether the price of a CatalogItemVariation should be entered manually at the time of sale. */
  @Field({ nullable: true })
  pricingType?: string

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

  /** Per-location price and inventory overrides. */
  @Field(() => [ItemVariationLocationOverrides], { nullable: true })
  locationOverrides?: ItemVariationLocationOverrides[]

  /** If `true`, inventory tracking is active for the variation. */
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

  /** Arbitrary user metadata to associate with the item variation. This attribute value length is of Unicode code points. */
  @Field({ nullable: true })
  userData?: string

  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, then this is the duration of the service in milliseconds. For
   * example, a 30 minute appointment would have the value `1800000`, which is equal to
   * 30 (minutes) * 60 (seconds per minute) * 1000 (milliseconds per second).
   */
  @Field(() => BigInt, { nullable: true })
  serviceDuration?: bigint

  /**
   * If the `CatalogItem` that owns this item variation is of type
   * `APPOINTMENTS_SERVICE`, a bool representing whether this service is available for booking.
   */
  @Field({ nullable: true })
  availableForBooking?: boolean

  /**
   * List of item option values associated with this item variation. Listed
   * in the same order as the item options of the parent item.
   */
  @Field(() => [CatalogItemOptionValueForItemVariation], {
    nullable: 'itemsAndList'
  })
  itemOptionValues?: CatalogItemOptionValueForItemVariation[]

  /**
   * ID of the ???CatalogMeasurementUnit??? that is used to measure the quantity
   * sold of this item variation. If left unset, the item will be sold in
   * whole quantities.
   */
  @Field({ nullable: true })
  measurementUnitId?: string

  /**
   * Tokens of employees that can perform the service represented by this variation. Only valid for
   * variations of type `APPOINTMENTS_SERVICE`.
   */
  @Field(() => [String], { nullable: true })
  teamMemberIds?: string[]
}
