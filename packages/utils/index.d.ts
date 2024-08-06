/// <reference types="node" />


interface log {
  level: string;
  record: MessageObject[];
  maxRecordSize: number;
  prefixStyle: StyleObject;
  headingStyle: StyleObject;
  heading: string;
  stream: any; // Defaults to process.stderr

  success(prefix: string, message: any, ...args: any[]): void;
  info(prefix: string, message: any, ...args: any[]): void;
  warn(prefix: string, message: any, ...args: any[]): void;
  error(prefix: string, message: any, ...args: any[]): void;
}

export const log: log;
