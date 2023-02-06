function getArg(argName: string): string {
  const args = process.argv;
  const arg = args.find(arg => arg.includes(argName));

  if (!arg) {
    throw new Error(`Argument ${argName} not found`);
  }

  return arg;
}

export function getArgValue(argName: string): string {
  const arg = getArg(argName);

  return arg.split('=')[1];
}
