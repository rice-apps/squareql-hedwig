import { Field, InputType } from 'type-graphql'

import { CatalogQueryExact } from './catalogQueryExact'
import { CatalogQueryItemsForItemOptions } from './catalogQueryItemsForItemOptions'
import { CatalogQueryItemsForModifierList } from './catalogQueryItemsForModifierList'
import { CatalogQueryItemsForTax } from './catalogQueryItemsForTax'
import { CatalogQueryItemVariationsForItemOptionValues } from './catalogQueryItemVariationsForItemOptionValues'
import { CatalogQueryPrefix } from './catalogQueryPrefix'
import { CatalogQueryRange } from './catalogQueryRange'
import { CatalogQuerySet } from './catalogQuerySet'
import { CatalogQuerySortedAttribute } from './catalogQuerySortedAttribute'
import { CatalogQueryText } from './catalogQueryText'

/**
 * A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.
 * Although a query can have multiple filters, only certain query types can be combined per call to [SearchCatalogObjects](#endpoint-Catalog-SearchCatalogObjects).
 * Any combination of the following types may be used together:
 * - [exact_query](#type-CatalogExactQuery)
 * - [prefix_query](#type-CatalogPrefixQuery)
 * - [range_query](#type-CatalogRangeQuery)
 * - [sorted_attribute_query](#type-CatalogSortedAttribute)
 * - [text_query](#type-CatalogTextQuery)
 * All other query types cannot be combined with any others.
 * When a query filter is based on an attribute, the attribute must be searchable.
 * Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.
 * * Searchable attribute and objects queryable by searchable attributes **
 * - `name`:  `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, 'CatalogModifierList`, `CatalogItemOption`, `CatalogItemOptionValue`
 * - `description`: `CatalogItem`, `CatalogItemOptionValue`
 * - `abbreviation`: `CatalogItem`
 * - `upc`: `CatalogItemVariation`
 * - `sku`: `CatalogItemVariation`
 * - `caption`: `CatalogImage`
 * - `display_name`: `CatalogItemOption`
 * For example, to search for [CatalogItem](#type-CatalogItem) objects by searchable attributes, you can use
 * the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query filter.
 */
@InputType()
export class CatalogQuery {
  /** The query expression to specify the key to sort search results. */
  @Field(() => CatalogQuerySortedAttribute, { nullable: true })
  sortedAttributeQuery?: CatalogQuerySortedAttribute

  /** The query filter to return the search result by exact match of the specified attribute name and value. */
  @Field(() => CatalogQueryExact, { nullable: true })
  exactQuery?: CatalogQueryExact

  /**
   * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
   * the `attribute_values`.
   */
  @Field(() => CatalogQuerySet, { nullable: true })
  setQuery?: CatalogQuerySet

  /** The query filter to return the search result whose named attribute values are prefixed by the specified attribute value. */
  @Field(() => CatalogQueryPrefix, { nullable: true })
  prefixQuery?: CatalogQueryPrefix

  /** The query filter to return the search result whose named attribute values fall between the specified range. */
  @Field(() => CatalogQueryRange, { nullable: true })
  rangeQuery?: CatalogQueryRange

  /** The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case. */
  @Field(() => CatalogQueryText, { nullable: true })
  textQuery?: CatalogQueryText

  /** The query filter to return the items containing the specified tax IDs. */
  @Field(() => CatalogQueryItemsForTax, { nullable: true })
  itemsForTaxQuery?: CatalogQueryItemsForTax

  /** The query filter to return the items containing the specified modifier list IDs. */
  @Field(() => CatalogQueryItemsForModifierList, { nullable: true })
  itemsForModifierListQuery?: CatalogQueryItemsForModifierList

  /** The query filter to return the items containing the specified item option IDs. */
  @Field(() => CatalogQueryItemsForItemOptions, { nullable: true })
  itemsForItemOptionsQuery?: CatalogQueryItemsForItemOptions

  /** The query filter to return the item variations containing the specified item option value IDs. */
  @Field(() => CatalogQueryItemVariationsForItemOptionValues, {
    nullable: true
  })
  itemVariationsForItemOptionValuesQuery?: CatalogQueryItemVariationsForItemOptionValues
}
