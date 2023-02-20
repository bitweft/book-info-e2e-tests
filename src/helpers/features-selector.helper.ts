/* eslint-disable @typescript-eslint/no-require-imports */
import read = require('fs-readdir-recursive');
import path = require('path');

export function getFeaturesToRun(): string[] {
  const featuresDir = './tests/features';
  const featureFileNames: string[] = read(featuresDir);
  return featureFileNames.map(featureName => path.resolve(featuresDir, featureName));
}
