const chalk = require('chalk')
const noop = x => x

global.FX_STYLE_NULL    = chalk.grey
global.FX_STYLE_NUMBER  = chalk.white.bold
global.FX_STYLE_BOOLEAN = chalk.red
global.FX_STYLE_STRING  = chalk.yellow.bold
global.FX_STYLE_KEY     = noop
global.FX_STYLE_BRACKET = chalk.red
global.FX_STYLE_COMMA   = chalk.grey
global.FX_STYLE_COLON   = chalk.grey
global.FX_STYLE_LIST    = {
  fg: 'white',
  bg: 'red',
  selected: {
    fg: 'black',
    bg: 'yellow',
  }
}