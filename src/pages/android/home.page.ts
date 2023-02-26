import { findElement } from '../../helpers/element.helper';
import BaseHomePage from '../parent/home.page';

const searchBoxLocator = 'id:book_name';
const searchButtonLocator = 'id:search_books';

export default class HomePage extends BaseHomePage {
  async searchBooks(searchTerm: string): Promise<void> {
    const searchBox = await findElement(searchBoxLocator);
    await searchBox.setValue(searchTerm);

    const searchButton = await findElement(searchButtonLocator);
    await searchButton.click();
  }
}
