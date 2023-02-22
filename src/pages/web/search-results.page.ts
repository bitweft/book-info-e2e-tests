import { findElements } from '../../helpers/element.helper';

const bookTitleLocator = '.book-title';

export default class SearchResultsPage {
  async getSearchResultTitles(): Promise<string[]> {
    const titleElements: WebdriverIO.Element[] = await findElements(bookTitleLocator);
    const titlePromises = titleElements.map(async element => element.getText());
    return Promise.all(titlePromises);
  }
}
