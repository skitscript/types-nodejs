import type { InterpreterStateInteraction } from "../InterpreterStateInteraction";
import type { InterpreterStateCharacter } from "../InterpreterStateCharacter";
import type { InterpreterStateRun } from "../InterpreterStateRun";

/**
 * The result of interpreting a parsed document.
 */
export type InterpreterState = {
  /**
   * The (normalized) names of the flags which are currently set.  This may be
   * empty.
   */
  readonly flagsSet: ReadonlyArray<string>;

  /**
   * The states of the characters.
   */
  readonly characters: ReadonlyArray<InterpreterStateCharacter>;

  /**
   * The (verbatim) names of the characters which speak the current line/present
   * the current menu.  This may include characters which are never or not
   * currently visible.
   */
  readonly speakers: ReadonlyArray<string>;

  /**
   * The (normalized) name of the background which is currently displayed.  This
   * may be null, in which case, a white background should be displayed instead.
   */
  readonly background: null | string;

  /**
   * The runs of text of the current line.  This may be null.
   */
  readonly line: null | ReadonlyArray<InterpreterStateRun>;

  /**
   * Describes how the user can interact with the current state.
   */
  readonly interaction: InterpreterStateInteraction;
};
