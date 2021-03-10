import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class CatalogInfoResponseLimits {
  /**
   * The maximum number of objects that may appear within a single batch in a
   * `/v2/catalog/batch-upsert` request.
   */
  @Field(() => Int, { nullable: true })
  batchUpsertMaxObjectsPerBatch?: number

  /**
   * The maximum number of objects that may appear across all batches in a
   * `/v2/catalog/batch-upsert` request.
   */
  @Field(() => Int, { nullable: true })
  batchUpsertMaxTotalObjects?: number

  /**
   * The maximum number of object IDs that may appear in a `/v2/catalog/batch-retrieve`
   * request.
   */
  @Field(() => Int, { nullable: true })
  batchRetrieveMaxObjectIds?: number

  /**
   * The maximum number of results that may be returned in a page of a
   * `/v2/catalog/search` response.
   */
  @Field(() => Int, { nullable: true })
  searchMaxPageLimit?: number

  /**
   * The maximum number of object IDs that may be included in a single
   * `/v2/catalog/batch-delete` request.
   */
  @Field(() => Int, { nullable: true })
  batchDeleteMaxObjectIds?: number

  /**
   * The maximum number of item IDs that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemTaxesMaxItemIds?: number

  /**
   * The maximum number of tax IDs to be enabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemTaxesMaxTaxesToEnable?: number

  /**
   * The maximum number of tax IDs to be disabled that may be included in a single
   * `/v2/catalog/update-item-taxes` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemTaxesMaxTaxesToDisable?: number

  /**
   * The maximum number of item IDs that may be included in a single
   * `/v2/catalog/update-item-modifier-lists` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemModifierListsMaxItemIds?: number

  /**
   * The maximum number of modifier list IDs to be enabled that may be included in
   * a single `/v2/catalog/update-item-modifier-lists` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemModifierListsMaxModifierListsToEnable?: number

  /**
   * The maximum number of modifier list IDs to be disabled that may be included in
   * a single `/v2/catalog/update-item-modifier-lists` request.
   */
  @Field(() => Int, { nullable: true })
  updateItemModifierListsMaxModifierListsToDisable?: number
}
