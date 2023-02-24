import { findElement } from '../../helpers/element.helper';
import BaseBookDetailsPage from '../parent/book-details.page';

const bookDescriptionLocator = '.book-description';

export default class HomePage extends BaseBookDetailsPage {
  async getDescription(): Promise<string> {
    const bookDescription = await findElement(bookDescriptionLocator);
    return bookDescription.getText();
  }
}
