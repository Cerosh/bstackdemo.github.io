# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Mini in the bstackdemo

**Features**:
- Introduced dynamic locators in Playwright, replacing hardcoded values with flexible, context-sensitive locators. This change enhances the robustness of the tests by adapting to changes in the UI.
- Implemented Faker.js to generate dynamic test data, moving away from static, hardcoded values. This allows for realistic, varied test data, improving test coverage and accuracy.
- Leveraged GitHub’s repository variable feature to enhance security and manage configurations:
  -   Access passwords securely from GitHub secrets instead of embedding them directly in the code.
  -   Configure and manage base URLs for multiple environment executions via GitHub variables.
  -   Incorporated GitHub secrets and variables within GitHub Actions for improved security and configuration management.


**Limitations**:

1. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs.
