import { findElement } from '../../helpers/element.helper';

const searchBoxLocator = '.search-box';

export default class HomePage {
  async searchBooks(searchTerm: string): Promise<void> {
    const searchBox = await findElement(searchBoxLocator);
    await searchBox.setValue(searchTerm);
    await driver.keys('Enter');
  }
}
