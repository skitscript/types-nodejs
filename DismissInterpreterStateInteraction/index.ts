/**
 * The user must dismiss the current state to proceed (e.g. pressing the screen
 * or a button).
 */
export type DismissInterpreterStateInteraction = {
  /**
   * Indicates the type of user interaction.
   */
  readonly type: `dismiss`;

  /**
   * The statement index to which to jump when the current state is dismissed.
   */
  readonly statementIndex: number;
};
