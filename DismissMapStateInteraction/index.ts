/**
 * The user must dismiss this state to proceed (e.g. pressing the screen or a
 * button).
 */
export type DismissMapStateInteraction = {
  /**
   * Indicates the type of user interaction.
   */
  readonly type: `dismiss`;

  /**
   * The state index to which to jump when this current state is dismissed.
   */
  readonly stateIndex: number;
};
