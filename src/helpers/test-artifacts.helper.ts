import * as fs from 'fs';

export const artifactsDirName = 'artifacts';

export function getSanitizedFileName(name: string): string {
  return name.replace(/\s+/g, '-');
}

export function createArtifactsDirectory(): void {

  if (!fs.existsSync(artifactsDirName)) {
    fs.mkdirSync(artifactsDirName, { recursive: true });
  }
}
