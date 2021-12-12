import type { Identifier } from "../Identifier";

/**
 * Specifies a change of location.
 */
export type LocationStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `location`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The name of the background to display.
   */
  readonly background: Identifier;
};
