/**
 * Italic text is started but never ended within a formatted section of the
 * document.
 */
export type UnterminatedItalicEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unterminatedItalic`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The unterminated italic text as written in the original document.
   */
  readonly verbatim: string;

  /**
   * The column on which the unterminated italic text started in the original
   * document.
   */
  readonly fromColumn: number;

  /**
   * The column on which the unterminated italic text ended in the original
   * document.
   */
  readonly toColumn: number;
};
