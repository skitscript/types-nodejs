import type { InterpreterStateRun } from "../InterpreterStateRun";

/**
 * An option the user can select from a menu.
 */
export type MenuInterpreterStateInteractionOption = {
  /**
   * The content of the menu option as shown to the user.
   */
  readonly content: ReadonlyArray<InterpreterStateRun>;

  /**
   * The statement index to which to jump when the menu option is selected.
   */
  readonly statementIndex: number;
};
