import { Then } from '@wdio/cucumber-framework';
import { container } from 'tsyringe';
import { bookDetailsData } from '../../src/data/book-details.data';
import { TestContext } from '../../src/helpers/test-context.helper';
import PageFactory from '../../src/pages/factory/page.factory';
import type BookDetailsPage from '../../src/pages/parent/book-details.page';

Then(/^the book details should be displayed$/, async () => {
  const testContext = container.resolve(TestContext);
  const bookName = testContext.getTestData('bookName') as string;
  const expectedBookDetails = bookDetailsData[bookName];

  const bookDetailsPage = await PageFactory.getInstance('book-details.page') as BookDetailsPage;
  const actualBookDescription = await bookDetailsPage.getDescription();

  expect(actualBookDescription).toContain(expectedBookDetails.description);
});
