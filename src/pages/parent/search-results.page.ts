export default abstract class SearchResultsPage {
  abstract getSearchResultTitles(): Promise<string[]>;
}
