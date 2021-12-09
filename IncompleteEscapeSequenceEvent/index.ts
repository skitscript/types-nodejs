/**
 * An escape sequence is started with a backslash, but is not followed by the
 * character to be escaped.
 */
export type IncompleteEscapeSequenceEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `incompleteEscapeSequence`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The column from which the event originates.
   */
  readonly column: number;
};
