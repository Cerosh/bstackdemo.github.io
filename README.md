# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Features**:
- The Suite leverages Playwright's organized folder structure and incorporates Playwright keywords to streamline test case definitions.
- Integration with GitHub Workflow enhances continuous integration and delivery processes, automating the testing pipeline seamlessly.
- The Suite utilizes Playwright's built-in identifiers, such as getByText(), getByRole(), and getByLabel(), to ensure precise element targeting and interaction.
- Full advantage of Playwright's built-in assertions is taken for reliable validation of test outcomes.
- The Suite supports fully parallel test execution and allows retries to enhance test reliability.
- Multiple browsers are accommodated for extensive cross-browser testing.
- Additionally, the Suite features an HTML reporter for clear and comprehensive test result visualization and collects traces when retrying failed tests to aid in debugging and issue resolution.

**Limitations**
Even though the script uses various Playwright APIs to interact with the webpage, there are some areas for improvement.
1. The test data is not dynamic; therefore, any changes would necessitate script modification, diminishing the flexibility of the test scripts because the data is linked to a specific scenario. Furthermore, confidential details such as usernames and passwords might be exposed within the source code.

2. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs.

3. The user name and password are dropdown but not identified using those specialised selectors.

4. The test report is crowded, with all actions shown together, so it will not be easy to read in case of a failure.

5. The script does not address any maintenance or state handling between tests. If tests are executed one after the other, any remaining data from a previous test could impact the next one. Failing to manage clean-up could result in inconsistent tests and untrustworthy outcomes.

6. The script uses hardcoded selectors, which might be brittle and prone to breaking if the application's HTML structure changes. Changes in the application's UI can cause the test to fail if selectors are not updated accordingly.

7. The script is designed to test a single data set and does not account for parameterisation or different input scenarios. The script cannot easily be used to test various data sets or edge cases.

8. The script does a lot of work within a single test function. It includes navigation, user interactions, and assertions. This makes the script harder to read, maintain, and debug.

9. The URL is hardcoded in the script, which makes it less flexible if you need to test against different environments (e.g., staging, production). The script cannot easily switch between different environments.
#
[Level 0](https://github.com/Cerosh/bstackdemo.github.io/tree/level.0)             [Level 1](https://github.com/Cerosh/bstackdemo.github.io/tree/level.1)   [Level 2](https://github.com/Cerosh/bstackdemo.github.io/tree/level.2)   [Level 3](https://github.com/Cerosh/bstackdemo.github.io/tree/level.3)   [Level 4](https://github.com/Cerosh/bstackdemo.github.io/tree/level.4)   [Level 5](https://github.com/Cerosh/bstackdemo.github.io/tree/level.5)   [Final Report](https://Cerosh.github.io/bstackdemo.github.io)
