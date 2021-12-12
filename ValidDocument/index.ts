import type { Statement } from "../Statement";
import type { Warning } from "../Warning";

/**
 * The result of parsing a valid document.
 */
export type ValidDocument = {
  /**
   * Indicates the type of parsing result.
   */
  readonly type: `valid`;

  /**
   * The statements parsed from the document.
   */
  readonly statements: ReadonlyArray<Statement>;

  /**
   * The warnings parsed from the document.
   */
  readonly warnings: ReadonlyArray<Warning>;
};