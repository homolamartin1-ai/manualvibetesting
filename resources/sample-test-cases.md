# TechShop — Sample Test Cases
> Generated with AI assistance (Claude) and refined by a human tester.
> Application: TechShop demo e-commerce app (Manual Testing course resource)

---

## MODULE 1: Login Functionality

| TC ID | Title | Preconditions | Steps | Expected Result | Priority |
|-------|-------|---------------|-------|-----------------|----------|
| TC-L01 | Successful login with valid credentials | App is open at login page | 1. Enter "admin" in username<br>2. Enter "password123" in password<br>3. Click "Sign In" | User is redirected to Products page | High |
| TC-L02 | Login with empty username | App is open at login page | 1. Leave username blank<br>2. Enter any password<br>3. Click "Sign In" | Error message displayed: "Username is required" | High |
| TC-L03 | Login with empty password | App is open at login page | 1. Enter any username<br>2. Leave password blank<br>3. Click "Sign In" | Error message displayed: "Password is required" | High |
| TC-L04 | Login with both fields empty | App is open at login page | 1. Leave username blank<br>2. Leave password blank<br>3. Click "Sign In" | Error message displayed, form not submitted | High |
| TC-L05 | Login with invalid credentials | App is open at login page | 1. Enter "wronguser" in username<br>2. Enter "wrongpass" in password<br>3. Click "Sign In" | Error message: "Invalid username or password" | High |
| TC-L06 | Password field masks input | App is open at login page | 1. Click into the Password field<br>2. Type any text | Characters displayed as dots/asterisks (not plaintext) | High |
| TC-L07 | Login with whitespace-only username | App is open at login page | 1. Enter "   " (spaces only) in username<br>2. Enter valid password<br>3. Click "Sign In" | Validation error — whitespace not accepted as valid username | Medium |
| TC-L08 | Login with very long username (500 chars) | App is open at login page | 1. Paste 500-character string into username<br>2. Enter any password<br>3. Click "Sign In" | App handles gracefully — no crash, appropriate error or trim | Medium |
| TC-L09 | Error message is visible and readable | Error message shown after failed login | Observe the error message text | Text is clearly visible, readable contrast, not hidden behind other elements | Medium |
| TC-L10 | Page title displayed in browser tab | App is open at login page | 1. Observe the browser tab title | Tab shows "TechShop" or relevant title — not "Untitled" | Low |

---

## MODULE 2: Product Browsing

| TC ID | Title | Preconditions | Steps | Expected Result | Priority |
|-------|-------|---------------|-------|-----------------|----------|
| TC-P01 | All products displayed on products page | User is logged in and on Products page | 1. Observe the products grid | All 4 products visible with name, image, price, and Add to Cart button | High |
| TC-P02 | Discounted price calculated correctly | User is on Products page | 1. Note the original price and discount % for each product<br>2. Calculate expected discounted price manually | Displayed discounted price matches correct calculation (e.g. $89.99 × 20% off = $71.99) | High |
| TC-P03 | Product images load correctly | User is on Products page | 1. Observe all product images | All product images load and display without broken image icons | Medium |
| TC-P04 | Product images have alt text | User is on Products page | 1. Right-click → Inspect each product image<br>2. Check for alt attribute | All images have descriptive alt attributes (accessibility) | Medium |
| TC-P05 | Product description fits within card | User is on Products page | 1. Observe each product card | Product descriptions are contained within their card boundaries — no overflow | Medium |
| TC-P06 | Default quantity is 1 | User is on Products page | 1. Observe the quantity input on each product card | Default quantity value is 1 | Low |
| TC-P07 | Quantity accepts only positive integers | User is on Products page | 1. Change quantity to 0<br>2. Click "Add to Cart"<br>3. Repeat with -1 | App rejects 0 and negative quantities with an appropriate message | High |
| TC-P08 | Navigation to cart works from products page | User is on Products page | 1. Click "Cart" in the navigation bar | User is navigated to the Shopping Cart page | Medium |

---

## MODULE 3: Shopping Cart

| TC ID | Title | Preconditions | Steps | Expected Result | Priority |
|-------|-------|---------------|-------|-----------------|----------|
| TC-C01 | Item added to cart appears in cart | User is on Products page | 1. Set quantity to 1 for "USB-C Hub"<br>2. Click "Add to Cart"<br>3. Navigate to Cart | "USB-C Hub" appears in cart with quantity 1 and correct price | High |
| TC-C02 | Cart total is correct with one item | User has one item in cart | 1. Navigate to Cart<br>2. Note item price and quantity | Cart total = item price × quantity (correct arithmetic) | High |
| TC-C03 | Cart total is correct with multiple items | User has added 3 different products | 1. Navigate to Cart<br>2. Note each item subtotal<br>3. Note the cart total | Cart total = sum of all item subtotals | High |
| TC-C04 | Cart total updates after removing an item | User has 2 items in cart | 1. Note the cart total<br>2. Click "Remove" on one item<br>3. Observe the new cart total | Cart total recalculates to reflect only remaining items | High |
| TC-C05 | Removed item disappears from cart table | User has 2 items in cart | 1. Click "Remove" on one item | Removed item is no longer visible in the cart table | High |
| TC-C06 | Cart badge reflects item count | User is on Products page | 1. Add 2 different products to cart<br>2. Observe the cart icon in the navigation | Badge shows total quantity added (e.g. "2") | Medium |
| TC-C07 | Empty cart shows empty state message | User has no items in cart | 1. Navigate to Cart | "Your cart is empty" message displayed with link to continue shopping | Medium |
| TC-C08 | Cart quantity cannot be set to negative | User has item in cart | 1. Manually type -1 in the quantity field<br>2. Observe the result | Negative quantity is rejected; cart does not accept it | High |
| TC-C09 | "Proceed to Checkout" button navigates to checkout | User has items in cart | 1. Click "Proceed to Checkout" | User is navigated to the Checkout page | High |
| TC-C10 | Adding same product twice increases quantity | User is on Products page | 1. Add "Mechanical Keyboard" with qty 1<br>2. Add "Mechanical Keyboard" with qty 1 again<br>3. Check cart | Item shows quantity 2, not two separate rows | Medium |

---

## MODULE 4: Checkout Form

| TC ID | Title | Preconditions | Steps | Expected Result | Priority |
|-------|-------|---------------|-------|-----------------|----------|
| TC-CH01 | Successful order with all valid data | User is on Checkout page | 1. Fill all fields with valid data<br>2. Click "Place Order" | Order confirmation shown with a summary of the order | High |
| TC-CH02 | Order blocked when First Name is empty | User is on Checkout page | 1. Leave First Name blank<br>2. Fill all other fields<br>3. Click "Place Order" | Validation error: "First Name is required" | High |
| TC-CH03 | Order blocked when Address is empty | User is on Checkout page | 1. Leave Address blank<br>2. Fill all other fields<br>3. Click "Place Order" | Validation error: "Address is required" | High |
| TC-CH04 | Invalid email format rejected | User is on Checkout page | 1. Enter "notanemail" in Email<br>2. Fill other fields<br>3. Click "Place Order" | Validation error: "Please enter a valid email address" | High |
| TC-CH05 | Valid email format accepted | User is on Checkout page | 1. Enter "user@example.com" in Email<br>2. Fill other fields correctly<br>3. Click "Place Order" | Form submits successfully | High |
| TC-CH06 | Phone field rejects letters | User is on Checkout page | 1. Enter "abcdef" in Phone<br>2. Click "Place Order" | Validation error: phone must contain numbers only | High |
| TC-CH07 | Phone field accepts digits | User is on Checkout page | 1. Enter "5550100" in Phone<br>2. Fill other fields<br>3. Click "Place Order" | Form accepts phone number and submits | Medium |
| TC-CH08 | Order confirmation shows order summary | User has valid data and submits | 1. Fill all fields correctly<br>2. Click "Place Order" | Confirmation message includes list of ordered items and total | High |
| TC-CH09 | Submit button is visible and readable | User is on Checkout page | 1. Observe the "Place Order" button | Button has sufficient contrast — text clearly readable against background | Medium |
| TC-CH10 | All fields empty — form not submitted | User is on Checkout page | 1. Leave all fields blank<br>2. Click "Place Order" | Form is not submitted; validation errors shown for required fields | High |
| TC-CH11 | Email with special chars accepted | User is on Checkout page | 1. Enter "user+tag@example.co.uk" in Email | Email is accepted as valid | Low |
| TC-CH12 | Very long input in name field | User is on Checkout page | 1. Enter 300 characters in First Name<br>2. Click "Place Order" | App handles gracefully — no crash, reasonable max-length enforced | Low |
