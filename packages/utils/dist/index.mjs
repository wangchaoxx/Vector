import require$$0 from 'npmlog';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

const log = require$$0;
log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";
log.heading = "vector";
log.addLevel("success", 2e3, { fg: "green", bold: true });
log.addLevel("notice", 2e3, { fg: "blue", bg: "black" });
var log_1 = log;

const log$1 = /*@__PURE__*/getDefaultExportFromCjs(log_1);

export { log$1 as log };
