function getArg(argName: string): string | undefined {
  const args = process.argv;
  return args.find(arg => arg.includes(argName));
}

function getArgValue(argName: string): string {
  const arg = getArg(argName);
  if (!arg) {
    throw new Error(`Argument ${argName} not found`);
  }

  return arg.split('=')[1];
}

function getOptionalArgValue(argName: string): string | undefined {
  const arg = getArg(argName);
  if (arg) {
    return arg.split('=')[1];
  }
}

export function getAppPath(): string {
  return getArgValue('app_path');
}

export function getDevices(): string[] {
  return getArgValue('devices').split(',');
}

export function getPlatform(): string {
  return getArgValue('platform');
}

export function getTagExpression(): string {
  return getArgValue('tag');
}

export function getMaxInstances(): number {
  const maxInstances = getOptionalArgValue('max_instances');

  return maxInstances ? Number(maxInstances) : 1;
}
