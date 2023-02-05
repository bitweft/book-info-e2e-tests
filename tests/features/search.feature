Feature: Search Books

  Scenario Outline: A user should be able to search for books
    When the user searches for <searchTerm>
    Then the search results should contain <searchTerm> books

    Examples:
      | searchTerm |
      | testing    |
