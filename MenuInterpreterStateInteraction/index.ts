import type { MenuOptionInstruction } from "../MenuOptionInstruction";

/**
 * The user must select an option from a menu.
 */
export type MenuInterpreterStateInteraction = {
  /**
   * Indicates the type of user interaction.
   */
  readonly type: `menu`;

  /**
   * The options which are listed in the menu.
   */
  readonly options: ReadonlyArray<MenuOptionInstruction>;
};
