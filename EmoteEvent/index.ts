import type { Identifier } from "../Identifier";

/**
 * Specifies that a character is to display an emote.
 */
export type EmoteEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `emote`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the character which is to display an emote.
   */
  readonly character: Identifier;

  /**
   * The name of the emote which is to be displayed.
   */
  readonly emote: Identifier;
};
