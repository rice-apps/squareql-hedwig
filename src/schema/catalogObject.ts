import { Field, ID, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

import { CatalogCategory } from './catalogCategory'
import { CatalogDiscount } from './catalogDiscount'
import { CatalogImage } from './catalogImage'
import { CatalogItem } from './catalogItem'
import { CatalogItemOption } from './catalogItemOption'
import { CatalogItemOptionValue } from './catalogItemOptionValue'
import { CatalogItemVariation } from './catalogItemVariation'
import { CatalogMeasurementUnit } from './catalogMeasurementUnit'
import { CatalogModifier } from './catalogModifier'
import { CatalogModifierList } from './catalogModifierList'
import { CatalogPricingRule } from './catalogPricingRule'
import { CatalogProductSet } from './catalogProductSet'
import { CatalogQuickAmountsSettings } from './catalogQuickAmountsSettings'
import { CatalogSubscriptionPlan } from './catalogSubscriptionPlan'
import { CatalogTax } from './catalogTax'
import { CatalogTimePeriod } from './catalogTimePeriod'
import { CatalogV1Id } from './catalogV1Id'

/**
 * The wrapper object for the Catalog entries of a given object type.
 * The type of a particular `CatalogObject` is determined by the value of the
 * `type` attribute and only the corresponding data attribute can be set on the `CatalogObject` instance.
 * For example, the following list shows some instances of `CatalogObject` of a given `type` and
 * their corresponding data attribute that can be set:
 * - For a `CatalogObject` of the `ITEM` type, set the `item_data` attribute to yield the `CatalogItem` object.
 * - For a `CatalogObject` of the `ITEM_VARIATION` type, set the `item_variation_data` attribute to yield the `CatalogItemVariation` object.
 * - For a `CatalogObject` of the `MODIFIER` type, set the `modifier_data` attribute to yield the `CatalogModifier` object.
 * - For a `CatalogObject` of the `MODIFIER_LIST` type, set the `modifier_list_data` attribute to yield the `CatalogModifierList` object.
 * - For a `CatalogObject` of the `CATEGORY` type, set the `category_data` attribute to yield the `CatalogCategory` object.
 * - For a `CatalogObject` of the `DISCOUNT` type, set the `discount_data` attribute to yield the `CatalogDiscount` object.
 * - For a `CatalogObject` of the `TAX` type, set the `tax_data` attribute to yield the `CatalogTax` object.
 * - For a `CatalogObject` of the `IMAGE` type, set the `image_data` attribute to yield the `CatalogImageData`  object.
 * - For a `CatalogObject` of the `QUICK_AMOUNTS_SETTINGS` type, set the `quick_amounts_settings_data` attribute to yield the `CatalogQuickAmountsSettings` object.
 * - For a `CatalogObject` of the `PRICING_RULE` type, set the `pricing_rule_data` attribute to yield the `CatalogPricingRule` object.
 * - For a `CatalogObject` of the `TIME_PERIOD` type, set the `time_period_data` attribute to yield the `CatalogTimePeriod` object.
 * - For a `CatalogObject` of the `PRODUCT_SET` type, set the `product_set_data` attribute to yield the `CatalogProductSet`  object.
 * - For a `CatalogObject` of the `SUBSCRIPTION_PLAN` type, set the `subscription_plan_data` attribute to yield the `CatalogSubscriptionPlan` object.
 * For a more detailed discussion of the Catalog data model, please see the
 * [Design a Catalog](https://developer.squareup.com/docs/catalog-api/design-a-catalog) guide.
 */
@ObjectType()
export class CatalogObject {
  /**
   * Possible types of CatalogObjects returned from the Catalog, each
   * containing type-specific properties in the `*_data` field corresponding to the object type.
   */
  @Field()
  type: string

  /**
   * An identifier to reference this object in the catalog. When a new `CatalogObject`
   * is inserted, the client should set the id to a temporary identifier starting with
   * a "`#`" character. Other objects being inserted or updated within the same request
   * may use this identifier to refer to the new object.
   * When the server receives the new object, it will supply a unique identifier that
   * replaces the temporary identifier for all future references.
   */
  @Field(() => ID)
  id: string

  /**
   * Last modification [timestamp](https://developer.squareup.com/docs/build-basics/working-with-dates) in RFC 3339 format, e.g., `"2016-08-15T23:59:33.123Z"`
   * would indicate the UTC time (denoted by `Z`) of August 15, 2016 at 23:59:33 and 123 milliseconds.
   */
  @Field({ nullable: true })
  updatedAt?: string

  /**
   * The version of the object. When updating an object, the version supplied
   * must match the version in the database, otherwise the write will be rejected as conflicting.
   */
  @Field(() => BigInt, { nullable: true })
  version?: bigint

  /**
   * If `true`, the object has been deleted from the database. Must be `false` for new objects
   * being inserted. When deleted, the `updated_at` field will equal the deletion time.
   */
  @Field({ nullable: true })
  isDeleted?: boolean

  /**
   * The Connect v1 IDs for this object at each location where it is present, where they
   * differ from the object's Connect V2 ID. The field will only be present for objects that
   * have been created or modified by legacy APIs.
   */
  @Field(() => [CatalogV1Id], { nullable: 'itemsAndList' })
  catalogV1Ids?: CatalogV1Id[]

  /**
   * If `true`, this object is present at all locations (including future locations), except where specified in
   * the `absent_at_location_ids` field. If `false`, this object is not present at any locations (including future locations),
   * except where specified in the `present_at_location_ids` field. If not specified, defaults to `true`.
   */
  @Field({ nullable: true })
  presentAtAllLocations?: boolean

  /** A list of locations where the object is present, even if `present_at_all_locations` is `false`. */
  @Field(() => [String], { nullable: 'itemsAndList' })
  presentAtLocationIds?: string[]

  /** A list of locations where the object is not present, even if `present_at_all_locations` is `true`. */
  @Field(() => [String], { nullable: 'itemsAndList' })
  absentAtLocationIds?: string[]

  /** Identifies the `CatalogImage` attached to this `CatalogObject`. */
  @Field({ nullable: true })
  imageId?: string

  /** A [CatalogObject](#type-CatalogObject) instance of the `ITEM` type, also referred to as an item, in the catalog. */
  @Field(() => CatalogItem, { nullable: true })
  itemData?: CatalogItem

  /** A category to which a `CatalogItem` instance belongs. */
  @Field(() => CatalogCategory, { nullable: true })
  categoryData?: CatalogCategory

  /**
   * An item variation (i.e., product) in the Catalog object model. Each item
   * may have a maximum of 250 item variations.
   */
  @Field(() => CatalogItemVariation, { nullable: true })
  itemVariationData?: CatalogItemVariation

  /** A tax applicable to an item. */
  @Field(() => CatalogTax, { nullable: true })
  taxData?: CatalogTax

  /** A discount applicable to items. */
  @Field(() => CatalogDiscount, { nullable: true })
  discountData?: CatalogDiscount

  /**
   * A list of modifiers applicable to items at the time of sale.
   * For example, a "Condiments" modifier list applicable to a "Hot Dog" item
   * may contain "Ketchup", "Mustard", and "Relish" modifiers.
   * Use the `selection_type` field to specify whether or not multiple selections from
   * the modifier list are allowed.
   */
  @Field(() => CatalogModifierList, { nullable: true })
  modifierListData?: CatalogModifierList

  /** A modifier applicable to items at the time of sale. */
  @Field(() => CatalogModifier, { nullable: true })
  modifierData?: CatalogModifier

  /** Represents a time period - either a single period or a repeating period. */
  @Field(() => CatalogTimePeriod, { nullable: true })
  timePeriodData?: CatalogTimePeriod

  /**
   * Represents a collection of catalog objects for the purpose of applying a
   * `PricingRule`. Including a catalog object will include all of its subtypes.
   * For example, including a category in a product set will include all of its
   * items and associated item variations in the product set. Including an item in
   * a product set will also include its item variations.
   */
  @Field(() => CatalogProductSet, { nullable: true })
  productSetData?: CatalogProductSet

  /**
   * Defines how discounts are automatically applied to a set of items that match the pricing rule
   * during the active time period.
   */
  @Field(() => CatalogPricingRule, { nullable: true })
  pricingRuleData?: CatalogPricingRule

  /**
   * An image file to use in Square catalogs. It can be associated with catalog
   * items, item variations, and categories.
   */
  @Field(() => CatalogImage, { nullable: true })
  imageData?: CatalogImage

  /**
   * Represents the unit used to measure a `CatalogItemVariation` and
   * specifies the precision for decimal quantities.
   */
  @Field(() => CatalogMeasurementUnit, { nullable: true })
  measurementUnitData?: CatalogMeasurementUnit

  /**
   * Describes a subscription plan. For more information, see
   * [Set Up and Manage a Subscription Plan](https://developer.squareup.com/docs/subscriptions-api/setup-plan).
   */
  @Field(() => CatalogSubscriptionPlan, { nullable: true })
  subscriptionPlanData?: CatalogSubscriptionPlan

  /** A group of variations for a `CatalogItem`. */
  @Field(() => CatalogItemOption, { nullable: true })
  itemOptionData?: CatalogItemOption

  /**
   * An enumerated value that can link a
   * `CatalogItemVariation` to an item option as one of
   * its item option values.
   */
  @Field(() => CatalogItemOptionValue, { nullable: true })
  itemOptionValueData?: CatalogItemOptionValue

  /** A parent Catalog Object model represents a set of Quick Amounts and the settings control the amounts. */
  @Field(() => CatalogQuickAmountsSettings, { nullable: true })
  quickAmountsSettingsData?: CatalogQuickAmountsSettings
}
