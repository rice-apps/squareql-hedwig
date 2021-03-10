import { Field, ObjectType } from 'type-graphql'
import BigInt from 'graphql-bigint'

/**
 * Represents a collection of catalog objects for the purpose of applying a
 * `PricingRule`. Including a catalog object will include all of its subtypes.
 * For example, including a category in a product set will include all of its
 * items and associated item variations in the product set. Including an item in
 * a product set will also include its item variations.
 */
@ObjectType()
export class CatalogProductSet {
  /**
   * User-defined name for the product set. For example, "Clearance Items"
   * or "Winter Sale Items".
   */
  @Field({ nullable: true })
  name?: string

  /**
   * Unique IDs for any `CatalogObject` included in this product set. Any
   * number of these catalog objects can be in an order for a pricing rule to apply.
   * This can be used with `product_ids_all` in a parent `CatalogProductSet` to
   * match groups of products for a bulk discount, such as a discount for an
   * entree and side combo.
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   * Max: 500 catalog object IDs.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  productIdsAny?: string[]

  /**
   * Unique IDs for any `CatalogObject` included in this product set.
   * All objects in this set must be included in an order for a pricing rule to apply.
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   * Max: 500 catalog object IDs.
   */
  @Field(() => [String], { nullable: 'itemsAndList' })
  productIdsAll?: string[]

  /**
   * If set, there must be exactly this many items from `products_any` or `products_all`
   * in the cart for the discount to apply.
   * Cannot be combined with either `quantity_min` or `quantity_max`.
   */
  @Field(() => BigInt, { nullable: true })
  quantityExact?: bigint

  /**
   * If set, there must be at least this many items from `products_any` or `products_all`
   * in a cart for the discount to apply. See `quantity_exact`. Defaults to 0 if
   * `quantity_exact`, `quantity_min` and `quantity_max` are all unspecified.
   */
  @Field(() => BigInt, { nullable: true })
  quantityMin?: bigint

  /**
   * If set, the pricing rule will apply to a maximum of this many items from
   * `products_any` or `products_all`.
   */
  @Field(() => BigInt, { nullable: true })
  quantityMax?: bigint

  /**
   * If set to `true`, the product set will include every item in the catalog.
   * Only one of `product_ids_all`, `product_ids_any`, or `all_products` can be set.
   */
  @Field({ nullable: true })
  allProducts?: boolean
}
