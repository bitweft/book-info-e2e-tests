Feature: Search Books

  Scenario: A user should be able to search for books
    When the user searches for "testing"
    Then the search results should contain "testing" books

