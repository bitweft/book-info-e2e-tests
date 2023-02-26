@web
Feature: Book Details

  Scenario: A user should be able to view book details
    When the user searches for a book named "testing"
    And the user selects "Agile Testing" from the search results
    Then the book details should be displayed
