import { When, Then } from '@wdio/cucumber-framework';

When(/^the user searches for (\w+)$/, async (searchTerm: string) => {
});

Then(/^the search results should contain (\w+) books$/, async (expectedTitle: string) => {
});
