/**
 * Details regarding a character found while mapping a document.
 */
export type MapCharacter = {
  /**
   * The (normalized) name of the character.
   */
  readonly normalized: string;

  /**
   * The (verbatim) name of the character.
   */
  readonly verbatim: string;
};
