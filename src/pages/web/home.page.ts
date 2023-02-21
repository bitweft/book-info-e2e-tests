import { findElement } from '../../helpers/element.helper';
import BaseHomePage from '../parent/home.page';

const searchBoxLocator = '.search-box';

export default class HomePage extends BaseHomePage {
  async searchBooks(searchTerm: string): Promise<void> {
    const searchBox = await findElement(searchBoxLocator);
    await searchBox.setValue(searchTerm);
    await driver.keys('Enter');
  }
}
