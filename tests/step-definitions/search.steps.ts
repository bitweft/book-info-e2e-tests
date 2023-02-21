import { When } from '@wdio/cucumber-framework';
import PageFactory from '../../src/pages/factory/page.factory';
import type HomePage from '../../src/pages/parent/home.page';

When(/^the user searches for a book named "(\w+)"$/, async (searchTerm: string) => {
  const homePage = await PageFactory.getInstance('home.page') as HomePage;
  await homePage.searchBooks(searchTerm);
});
