const path = require('path');
const { test } = require('@playwright/test');

// Crashes the HTML reporter with "TypeError: Cannot read properties of undefined (reading 'replace')".
test('attachment named stderr with a .txt path', async ({}, testInfo) => {
  await testInfo.attach('stderr', { path: path.join(__dirname, 'log.txt') });
});
