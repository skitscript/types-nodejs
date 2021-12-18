# Skitscript Types (NodeJS) [![License](https://img.shields.io/github/license/skitscript/types-nodejs.svg)](https://github.com/skitscript/types-nodejs/blob/master/license) [![Renovate enabled](https://img.shields.io/badge/renovate-enabled-brightgreen.svg)](https://renovatebot.com/) [![npm](https://img.shields.io/npm/v/skitscript/types-nodejs.svg)](https://www.npmjs.com/package/skitscript/types-nodejs) [![npm type definitions](https://img.shields.io/npm/types/skitscript/types-nodejs.svg)](https://www.npmjs.com/package/skitscript/types-nodejs)

A set of Typescript types representing the entities in a Skitscript document.

## Installation

### Dependencies

This is a NPM package.  It targets NodeJS 16.11.1 or newer on the following
operating systems:

- Ubuntu 20.04
- Ubuntu 18.04
- macOS 11 (Big Sur)
- macOS 10.15 (Catalina)
- Windows Server 2022
- Windows Server 2019
- Windows Server 2016

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

- [ClearInstruction](./ClearInstruction/index.ts)
- [Condition](./Condition/index.ts)
- [DismissInterpreterStateInteraction](./DismissInterpreterStateInteraction/index.ts)
- [Document](./Document/index.ts)
- [DuplicateIdentifierInListWarning](./DuplicateIdentifierInListWarning/index.ts)
- [DuplicateLabelError](./DuplicateLabelError/index.ts)
- [EmoteInstruction](./EmoteInstruction/index.ts)
- [EmptyLabelWarning](./EmptyLabelWarning/index.ts)
- [EnteringInterpreterStateCharacterState](./EnteringInterpreterStateCharacterState/index.ts)
- [EntryAnimationInstruction](./EntryAnimationInstruction/index.ts)
- [Error](./Error/index.ts)
- [EveryFlagClearCondition](./EveryFlagClearCondition/index.ts)
- [EveryFlagSetCondition](./EveryFlagSetCondition/index.ts)
- [ExitAnimationInstruction](./ExitAnimationInstruction/index.ts)
- [ExitingInterpreterStateCharacterState](./ExitingInterpreterStateCharacterState/index.ts)
- [FlagClearCondition](./FlagClearCondition/index.ts)
- [FlagNeverReferencedWarning](./FlagNeverReferencedWarning/index.ts)
- [FlagNeverSetWarning](./FlagNeverSetWarning/index.ts)
- [FlagSetCondition](./FlagSetCondition/index.ts)
- [Formatted](./Formatted/index.ts)
- [Identifier](./Identifier/index.ts)
- [IdentifierContext](./IdentifierContext/index.ts)
- [IdentifierInstance](./IdentifierInstance/index.ts)
- [IdentifierReference](./IdentifierReference/index.ts)
- [IdentifierType](./IdentifierType/index.ts)
- [IncompleteEscapeSequenceError](./IncompleteEscapeSequenceError/index.ts)
- [InconsistentIdentifierWarning](./InconsistentIdentifierWarning/index.ts)
- [InterpreterState](./InterpreterState/index.ts)
- [InterpreterStateCharacter](./InterpreterStateCharacter/index.ts)
- [InterpreterStateCharacterState](./InterpreterStateCharacterState/index.ts)
- [InterpreterStateInteraction](./InterpreterStateInteraction/index.ts)
- [InterpreterStateRun](./InterpreterStateRun/index.ts)
- [InvalidDocument](./InvalidDocument/index.ts)
- [InvalidEscapeSequenceError](./InvalidEscapeSequenceError/index.ts)
- [JumpInstruction](./JumpInstruction/index.ts)
- [LineInstruction](./LineInstruction/index.ts)
- [MenuInterpreterStateInteraction](./MenuInterpreterStateInteraction/index.ts)
- [MenuInterpreterStateInteractionOption](./MenuInterpreterStateInteractionOption/index.ts)
- [LocationInstruction](./LocationInstruction/index.ts)
- [MenuOptionInstruction](./MenuOptionInstruction/index.ts)
- [NonPresentInterpreterStateCharacterState](./NonPresentInterpreterStateCharacterState/index.ts)
- [PresentInterpreterStateCharacterState](./PresentInterpreterStateCharacterState/index.ts)
- [Run](./Run/index.ts)
- [SetInstruction](./SetInstruction/index.ts)
- [SomeFlagsClearCondition](./SomeFlagsClearCondition/index.ts)
- [SomeFlagsSetCondition](./SomeFlagsSetCondition/index.ts)
- [SpeakerInstruction](./SpeakerInstruction/index.ts)
- [Instruction](./Instruction/index.ts)
- [UndefinedLabelError](./UndefinedLabelError/index.ts)
- [UnparsableError](./UnparsableError/index.ts)
- [UnreachableWarning](./UnreachableWarning/index.ts)
- [UnreferencedLabelWarning](./UnreferencedLabelWarning/index.ts)
- [UnterminatedBoldError](./UnterminatedBoldError/index.ts)
- [UnterminatedCodeError](./UnterminatedCodeError/index.ts)
- [UnterminatedItalicError](./UnterminatedItalicError/index.ts)
- [ValidDocument](./ValidDocument/index.ts)
- [Warning](./Warning/index.ts)
