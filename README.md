# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Features**:
- POM separates page elements and interactions from test logic, making code more modular and test cases more human-readable.
- When page elements change, modifications can be made centrally in the POM, minimizing the impact on existing test cases.
- POM enables the definition and reuse of common page elements and interactions across multiple test cases, reducing code duplication. It also allows creating custom actions within the POM to encapsulate complex interactions, making test code more concise and reusable.
- Defining page elements in one place ensures consistency and reduces the risk of incorrect element references. POM helps prevent flaky tests caused by changes in the page structure, as modifications are typically made in a centralized location.
- POM encourages the use of descriptive page names for easy understanding. Test cases can be written more human-readable, focusing on actions rather than technical details.
- POM facilitates the storage and management of test data, making it easier to maintain and update data across multiple test cases. It also allows for data-driven testing with different data sets.
- POM helps create a shared understanding of the application's structure and interactions among team members. It also makes maintaining and updating the codebase easier when multiple developers work on the test suite.

**Limitations**:

1. The test data can be passed from the test, but changes would still necessitate a script update. Also, confidential details are exposed in the source code.

2. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs. 

3. The user name and password are dropdown but need to be identified using those specialised selectors. 

4. The test report is crowded, with all actions shown together, so it will take work to read in case of a failure. 

5. Tests can be grouped under a description and utilised a hook for state handling between tests, but as a cost, the same object had to be created twice, which resulted in code duplication.

6. Selectors have been moved to the respective pages using Page Object, which will ease the updating, but they still use the HTML structure.

7. The segmentation of concern was implemented, but it remains challenging to read because the test script still includes object creation for each page.

8. The URL is moved to config, but switching between different environments requires more changes.
#
<table>
  <tr>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.0">Level 0</a></td>
    <td>Level 1</td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.2">Level 2</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.3">Level 3</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.4">Level 4</a></td>
    <td><a href="https://github.com/Cerosh/bstackdemo.github.io/tree/level.5">Level 5</a></td>
    <td><a href="https://Cerosh.github.io/bstackdemo.github.io">Final Report</a></td>
  </tr>
</table>
