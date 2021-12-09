import type { Identifier } from "../Identifier";

/**
 * A label is defined, but is never referenced.
 */
export type UnreferencedLabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unreferencedLabel`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the label which is not referenced.
   */
  readonly label: Identifier;
};
