import type { ClearEvent } from "../ClearEvent";
import type { DuplicateIdentifierInListEvent } from "../DuplicateIdentifierInListEvent";
import type { DuplicateLabelEvent } from "../DuplicateLabelEvent";
import type { EmoteEvent } from "../EmoteEvent";
import type { EntryAnimationEvent } from "../EntryAnimationEvent";
import type { ExitAnimationEvent } from "../ExitAnimationEvent";
import type { FlagNeverReferencedEvent } from "../FlagNeverReferencedEvent";
import type { FlagNeverSetEvent } from "../FlagNeverSetEvent";
import type { IncompleteEscapeSequenceEvent } from "../IncompleteEscapeSequenceEvent";
import type { InconsistentIdentifierEvent } from "../InconsistentIdentifierEvent";
import type { InvalidEscapeSequenceEvent } from "../InvalidEscapeSequenceEvent";
import type { JumpEvent } from "../JumpEvent";
import type { LabelEvent } from "../LabelEvent";
import type { LineEvent } from "../LineEvent";
import type { LocationEvent } from "../LocationEvent";
import type { MenuOptionEvent } from "../MenuOptionEvent";
import type { SetEvent } from "../SetEvent";
import type { SpeakerEvent } from "../SpeakerEvent";
import type { UndefinedLabelEvent } from "../UndefinedLabelEvent";
import type { UnparsableEvent } from "../UnparsableEvent";
import type { UnreachableEvent } from "../UnreachableEvent";
import type { UnreferencedLabelEvent } from "../UnreferencedLabelEvent";
import type { UnterminatedBoldEvent } from "../UnterminatedBoldEvent";
import type { UnterminatedCodeEvent } from "../UnterminatedCodeEvent";
import type { UnterminatedItalicEvent } from "../UnterminatedItalicEvent";

/**
 * An event within a document.
 */
export type Event =
  | DuplicateLabelEvent
  | EmoteEvent
  | EntryAnimationEvent
  | ExitAnimationEvent
  | InconsistentIdentifierEvent
  | JumpEvent
  | LabelEvent
  | LineEvent
  | LocationEvent
  | MenuOptionEvent
  | SpeakerEvent
  | UndefinedLabelEvent
  | UnparsableEvent
  | DuplicateIdentifierInListEvent
  | ClearEvent
  | SetEvent
  | UnterminatedBoldEvent
  | UnterminatedCodeEvent
  | UnterminatedItalicEvent
  | IncompleteEscapeSequenceEvent
  | InvalidEscapeSequenceEvent
  | UnreachableEvent
  | UnreferencedLabelEvent
  | FlagNeverReferencedEvent
  | FlagNeverSetEvent;
