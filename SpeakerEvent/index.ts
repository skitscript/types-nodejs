import type { Identifier } from "../Identifier";

/**
 * Specifies a change of speaker.
 */
export type SpeakerEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `speaker`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The names of the speaking characters.
   */
  readonly characters: ReadonlyArray<Identifier>;
};
