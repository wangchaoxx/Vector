/// <reference types="node" />

type LogLevels = "silly" | "verbose" | "info" | "timing" | "http" | "notice" | "warn" | "error" | "silent";

interface StyleObject {
  fg?: string | undefined;
  bg?: string | undefined;
  bold?: boolean | undefined;
  inverse?: boolean | undefined;
  underline?: boolean | undefined;
  bell?: boolean | undefined;
}

interface MessageObject {
  id: number;
  level: string;
  prefix: string;
  message: string;
  messageRaw: string;
}

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
