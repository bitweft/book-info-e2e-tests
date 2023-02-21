import { findElements } from '../../helpers/element.helper';
import BaseSearchResultsPage from '../parent/search-results.page';

const bookTitleLocator = '.book-title';

export default class SearchResultsPage extends BaseSearchResultsPage {
  async getSearchResultTitles(): Promise<string[]> {
    const titleElements: WebdriverIO.Element[] = await findElements(bookTitleLocator);
    const titlePromises = titleElements.map(async element => element.getText());
    return Promise.all(titlePromises);
  }
}
