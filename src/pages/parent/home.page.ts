export default abstract class HomePage {
  abstract searchBooks(searchTerm: string): Promise<void>;
}
