import type { Identifier } from "../Identifier";

/**
 * A flag is referenced but never set.
 */
export type FlagNeverSetWarning = {
  /**
   * Identifies the type of warning.
   */
  readonly type: `flagNeverSet`;

  /**
   * The line from which the warning originates.
   */
  readonly line: number;

  /**
   * The name of the flag.
   */
  readonly flag: Identifier;
};
