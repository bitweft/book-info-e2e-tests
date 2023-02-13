function getArg(argName: string): string {
  const args = process.argv;
  const arg = args.find(arg => arg.includes(argName));

  if (!arg) {
    throw new Error(`Argument ${argName} not found`);
  }

  return arg;
}

function getArgValue(argName: string): string {
  const arg = getArg(argName);

  return arg.split('=')[1];
}

export function getAppPath(): string {
  return getArgValue('app_path');
}

export function getDeviceName(): string {
  return getArgValue('device_name');
}

export function getPlatform(): string {
  return getArgValue('platform');
}

export function getTagExpression(): string {
  return getArgValue('tag');
}
