import type { Identifier } from "..";

/**
 * Specifies that a flag is to be cleared.
 */
export type ClearStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `clear`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The name of the flag which is to be cleared.
   */
  readonly flag: Identifier;
};