function getArg(argName: string): string {
  const args = process.argv;

  return args.find((arg) => arg.includes(argName));
}

export function getArgValue(argName: string): string {
  const arg = getArg(argName);

  return arg.split('=')[1];
}
