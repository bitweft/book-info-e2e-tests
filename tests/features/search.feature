@android @web
Feature: Search Books

  Scenario: A user should be able to search for books
    When the user searches for a book named "testing"
    Then the search results should display "testing" books
