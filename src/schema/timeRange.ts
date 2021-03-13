import { Field, InputType } from 'type-graphql'

/**
 * Represents a generic time range. The start and end values are
 * represented in RFC 3339 format. Time ranges are customized to be
 * inclusive or exclusive based on the needs of a particular endpoint.
 * Refer to the relevant endpoint-specific documentation to determine
 * how time ranges are handled.
 */
@InputType()
export class TimeRange {
  /**
   * A datetime value in RFC 3339 format indicating when the time range
   * starts.
   */
  @Field({ nullable: true })
  startAt?: string

  /**
   * A datetime value in RFC 3339 format indicating when the time range
   * ends.
   */
  @Field({ nullable: true })
  endAt?: string
}
