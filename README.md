# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Features**:
- Individual page fixtures to facilitate the object creation specific to each page, enhancing modularity and reusability while ensuring precise and reliable testing.
- An index page has been added to export all fixtures at once, making managing fixtures with a single access point easier, improving organization, and reducing the risk of missing fixtures for pages.
- A base file has been created to centralize common tasks shared across the framework. Functionalities include:
   - Utilized Playwright’s mergeTest feature to combine all fixtures into a unified test context.
   - Implemented a decorator feature in TypeScript to create a step function that annotates each test step.
   - Allow test files to access the assertion library directly from the base file, reducing the need for repetitive import statements.
- The tsconfig.json file defines paths to streamline module resolution, simplify import paths, and reduce path-related errors in the project.
- Hooks have been introduced to execute the setup code before each test. This feature ensures that each test starts with a clean and consistent state, improving test reliability and reducing the risk of test flakiness caused by residual data from previous tests.

**Limitations**:

1. Confidential details are still sitting in the test script.
   
2. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs.
   
3. The user name and password are dropdown but need to be identified using those specialised selectors.

4. Selectors have been moved to the respective pages using Page Object, which will ease the updating, but they still use the HTML structure.

5. The URL is moved to config, but switching between different environments requires more changes.
#
<table>
  <tr>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.0">Level 0</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.1">Level 1</a></td>
    <td>Level 2</td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.3">Level 3</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.4">Level 4</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.5">Level 5</a></td>
    <td><a href="https://Cerosh.github.io/bstackdemo.github.io">Final Report</a></td>
  </tr>
</table>
