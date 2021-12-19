import type { MapStateRun } from "../MapStateRun";

/**
 * An option the user can select from a menu.
 */
export type MenuMapStateInteractionOption = {
  /**
   * The content of the menu option as shown to the user.
   */
  readonly content: ReadonlyArray<MapStateRun>;

  /**
   * The state index to which to jump when the menu option is selected.
   */
  readonly stateIndex: number;
};
