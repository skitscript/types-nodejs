import type { Identifier } from "../Identifier";

/**
 * A character is currently playing an exit animation.
 */
export type ExitingInterpreterStateCharacterState = {
  /**
   * Identifies the type of character state.
   */
  readonly type: `exit`;

  /**
   * The name of the exit animation.
   */
  readonly animation: Identifier;
};
