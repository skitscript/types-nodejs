import type { Formatted } from "../Formatted";

/**
 * Specifies that a line of dialog is to be shown.
 */
export type LineEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `line`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The content of the line.
   */
  readonly content: Formatted;
};
