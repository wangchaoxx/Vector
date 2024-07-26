const log = require('npmlog')

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info'

log.heading = 'vector' // 自定义头部
log.addLevel('success', 2000, { fg: 'green', bold: true }) // 自定义success日志
log.addLevel('notice', 2000, { fg: 'blue', bg: 'black' }) // 自定义notice日志

module.exports = log

/**
 * eg:
 * const log = require('./log')
 * log.success('success message')
 * log.notice('notice message')
 * log.info('info message')
 * log.error('error message')
 * log.warn('warn message')
 * log.http('http message')
 * log.verbose('verbose message')
 */
