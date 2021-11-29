import type { Identifier } from "../Identifier";

/**
 * Two or more labels share a name.
 */
export type DuplicateLabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `duplicateLabel`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The first occurrence of the label.
   */
  readonly first: Identifier;

  /**
   * The second occurrence of the label.
   */
  readonly second: Identifier;
};
