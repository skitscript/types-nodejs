import type { Identifier } from "../Identifier";

/**
 * A character is currently playing an entry animation.
 */
export type EnteringInterpreterStateCharacterState = {
  /**
   * Identifies the type of character state.
   */
  readonly type: `entering`;

  /**
   * The name of the entry animation.
   */
  readonly animation: Identifier;
};
