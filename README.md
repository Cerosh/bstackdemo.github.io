# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Steps**
1. Navigate to the website, click on an item's "Add to cart" button, and click on the "Checkout" button.
2. Click on the username input field and select the option from the dropdown list. Click on the password input field and then select the option from the dropdown list.
3. Click the "Log In" button, fill in the personal information, and click the "Submit" button.
4. Finally, the script asserts that the message for the order placed is visible.

**Limitations**
Even though the script uses various Playwright APIs to interact with the webpage, there are some areas for improvement. 

1. The test data can be passed from the test, but changes would still necessitate a script update. Also, confidential details are exposed in the source code.

2. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs. 

3. The user name and password are dropdown but need to be identified using those specialised selectors. 

4. The test report is crowded, with all actions shown together, so it will take work to read in case of a failure. 

5. Grouped the tests and utilised a hook for state handling between tests, but as a cost, had to create the same object twice, which resulted in code duplication.

6. Selectors have been moved to the respective pages using Page Object, which will ease the updating, but they still use the HTML structure.

7. The segmentation of concern was implemented, but it remains challenging to read because the test script still includes object creation for each page.

8. The URL is moved to config, but switching between different environments requires more changes.
