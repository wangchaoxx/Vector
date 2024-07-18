'use strict';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var src = cli;
function cli() {
  return "Hello from cli";
}

const index = /*@__PURE__*/getDefaultExportFromCjs(src);

module.exports = index;
