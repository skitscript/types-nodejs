import type { MapStateCharacterState } from "../MapStateCharacterState";

/**
 * A character within the result of mapping a parsed document.
 */
export type MapStateCharacter = {
  /**
   * The (normalized) name of the character.
   */
  readonly character: string;

  /**
   * The (normalized) name of the emote the character is currently displaying.
   */
  readonly emote: string;

  /**
   * The state of the character.
   */
  readonly state: MapStateCharacterState;
};
