# ABN AMRO Test Assignment

## Introduction

Welcome to the ABN AMRO test assignment repository.

The Playwright framework has been selected to provide test coverage for this application. More information about Playwright can be found [here](https://playwright.dev/docs/intro).

## Requirements

- `NodeJS 20+` - can be downloaded from [here](https://nodejs.org/en/download/package-manager)

## Setup Project

1. Clone the repository:
   ```sh
   git clone git@github.com:sirdir/abn-amro-test-assignment.git
   ```
2. Navigate to the project directory:
   ```sh
   cd abn-amro-test-assignment
   ```
3. Install project dependencies:
   ```sh
   npm install
   ```
4. Install playwright required dependencies (will ask for `sudo`):
   ```sh
   npx playwright install --with-deps chromium firefox
   ```

## Testing: Test Cases and Test Coverage

After conducting exploratory testing of the application, it has been concluded that it is still "In development." Therefore, test coverage is provided for the final product and the expected user experience, rather than just the current state. Many assumptions have been made due to the lack of a specification to reference.

### List of Assumptions:

- `admin@admin.com` is indeed an administrator user with specific permissions, while the other two users are common ones.
- Some functionality is still being developed. Tests for functionality that is not yet have been implemented have marked with the annotation `test.fixme()`. More information about this annotation can be found [here](https://playwright.dev/docs/api/class-test#test-fixme).
- Some functionality has issues that should be fixed in upcoming versions. Tests for such functionality have been marked with the annotation `test.fail()`. More information about this annotation can be found [here](https://playwright.dev/docs/api/class-test#test-fail).

### Test Coverage

Tests have been parameterized whenever possible.

Tests have been configured to run for Chrome and Firefox. They can be easily extended to other browsers.

Test cases have been labeled here in the README, but not in the code, with the following labels: `positive`, `negative`, `fail`, `fixme`, `parameterized`.

#### Login Test Suite:

- Successful authorization by clicking the login button **(positive/parameterized)**
- Successful authorization by pressing Enter when credentials are filled **(positive/fail)**
- Authorization with wrong credentials **(negative/fixme/parameterized)**

#### Navigation Test Suite:

- Navigate from Home page to Products page **(positive/fixme)**
- Navigate from Home page to Contact page **(positive/fixme)**

#### Logout:

- User can log out from the app **(positive/fail)**

#### Permission Test Suite:

- Admin should see the admin panel **(positive/fixme)**
- Average user should not see the admin panel **(positive/fixme/parameterized)**

## Usage

To run all the tests in headless mode, use the following command in the terminal:

```sh
npm run test
```

If you want to see the browser(s) while tests are executed, run this command instead:

```sh
npm run test:ui
```

## Reporting

After each test run test report will be automatically shown. Failed tests if any should contain screenshots.

You can also manually run the report with the following command:

```sh
npm run report
```

For the CI report look at [GitHub Pages](https://sirdir.github.io/abn-amro-test-assignment/).

## CI

GitHub Actions have been used as CI.

All CI jobs by -> [link](https://github.com/sirdir/abn-amro-test-assignment/actions/workflows/playwright.yml).

Latest CI report -> [GitHub Pages](https://sirdir.github.io/abn-amro-test-assignment/).

## Static Analysis and Code Style

To maintain a consistent code style and prevent potential issues, Prettier and ESLint have been utilized as tools. Before each commit, a `pre-commit` hook is triggered to run Prettier and ESLint.

Some changes have been made to the application source code due to potential issues identified by ESLint.
