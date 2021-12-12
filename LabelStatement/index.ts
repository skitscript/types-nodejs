import type { Identifier } from "../Identifier";

/**
 * Specifies that a label exists.
 */
export type LabelStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `label`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The name of the label.
   */
  readonly name: Identifier;
};
