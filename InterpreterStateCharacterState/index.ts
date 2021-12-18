import type { EnteringInterpreterStateCharacterState } from "../EnteringInterpreterStateCharacterState";
import type { ExitingInterpreterStateCharacterState } from "../ExitingInterpreterStateCharacterState";
import type { NonPresentInterpreterStateCharacterState } from "../NonPresentInterpreterStateCharacterState";
import type { PresentInterpreterStateCharacterState } from "../PresentInterpreterStateCharacterState";

/**
 * The state of a character.
 */
export type InterpreterStateCharacterState =
  | NonPresentInterpreterStateCharacterState
  | EnteringInterpreterStateCharacterState
  | PresentInterpreterStateCharacterState
  | ExitingInterpreterStateCharacterState;
