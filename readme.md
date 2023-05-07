# Skitscript Types (NodeJS) [![License](https://img.shields.io/github/license/skitscript/types-nodejs.svg)](https://github.com/skitscript/types-nodejs/blob/master/license) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![npm](https://img.shields.io/npm/v/@skitscript/types-nodejs.svg)](https://www.npmjs.com/package/@skitscript/types-nodejs) [![npm type definitions](https://img.shields.io/npm/types/@skitscript/types-nodejs.svg)](https://www.npmjs.com/package/@skitscript/types-nodejs)

A set of Typescript types representing the entities in a Skitscript document.

## Installation

### Dependencies

This is a NPM package.  It targets NodeJS 16.11.1 or newer on the following
operating systems:

- Ubuntu 22.04
- Ubuntu 20.04
- macOS 13 (Ventura)
- macOS 12 (Monterey)
- macOS 11 (Big Sur)
- Windows Server 2022
- Windows Server 2019

It is likely also possible to use this package as part of a web browser
application through tools such as [webpack](https://webpack.js.org/).  This has
not been tested, however.

### Install as a development dependency

TypeScript types should only be installed as development dependencies for most
applications:

```bash
npm install --save-dev @skitscript/types-nodejs
```

### Install as a peer dependency

If you are developing a package with includes any of these types in its public
API, additionally install it as a peer dependency so that consumers of your
package know to include it as well:

```bash
npm install --save-peer @skitscript/types-nodejs
```

## Usage

Import and use the exported types:

```typescript
import { Document } from "@skitscript/types-nodejs";
```

### Parsing

#### Documents

- [Document](./Document/index.ts)
- [InvalidDocument](./InvalidDocument/index.ts)
- [ValidDocument](./ValidDocument/index.ts)

#### Instructions

- [ClearInstruction](./ClearInstruction/index.ts)
- [EmoteInstruction](./EmoteInstruction/index.ts)
- [EntryAnimationInstruction](./EntryAnimationInstruction/index.ts)
- [ExitAnimationInstruction](./ExitAnimationInstruction/index.ts)
- [Instruction](./Instruction/index.ts)
- [JumpInstruction](./JumpInstruction/index.ts)
- [LineInstruction](./LineInstruction/index.ts)
- [LocationInstruction](./LocationInstruction/index.ts)
- [MenuOptionInstruction](./MenuOptionInstruction/index.ts)
- [SetInstruction](./SetInstruction/index.ts)
- [SpeakerInstruction](./SpeakerInstruction/index.ts)

##### Formatting

- [Formatted](./Formatted/index.ts)
- [Run](./Run/index.ts)

##### Conditions

- [Condition](./Condition/index.ts)
- [EveryFlagClearCondition](./EveryFlagClearCondition/index.ts)
- [EveryFlagSetCondition](./EveryFlagSetCondition/index.ts)
- [FlagClearCondition](./FlagClearCondition/index.ts)
- [FlagSetCondition](./FlagSetCondition/index.ts)
- [SomeFlagsClearCondition](./SomeFlagsClearCondition/index.ts)
- [SomeFlagsSetCondition](./SomeFlagsSetCondition/index.ts)

#### Identifiers

- [Identifier](./Identifier/index.ts)
- [IdentifierContext](./IdentifierContext/index.ts)
- [IdentifierInstance](./IdentifierInstance/index.ts)
- [IdentifierReference](./IdentifierReference/index.ts)
- [IdentifierType](./IdentifierType/index.ts)

#### Warnings

- [DuplicateIdentifierInListWarning](./DuplicateIdentifierInListWarning/index.ts)
- [EmptyLabelWarning](./EmptyLabelWarning/index.ts)
- [FlagNeverReferencedWarning](./FlagNeverReferencedWarning/index.ts)
- [FlagNeverSetWarning](./FlagNeverSetWarning/index.ts)
- [InconsistentIdentifierWarning](./InconsistentIdentifierWarning/index.ts)
- [UnreachableWarning](./UnreachableWarning/index.ts)
- [UnreferencedLabelWarning](./UnreferencedLabelWarning/index.ts)
- [Warning](./Warning/index.ts)

#### Errors

- [DuplicateLabelError](./DuplicateLabelError/index.ts)
- [Error](./Error/index.ts)
- [IncompleteEscapeSequenceError](./IncompleteEscapeSequenceError/index.ts)
- [InvalidEscapeSequenceError](./InvalidEscapeSequenceError/index.ts)
- [UndefinedLabelError](./UndefinedLabelError/index.ts)
- [UnparsableError](./UnparsableError/index.ts)
- [UnterminatedBoldError](./UnterminatedBoldError/index.ts)
- [UnterminatedCodeError](./UnterminatedCodeError/index.ts)
- [UnterminatedItalicError](./UnterminatedItalicError/index.ts)

### Interpreting

#### States

- [InterpreterState](./InterpreterState/index.ts)
- [InterpreterStateRun](./InterpreterStateRun/index.ts)
- [InvalidInterpreterState](./InvalidInterpreterState/index.ts)
- [ValidInterpreterState](./ValidInterpreterState/index.ts)

##### Characters

- [EnteringInterpreterStateCharacterState](./EnteringInterpreterStateCharacterState/index.ts)
- [ExitingInterpreterStateCharacterState](./ExitingInterpreterStateCharacterState/index.ts)
- [InterpreterStateCharacter](./InterpreterStateCharacter/index.ts)
- [InterpreterStateCharacterState](./InterpreterStateCharacterState/index.ts)
- [NotPresentInterpreterStateCharacterState](./NotPresentInterpreterStateCharacterState/index.ts)
- [PresentInterpreterStateCharacterState](./PresentInterpreterStateCharacterState/index.ts)

##### Interactions

- [DismissInterpreterStateInteraction](./DismissInterpreterStateInteraction/index.ts)
- [InterpreterStateInteraction](./InterpreterStateInteraction/index.ts)
- [MenuInterpreterStateInteraction](./MenuInterpreterStateInteraction/index.ts)
- [MenuInterpreterStateInteractionOption](./MenuInterpreterStateInteractionOption/index.ts)

#### Errors

- [InfiniteLoopInterpreterStateError](./InfiniteLoopInterpreterStateError/index.ts)
- [InterpreterStateError](./InterpreterStateError/index.ts)

### Mapping

#### Maps

- [InvalidMap](./InvalidMap/index.ts)
- [Map](./Map/index.ts)
- [MapCharacter](./MapCharacter/index.ts)
- [MapStateRun](./MapStateRun/index.ts)
- [ValidMap](./ValidMap/index.ts)

#### States

- [MapState](./MapState/index.ts)

##### Characters

- [EnteringMapStateCharacter](./EnteringMapStateCharacter/index.ts)
- [ExitingMapStateCharacter](./ExitingMapStateCharacter/index.ts)
- [MapStateCharacter](./MapStateCharacter/index.ts)
- [NotPresentMapStateCharacter](./NotPresentMapStateCharacter/index.ts)
- [PresentMapStateCharacter](./PresentMapStateCharacter/index.ts)

##### Interactions

- [DismissMapStateInteraction](./DismissMapStateInteraction/index.ts)
- [MapStateInteraction](./MapStateInteraction/index.ts)
- [MenuMapStateInteraction](./MenuMapStateInteraction/index.ts)
- [MenuMapStateInteractionOption](./MenuMapStateInteractionOption/index.ts)

#### Errors

- [InfiniteLoopMapError](./InfiniteLoopMapError/index.ts)
- [MapError](./MapError/index.ts)

#### Tooling

- [FileSystem](./FileSystem/index.ts)
- [Path](./Path/index.ts)

#### Web Templating

- [WebBackground](./WebBackground/index.ts)
- [WebCharacter](./WebCharacter/index.ts)
- [WebElementAttributes](./WebElementAttributes/index.ts)
- [WebEmote](./WebEmote/index.ts)
- [WebImage](./WebImage/index.ts)
- [WebOption](./WebOption/index.ts)
- [WebSpeaker](./WebSpeaker/index.ts)
- [WebState](./WebState/index.ts)
