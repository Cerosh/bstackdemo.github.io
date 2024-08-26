# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Steps**
1. Navigate to the website, click on an item's "Add to cart" button, and click on the "Checkout" button.
2. Click on the username input field and select the option from the dropdown list. Click on the password input field and then select the option from the dropdown list.
3. Click the "Log In" button, fill in the personal information, and click the "Submit" button.
4. Finally, the script asserts that the message for the order placed is visible.

**Limitations**
Even though the script uses various Playwright APIs to interact with the webpage, there are some areas for improvement. 

1. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs.
