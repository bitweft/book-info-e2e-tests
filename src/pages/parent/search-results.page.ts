export default abstract class SearchResultsPage {
  abstract getSearchResultTitles(): Promise<string[]>;
  abstract selectBookWithTitle(title: string): Promise<void>;
}
