import type { Identifier } from "../Identifier";

/**
 * A label is immediately followed by an unconditional jump; it is, effectively,
 * empty.
 */
export type EmptyLabelWarning = {
  /**
   * Identifies the type of warning.
   */
  readonly type: `emptyLabel`;

  /**
   * The line from which the warning originates.
   */
  readonly line: number;

  /**
   * The name of the label which is immediately followed by an unconditional
   * jump.
   */
  readonly label: Identifier;
};
