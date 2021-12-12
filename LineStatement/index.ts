import type { Formatted } from "../Formatted";

/**
 * Specifies that a line of dialog is to be shown.
 */
export type LineStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `line`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The content of the line.
   */
  readonly content: Formatted;
};
