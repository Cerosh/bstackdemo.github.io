# bstackdemo.github.io

**Functionality**: Place an order for iPhone 12 Pro in the bstackdemo

**Limitations**:

1. Confidential details are still sitting in the test script.
   
2. The script doesn't include any error handling or recovery mechanisms. If an action fails (e.g., an element is not found), the script will likely stop executing or fail abruptly. Lack of error handling can lead to incomplete test runs or misleading results if a failure occurs.
   
3. The user name and password are dropdown but need to be identified using those specialised selectors.

4. Selectors have been moved to the respective pages using Page Object, which will ease the updating, but they still use the HTML structure.

5. The URL is moved to config, but switching between different environments requires more changes.
