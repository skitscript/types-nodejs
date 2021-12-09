/**
 * An escape sequence is present for a character which is not known to need
 * escaping.
 */
export type InvalidEscapeSequenceEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `invalidEscapeSequence`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The attempted escape sequence as written in the original document.
   */
  readonly verbatim: string;

  /**
   * The column on which the attempted escape sequence started in the original
   * document.
   */
  readonly fromColumn: number;

  /**
   * The column on which the attempted escape sequence ended in the original
   * document.
   */
  readonly toColumn: number;
};
