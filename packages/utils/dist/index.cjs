'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = utils;
function utils() {
  return "Hello from utils";
}

const index = /*@__PURE__*/getDefaultExportFromCjs(src);

module.exports = index;
