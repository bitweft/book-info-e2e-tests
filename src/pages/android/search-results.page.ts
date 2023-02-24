import { WaitTime } from '../../constants/wait-time';
import { findElements } from '../../helpers/element.helper';
import BaseSearchResultsPage from '../parent/search-results.page';

const bookTitleLocator = 'id:title';

export default class SearchResultsPage extends BaseSearchResultsPage {
  async getSearchResultTitles(): Promise<string[]> {
    const titleElements: WebdriverIO.Element[] = await findElements(bookTitleLocator, WaitTime.Medium);
    const titlePromises = titleElements.map(async element => element.getText());
    return Promise.all(titlePromises);
  }

  async selectBookWithTitle(title: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
