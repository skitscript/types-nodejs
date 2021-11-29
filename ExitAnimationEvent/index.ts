import type { Identifier } from "../Identifier";

/**
 * Specifies that a character is to play an exit animation.
 */
export type ExitAnimationEvent = {
  /**
   * Identifies the type of event.
   */
  readonly type: `exitAnimation`;

  /**
   * The line from which the event originates.
   */
  readonly line: number;

  /**
   * The name of the character which is to animate.
   */
  readonly character: Identifier;

  /**
   * The name of the animation which is to be played.
   */
  readonly animation: Identifier;
};
