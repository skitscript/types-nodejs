import type { Identifier } from "../Identifier";

/**
 * A label is immediately followed by an unconditional jump; it is, effectively,
 * empty.
 */
export type EmptyLabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `emptyLabel`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the label which is immediately followed by an unconditional
   * jump.
   */
  readonly label: Identifier;
};
