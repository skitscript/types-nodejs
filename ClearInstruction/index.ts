import type { Identifier } from "..";

/**
 * Specifies that a flag is to be cleared.
 */
export type ClearInstruction = {
  /**
   * Identifies the type of instruction.
   */
  readonly type: `clear`;

  /**
   * The line from which the instruction originates.
   */
  readonly line: number;

  /**
   * The name of the flag which is to be cleared.
   */
  readonly flag: Identifier;
};
