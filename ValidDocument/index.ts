import type { IdentifierInstance } from "../IdentifierInstance";
import type { Instruction } from "../Instruction";
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
   * The instructions parsed from the document.
   */
  readonly instructions: ReadonlyArray<Instruction>;

  /**
   * The warnings parsed from the document.
   */
  readonly warnings: ReadonlyArray<Warning>;

  /**
   * Every instance of an identifier parsed from the document.
   */
  readonly identifierInstances: ReadonlyArray<IdentifierInstance>;
};
