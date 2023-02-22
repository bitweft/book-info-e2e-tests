import { When } from '@wdio/cucumber-framework';
import HomePage from '../../src/pages/web/home.page';

When(/^the user searches for a book named "(\w+)"$/, async (searchTerm: string) => {
  const homePage = new HomePage();
  await homePage.searchBooks(searchTerm);
});
