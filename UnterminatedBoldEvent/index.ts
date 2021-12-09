/**
 * Bold text is started but never ended within a formatted section of the
 * document.
 */
export type UnterminatedBoldEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `unterminatedBold`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The unterminated bold text as written in the original document.
   */
  readonly verbatim: string;

  /**
   * The column on which the unterminated bold text started in the original
   * document.
   */
  readonly fromColumn: number;

  /**
   * The column on which the unterminated bold text ended in the original
   * document.
   */
  readonly toColumn: number;
};
