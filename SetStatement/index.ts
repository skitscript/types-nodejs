import type { Identifier } from "..";

/**
 * Specifies that a flag is to be set.
 */
export type SetStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `set`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The names of the flag which is to be set.
   */
  readonly flag: Identifier;
};
