# HTML reporter crashes on attachments named "stdout" or "stderr"

Minimal reproduction for a Playwright bug. No browser is needed.

## Steps

```bash
npm install
npx playwright test tests/stdout-body.spec.js
npx playwright test tests/stderr-path.spec.js
```

## Expected

The test passes, the HTML report is generated, and the exit code is 0.

## Actual

The test passes, but the HTML reporter throws while it generates the report, and the exit code is 1.

`tests/stdout-body.spec.js`:

```
  1 passed
TypeError: str.replace is not a function
```

`tests/stderr-path.spec.js`:

```
  1 passed
TypeError: Cannot read properties of undefined (reading 'replace')
```

Tested with `@playwright/test` 1.64.1, Node.js 24.20.0, Windows 11.
