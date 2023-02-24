export default abstract class BookDetailsPage {
  abstract getDescription(): Promise<string>;
}
