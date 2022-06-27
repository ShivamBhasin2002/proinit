oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g proinit
$ proinit COMMAND
running command...
$ proinit (--version)
proinit/0.0.0 linux-x64 node-v14.16.0
$ proinit --help [COMMAND]
USAGE
  $ proinit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`proinit hello PERSON`](#proinit-hello-person)
* [`proinit hello world`](#proinit-hello-world)
* [`proinit help [COMMAND]`](#proinit-help-command)
* [`proinit plugins`](#proinit-plugins)
* [`proinit plugins:install PLUGIN...`](#proinit-pluginsinstall-plugin)
* [`proinit plugins:inspect PLUGIN...`](#proinit-pluginsinspect-plugin)
* [`proinit plugins:install PLUGIN...`](#proinit-pluginsinstall-plugin-1)
* [`proinit plugins:link PLUGIN`](#proinit-pluginslink-plugin)
* [`proinit plugins:uninstall PLUGIN...`](#proinit-pluginsuninstall-plugin)
* [`proinit plugins:uninstall PLUGIN...`](#proinit-pluginsuninstall-plugin-1)
* [`proinit plugins:uninstall PLUGIN...`](#proinit-pluginsuninstall-plugin-2)
* [`proinit plugins update`](#proinit-plugins-update)

## `proinit hello PERSON`

Say hello

```
USAGE
  $ proinit hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/ShivamBhasin2002/hello-world/blob/v0.0.0/dist/commands/hello/index.ts)_

## `proinit hello world`

Say hello world

```
USAGE
  $ proinit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `proinit help [COMMAND]`

Display help for proinit.

```
USAGE
  $ proinit help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for proinit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `proinit plugins`

List installed plugins.

```
USAGE
  $ proinit plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ proinit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.0/src/commands/plugins/index.ts)_

## `proinit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ proinit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ proinit plugins add

EXAMPLES
  $ proinit plugins:install myplugin 

  $ proinit plugins:install https://github.com/someuser/someplugin

  $ proinit plugins:install someuser/someplugin
```

## `proinit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ proinit plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ proinit plugins:inspect myplugin
```

## `proinit plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ proinit plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ proinit plugins add

EXAMPLES
  $ proinit plugins:install myplugin 

  $ proinit plugins:install https://github.com/someuser/someplugin

  $ proinit plugins:install someuser/someplugin
```

## `proinit plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ proinit plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ proinit plugins:link myplugin
```

## `proinit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ proinit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ proinit plugins unlink
  $ proinit plugins remove
```

## `proinit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ proinit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ proinit plugins unlink
  $ proinit plugins remove
```

## `proinit plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ proinit plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ proinit plugins unlink
  $ proinit plugins remove
```

## `proinit plugins update`

Update installed plugins.

```
USAGE
  $ proinit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
