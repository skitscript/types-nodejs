/**
 * Describes a speaker of a line to a web template.
 */
export interface WebSpeaker {
  /**
   * The (normalized) name of the character.
   */
  readonly normalized: string

  /**
   * The (verbatim) name of the character.
   */
  readonly verbatim: string
}
