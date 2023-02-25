/* eslint-disable @typescript-eslint/no-require-imports */
import read = require('fs-readdir-recursive');
import path = require('path');
import { getFeatures } from './argument-parser.helper';

export function getFeaturesToRun(): string[] {
  const featuresDir = './tests/features';
  let featureFileNames = getFeatures();
  if (!featureFileNames) {
    featureFileNames = read(featuresDir);
  }

  return featureFileNames.map(featureName => path.resolve(featuresDir, featureName));
}
