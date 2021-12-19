/**
 * A character is currently playing an entry animation.
 */
export type EnteringInterpreterStateCharacterState = {
  /**
   * Identifies the type of character state.
   */
  readonly type: `entering`;

  /**
   * The (normalized) name of the entry animation.
   */
  readonly animation: string;
};
