import type { IdentifierInstance } from "../IdentifierInstance";
import type { Error } from "../Error";

/**
 * The result of parsing an invalid document.
 */
export type InvalidDocument = {
  /**
   * Indicates the type of parsing result.
   */
  readonly type: `invalid`;

  /**
   * The error parsed from the document.
   */
  readonly error: Error;

  /**
   * Every instance of an identifier parsed from the document.
   */
  readonly identifierInstances: ReadonlyArray<IdentifierInstance>;
};
