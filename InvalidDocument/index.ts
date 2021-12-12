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
};
