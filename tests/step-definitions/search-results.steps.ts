import { Then } from '@wdio/cucumber-framework';
import PageFactory from '../../src/pages/factory/page.factory';
import type SearchResultsPage from '../../src/pages/parent/search-results.page';

Then(/^the search results should display "(\w+)" books$/, async (expectedTitle: string) => {
  const searchResultsPage = await PageFactory.getInstance('search-results.page') as SearchResultsPage;
  const actualTitles = await searchResultsPage.getSearchResultTitles();

  expect(actualTitles.length).toBeGreaterThan(0);
  expect(actualTitles.every(title => title.toLowerCase().includes(expectedTitle))).toBe(true);
});
