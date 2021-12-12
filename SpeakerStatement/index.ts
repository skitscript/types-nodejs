import type { Identifier } from "../Identifier";

/**
 * Specifies a change of speaker.
 */
export type SpeakerStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `speaker`;

  /**
   * The line from which the statement originates.
   */
  readonly line: number;

  /**
   * The names of the speaking characters.
   */
  readonly characters: ReadonlyArray<Identifier>;
};
