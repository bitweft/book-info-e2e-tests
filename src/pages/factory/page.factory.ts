import path = require('path');
import { getPlatform } from '../../../config/test-config-parser';


export default class PageFactory {
  static async getInstance(pageName: string): Promise<object> {
    const absolutePath = PageFactory.getPagePath(pageName);

    return PageFactory.getPageObject(absolutePath);
  }

  private static async getPageObject(absolutePath: string): Promise<object> {
    const page = await import(absolutePath);

    return new page['default']();
  }

  private static getPagePath(pageName: string): string {
    const appDir = PageFactory.getAppDirPath();
    const pagePath = `./src/pages/${appDir}/${pageName}`;
    const absolutePath = path.join(process.cwd(), pagePath);

    return absolutePath;
  }

  private static getAppDirPath(): string {
    const appType = getPlatform();

    return appType === 'web' ? appType : `mobile/${appType}`;
  }
}
