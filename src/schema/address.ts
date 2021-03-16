import { Field, InputType, ObjectType } from 'type-graphql'

/** Represents a physical address. */
@ObjectType()
@InputType('AddressInput')
export class Address {
  /**
   * The first line of the address.
   * Fields that start with `address_line` provide the address's most specific
   * details, like street number, street name, and building name. They do *not*
   * provide less specific details like city, state/province, or country (these
   * details are provided in other fields).
   */
  @Field({ nullable: true })
  addressLine1?: string

  /** The second line of the address, if any. */
  @Field({ nullable: true })
  addressLine2?: string

  /** The third line of the address, if any. */
  @Field({ nullable: true })
  addressLine3?: string

  /** The city or town of the address. */
  @Field({ nullable: true })
  locality?: string

  /** A civil region within the address's `locality`, if any. */
  @Field({ nullable: true })
  sublocality?: string

  /** A civil region within the address's `sublocality`, if any. */
  @Field({ nullable: true })
  sublocality2?: string

  /** A civil region within the address's `sublocality_2`, if any. */
  @Field({ nullable: true })
  sublocality3?: string

  /**
   * A civil entity within the address's country. In the US, this
   * is the state.
   */
  @Field({ nullable: true })
  administrativeDistrictLevel1?: string

  /**
   * A civil entity within the address's `administrative_district_level_1`.
   * In the US, this is the county.
   */
  @Field({ nullable: true })
  administrativeDistrictLevel2?: string

  /**
   * A civil entity within the address's `administrative_district_level_2`,
   * if any.
   */
  @Field({ nullable: true })
  administrativeDistrictLevel3?: string

  /** The address's postal code. */
  @Field({ nullable: true })
  postalCode?: string

  /**
   * Indicates the country associated with another entity, such as a business.
   * Values are in [ISO 3166-1-alpha-2 format](http://www.iso.org/iso/home/standards/country_codes.htm).
   */
  @Field({ nullable: true })
  country?: string

  /** Optional first name when it's representing recipient. */
  @Field({ nullable: true })
  firstName?: string

  /** Optional last name when it's representing recipient. */
  @Field({ nullable: true })
  lastName?: string

  /** Optional organization name when it's representing recipient. */
  @Field({ nullable: true })
  organization?: string
}
