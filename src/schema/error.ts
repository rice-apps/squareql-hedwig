import { Field, ObjectType } from 'type-graphql'

/**
 * Represents an error encountered during a request to the Connect API.
 * See [Handling errors](#handlingerrors) for more information.
 */
@ObjectType()
export class Error {
  /**
   * Indicates which high-level category of error has occurred during a
   * request to the Connect API.
   */
  @Field()
  category: string

  /**
   * Indicates the specific error that occurred during a request to a
   * Square API.
   */
  @Field()
  code: string

  /** A human-readable description of the error for debugging purposes. */
  @Field({ nullable: true })
  detail?: string

  /**
   * The name of the field provided in the original request (if any) that
   * the error pertains to.
   */
  @Field({ nullable: true })
  field?: string
}
