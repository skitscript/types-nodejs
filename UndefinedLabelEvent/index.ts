import type { Identifier } from "../Identifier";

/**
 * A jump or menu option references a nonexistent label.
 */
export type UndefinedLabelEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `undefinedLabel`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the label which does not exist.
   */
  readonly label: Identifier;
};
