'use strict';

const log = require('npmlog');

function _interopDefaultCompat (e) { return e && typeof e === 'object' && 'default' in e ? e.default : e; }

const log__default = /*#__PURE__*/_interopDefaultCompat(log);

log__default.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";
log__default.heading = "vector";
log__default.addLevel("success", 2e3, { fg: "green", bold: true });
log__default.addLevel("notice", 2e3, { fg: "blue", bg: "black" });

exports.log = log__default;
