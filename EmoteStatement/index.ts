import type { Identifier } from "../Identifier";

/**
 * Specifies that a character is to display an emote.
 */
export type EmoteStatement = {
  /**
   * Identifies the type of statement.
   */
  readonly type: `emote`;

  /**
   * The line from which the statement originates.
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
