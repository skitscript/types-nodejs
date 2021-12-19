import type { EnteringMapStateCharacterState } from "../EnteringMapStateCharacterState";
import type { ExitingMapStateCharacterState } from "../ExitingMapStateCharacterState";
import type { NonPresentMapStateCharacterState } from "../NonPresentMapStateCharacterState";
import type { PresentMapStateCharacterState } from "../PresentMapStateCharacterState";

/**
 * The state of a character in a mapped document.
 */
export type MapStateCharacterState =
  | NonPresentMapStateCharacterState
  | EnteringMapStateCharacterState
  | PresentMapStateCharacterState
  | ExitingMapStateCharacterState;
