import { findElement, findElements } from '../../helpers/element.helper';
import BaseSearchResultsPage from '../parent/search-results.page';

const bookTitleLocator = '.book-title';

export default class SearchResultsPage extends BaseSearchResultsPage {
  async getSearchResultTitles(): Promise<string[]> {
    const titleElements: WebdriverIO.Element[] = await findElements(bookTitleLocator);
    const titlePromises = titleElements.map(async element => element.getText());
    return Promise.all(titlePromises);
  }

  async selectBookWithTitle(title: string): Promise<void> {
    const titleElements: WebdriverIO.Element[] = await findElements(bookTitleLocator);
    const book = titleElements.find(async element => {
      const actualTitle = await element.getText();
      return actualTitle === title;
    });

    if (!book) {
      throw Error('Book not found');
    }

    await book.click();
  }
}
