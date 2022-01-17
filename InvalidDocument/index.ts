import type { IdentifierInstance } from "../IdentifierInstance";
import type { Error } from "../Error";
import type { Warning } from "../Warning";

/**
 * The result of parsing an invalid document.
 */
export type InvalidDocument = {
  /**
   * Indicates the type of parsing result.
   */
  readonly type: `invalid`;

  /**
   * The errors parsed from the document.
   */
  readonly errors: ReadonlyArray<Error>;

  /**
   * The warnings parsed from the document.
   */
  readonly warnings: ReadonlyArray<Warning>;

  /**
   * Every instance of an identifier parsed from the document.
   */
  readonly identifierInstances: ReadonlyArray<IdentifierInstance>;
};
