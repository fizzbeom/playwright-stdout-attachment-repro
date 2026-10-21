const { test } = require('@playwright/test');

// Crashes the HTML reporter with "TypeError: str.replace is not a function".
test('attachment named stdout with a string body', async ({}, testInfo) => {
  await testInfo.attach('stdout', { body: 'hello' });
});
