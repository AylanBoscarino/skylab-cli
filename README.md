skylab-cli
==========

A typescript framework for building Mobile apps

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/skylab-cli.svg)](https://npmjs.org/package/skylab-cli)
[![Downloads/week](https://img.shields.io/npm/dw/skylab-cli.svg)](https://npmjs.org/package/skylab-cli)
[![License](https://img.shields.io/npm/l/skylab-cli.svg)](https://github.com/AylanBoscarino/skylab-cli/blob/master/package.json)

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
skylab-cli/1.0.0 win32-x64 node-v10.15.0
$ skylab --help [COMMAND]
USAGE
  $ skylab COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`skylab hello [FILE]`](#skylab-hello-file)
* [`skylab help [COMMAND]`](#skylab-help-command)
* [`skylab init PROJECTNAME [OPTIONS]`](#skylab-init-projectname-options)
* [`skylab yell [COMMAND] [TARGET]`](#skylab-yell-command-target)

## `skylab hello [FILE]`

describe the command here

```
USAGE
  $ skylab hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ skylab hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/AylanBoscarino/skylab-cli/blob/v1.0.0/src\commands\hello.ts)_

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

## `skylab init PROJECTNAME [OPTIONS]`

```
USAGE
  $ skylab init PROJECTNAME [OPTIONS]

ARGUMENTS
  PROJECTNAME  Project name
  OPTIONS
```

_See code: [src\commands\init.ts](https://github.com/AylanBoscarino/skylab-cli/blob/v1.0.0/src\commands\init.ts)_

## `skylab yell [COMMAND] [TARGET]`

```
USAGE
  $ skylab yell [COMMAND] [TARGET]
```

_See code: [src\commands\yell.ts](https://github.com/AylanBoscarino/skylab-cli/blob/v1.0.0/src\commands\yell.ts)_
<!-- commandsstop -->
