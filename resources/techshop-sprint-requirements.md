# TechShop — Sprint 1 Requirements
## Copy this content into a Google Doc for the Section 5 Gemini demo

---

# TechShop Web Application — Sprint 1 Requirements

**Project:** TechShop Online Store
**Sprint:** Sprint 1
**Sprint Goal:** Deliver a working login, product browsing, cart, and checkout flow for end-to-end customer purchase journey
**Sprint Duration:** 2 weeks
**Author:** Product Team
**Status:** Ready for QA

---

## 1. In Scope

### 1.1 Login Page

- Users must be able to log in with a valid email address and password
- Email field must accept only valid email format (contains @ and domain)
- Password field must mask input characters
- Empty email or password must be rejected with an error message
- Valid credentials: demo@techshop.com / password123
- On successful login, user is redirected to the product catalog page
- On failed login, user sees an error message and stays on the login page
- Session persists for the duration of the browser session

### 1.2 Product Catalog Page

- Page displays a grid of available products
- Each product card shows: product name, price, image placeholder, and an Add to Cart button
- Products marked as Out of Stock must display a badge and disable the Add to Cart button
- Page title must read "TechShop — Products"
- Clicking a product name does not navigate away (no product detail page in this sprint)

### 1.3 Shopping Cart

- Users can add products to the cart from the product catalog
- Cart displays all added items with name, unit price, quantity, and line total
- Cart displays a running order total
- Users can update item quantity using increment/decrement controls
- Quantity cannot go below 1
- Users can remove individual items from the cart
- An empty cart displays a message: "Your cart is empty"
- Cart state persists within the same browser session (not across sessions)
- Orders with a total below $10.00 must be rejected at checkout with a message: "Minimum order value is $10.00"

### 1.4 Checkout Form

- Checkout page is accessible from the cart via a "Proceed to Checkout" button
- Form fields: First Name, Last Name, Email, Phone, Card Number, Expiry Date, CVV
- All fields are required — empty submission must be rejected
- Email must be valid format
- Card number must be exactly 16 digits
- Phone must be 10 digits
- Expiry date must be in MM/YY format and must not be in the past
- CVV must be 3 digits
- On successful submission, user sees a confirmation page with order summary
- Confirmation page shows: order reference number, items ordered, total charged

---

## 2. Out of Scope — Sprint 1

- Payment gateway integration (form submission is simulated)
- Email confirmation notifications
- User registration / account creation
- Password reset flow
- Admin dashboard
- Mobile responsive design
- Cross-browser testing (Chrome only for Sprint 1)
- Product search and filtering
- Wishlist functionality

---

## 3. Technical Context

- Application runs as a static HTML/CSS/JavaScript file — no backend server
- All testing to be performed locally in Chrome (latest stable version)
- No staging environment available for Sprint 1
- Login credentials are hardcoded: demo@techshop.com / password123
- Cart state is stored in JavaScript variables — not persisted to localStorage or cookies

---

## 4. Known Issues Entering Sprint 1

| Bug ID | Area | Summary | Severity |
|---|---|---|---|
| BUG-001 | Login | Password field uses type="text" — input visible in plaintext | High |
| BUG-002 | Login | Empty fields accepted — no validation on submit | High |
| BUG-003 | Login | Wrong credentials silently redirect instead of showing error | High |
| BUG-004 | Cart | Discount calculation divides by 1000 instead of 100 | Critical |
| BUG-011 | Checkout | Proceed to Checkout button unresponsive — checkout page unreachable via UI | Critical |

---

## 5. Definition of Done

A feature is considered done when:
- All acceptance criteria for that feature pass in manual testing
- All Critical and High bugs found during testing are logged in Jira
- Test cases are logged in Jira under project TECH
- No Priority 1 (Critical) bugs are open at sprint close
- No more than two Priority 2 (High) bugs are open with written developer acknowledgement

---

## 6. QA Resource

- Tester: 1 QA analyst
- Available time: 3 days
- Browser: Chrome (latest stable)
- Environment: Local HTML file
