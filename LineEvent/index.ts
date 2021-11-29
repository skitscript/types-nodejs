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
   * The content of the line.
   */
  readonly content: Formatted;
};
