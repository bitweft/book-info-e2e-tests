import { Then } from '@wdio/cucumber-framework';
import SearchResultsPage from '../../src/pages/web/search-results.page';

Then(/^the search results should display "(\w+)" books$/, async (expectedTitle: string) => {
  const searchResultsPage = new SearchResultsPage();
  const actualTitles = await searchResultsPage.getSearchResultTitles();

  expect(actualTitles.length).toBeGreaterThan(0);
  expect(actualTitles.every(title => title.toLowerCase().includes(expectedTitle))).toBe(true);
});
