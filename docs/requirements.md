# TechShop — Sprint 1 Requirements

**Project:** TechShop Online Store
**Sprint:** Sprint 1
**Sprint Goal:** Deliver a working login, product browsing, cart, and checkout flow
**Sprint Duration:** 2 weeks
**Status:** Ready for QA

---

## In Scope

### Login Page

- Users log in with email and password
- Email must be valid format (contains @ and domain)
- Password field must mask input characters
- Empty fields must be rejected with an error message
- Valid credentials: demo@techshop.com / password123
- Successful login redirects to product catalog
- Failed login shows error message, stays on login page
- Session persists for the browser session

### Product Catalog

- Grid of available products
- Each card: product name, price, image placeholder, Add to Cart button
- Out of Stock products show badge and disabled button
- Page title: "TechShop — Products"

### Shopping Cart

- Add products from catalog
- Cart shows: name, unit price, quantity, line total, order total
- Increment/decrement quantity controls — minimum 1
- Remove individual items
- Empty cart message: "Your cart is empty"
- Cart state persists within session only
- Orders under $10.00 rejected with message: "Minimum order value is $10.00"

### Checkout Form

- Accessible via "Proceed to Checkout" button in cart
- Fields: First Name, Last Name, Email, Phone, Card Number, Expiry Date, CVV
- All fields required — empty submission rejected
- Email: valid format
- Card Number: exactly 16 digits
- Phone: 10 digits
- Expiry: MM/YY format, not in the past
- CVV: 3 digits
- Success: confirmation page with order reference, items, total

---

## Out of Scope — Sprint 1

- Payment gateway integration
- Email confirmation notifications
- User registration and password reset
- Admin dashboard
- Mobile responsive design
- Cross-browser testing (Chrome only)
- Product search and filtering

---

## Technical Context

- Static HTML/CSS/JavaScript — no backend server
- Testing in Chrome (latest) on local file
- No staging environment
- Credentials hardcoded: demo@techshop.com / password123
- Cart state in JavaScript variables — not persisted

---

## QA Resource

- Tester: 1 QA analyst
- Available time: 3 days
- Browser: Chrome latest
- Environment: Local HTML file
