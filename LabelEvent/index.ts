import type { Identifier } from "../Identifier";

/**
 * Specifies that a label exists.
 */
export type LabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `label`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the label.
   */
  readonly name: Identifier;
};
