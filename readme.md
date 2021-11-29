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

- [Condition](./Condition/index.ts)
- [Document](./Document/index.ts)
- [DuplicateLabelEvent](./DuplicateLabelEvent/index.ts)
- [EmoteEvent](./EmoteEvent/index.ts)
- [EntryAnimationEvent](./EntryAnimationEvent/index.ts)
- [Event](./Event/index.ts)
- [EveryFlagClearCondition](./EveryFlagClearCondition/index.ts)
- [EveryFlagSetCondition](./EveryFlagSetCondition/index.ts)
- [ExitAnimationEvent](./ExitAnimationEvent/index.ts)
- [FlagClearCondition](./FlagClearCondition/index.ts)
- [FlagSetCondition](./FlagSetCondition/index.ts)
- [Formatted](./Formatted/index.ts)
- [Identifier](./Identifier/index.ts)
- [InconsistentIdentifierEvent](./InconsistentIdentifierEvent/index.ts)
- [JumpEvent](./JumpEvent/index.ts)
- [LabelEvent](./LabelEvent/index.ts)
- [LineEvent](./LineEvent/index.ts)
- [LocationEvent](./LocationEvent/index.ts)
- [MenuOptionEvent](./MenuOptionEvent/index.ts)
- [Run](./Run/index.ts)
- [SomeFlagsClearCondition](./SomeFlagsClearCondition/index.ts)
- [SomeFlagsSetCondition](./SomeFlagsSetCondition/index.ts)
- [SpeakerEvent](./SpeakerEvent/index.ts)
- [UndefinedLabelEvent](./UndefinedLabelEvent/index.ts)
- [UnparsableLineEvent](./UnparsableLineEvent/index.ts)
