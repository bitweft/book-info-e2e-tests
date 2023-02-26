import { Then, When } from '@wdio/cucumber-framework';
import { container } from 'tsyringe';
import { bookDetailsData } from '../../src/data/book-details.data';
import { TestContext } from '../../src/helpers/test-context.helper';
import PageFactory from '../../src/pages/factory/page.factory';
import type SearchResultsPage from '../../src/pages/parent/search-results.page';

Then(/^the search results should display "(\w+)" books$/, async (expectedTitle: string) => {
  const searchResultsPage = await PageFactory.getInstance('search-results.page') as SearchResultsPage;
  const actualTitles = await searchResultsPage.getSearchResultTitles();

  expect(actualTitles.length).toBeGreaterThan(0);
  expect(actualTitles.every(title => title.toLowerCase().includes(expectedTitle))).toBe(true);
});

When(/^the user selects "([\w\s]+)" from the search results$/, async (bookName: string) => {
  const bookDetails = bookDetailsData[bookName];

  const testContext = container.resolve(TestContext);
  testContext.addTestData('bookName', bookName);

  const searchResultsPage = await PageFactory.getInstance('search-results.page') as SearchResultsPage;
  await searchResultsPage.selectBookWithTitle(bookDetails.title);
});
