import { getArgValue } from "../src/helpers/argument-parser";

export function getAppPath(): string {
  return getArgValue('app_path');
}

export function getPlatform(): string {
  return getArgValue('platform');
}

export function getDeviceName(): string {
  return getArgValue('device_name');
}

export function getTagExpression(): string {
  return getArgValue('tag');
}
