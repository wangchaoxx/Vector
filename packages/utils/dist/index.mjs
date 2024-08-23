import log from 'npmlog';
export { default as log } from 'npmlog';

log.level = process.env.LOG_LEVEL ? process.env.LOG_LEVEL : "info";
log.heading = "vector";
log.addLevel("success", 2e3, { fg: "green", bold: true });
log.addLevel("notice", 2e3, { fg: "blue", bg: "black" });
