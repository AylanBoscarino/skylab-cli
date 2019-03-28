skylab-cli
==========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/skylab-cli.svg)](https://npmjs.org/package/skylab-cli)
[![Downloads/week](https://img.shields.io/npm/dw/skylab-cli.svg)](https://npmjs.org/package/skylab-cli)
[![License](https://img.shields.io/npm/l/skylab-cli.svg)](https://github.com/AylanBoscarino/skylab-cli/blob/master/package.json)

Skylab unites React Native, Redux Thunk and React Native navigation in a single starter pack without the need for you to make the manual configurations on native 
code needed and the whole set of boilerplate.

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g skylab-cli
$ skylab COMMAND
running command...
$ skylab (-v|--version|version)
skylab-cli/2.0.1 win32-x64 node-v10.15.0
$ skylab --help [COMMAND]
USAGE
  $ skylab COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`skylab help [COMMAND]`](#skylab-help-command)
* [`skylab init PROJECTNAME`](#skylab-init-projectname)
* [`skylab textchange NEWNAME`](#skylab-textchange-newname)

## `skylab help [COMMAND]`

display help for skylab

```
USAGE
  $ skylab help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src\commands\help.ts)_

## `skylab init PROJECTNAME`

```
USAGE
  $ skylab init PROJECTNAME

ARGUMENTS
  PROJECTNAME  Desired project name
```

_See code: [src\commands\init.ts](https://github.com/AylanBoscarino/skylab-cli/blob/v2.0.1/src\commands\init.ts)_

## `skylab textchange NEWNAME`

```
USAGE
  $ skylab textchange NEWNAME

ARGUMENTS
  NEWNAME  The project's new name
```

_See code: [src\commands\textchange.ts](https://github.com/AylanBoscarino/skylab-cli/blob/v2.0.1/src\commands\textchange.ts)_
<!-- commandsstop -->
