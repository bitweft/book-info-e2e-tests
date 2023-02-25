import { WaitTime } from '../constants/wait-time';

export async function findElement(locator: string, timeout = WaitTime.Small) {
  await waitForElement(locator, timeout);
  return driver.$(locator);
}

export async function findElements(locator: string, timeout = WaitTime.Small) {
  await waitForElement(locator, timeout);
  return driver.$$(locator);
}

async function waitForElement(locator: string, timeout = WaitTime.Small): Promise<void> {
  const element = await driver.$(locator);
  await element.waitForDisplayed({ timeout });
}
