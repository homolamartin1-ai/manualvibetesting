# TechShop — Known Bugs (Broken App)
> Reference document for course instructors and students.
> All bugs are intentional and present in `demo-apps/broken-app/index.html`.
> The fixed version (`demo-apps/fixed-app/index.html`) resolves all of them.

---

## Summary Table

| Bug ID | Area | Title | Severity | Priority |
|--------|------|-------|----------|----------|
| BUG-001 | Login | Password field shows input as plaintext | High | Critical |
| BUG-002 | Login | Login succeeds with empty username and password | High | Critical |
| BUG-003 | Login | No error message shown on failed login | Medium | High |
| BUG-004 | Products | Discount calculated incorrectly (wrong formula) | High | Critical |
| BUG-005 | Products | First product image is broken (bad URL) | Medium | High |
| BUG-006 | Products | Third product image missing alt attribute | Low | Medium |
| BUG-007 | Products | Product description overflows card boundary | Low | Medium |
| BUG-008 | Products | Add to Cart accepts zero and negative quantities | High | High |
| BUG-009 | Cart | Total not recalculated after removing an item | High | Critical |
| BUG-010 | Cart | Negative quantity accepted in cart quantity field | High | High |
| BUG-011 | Cart | "Proceed to Checkout" button does nothing | High | Critical |
| BUG-012 | Checkout | Required fields (name, address) not validated | Critical | Critical |
| BUG-013 | Checkout | Email field accepts invalid format (type="text") | High | High |
| BUG-014 | Checkout | Phone field accepts letters and special characters | High | High |
| BUG-015 | Checkout | Order placed with all fields empty — no validation | Critical | Critical |
| BUG-016 | Checkout | No order summary shown after placing order | Medium | High |
| BUG-017 | Checkout | Submit button has critically low contrast | Medium | High |
| BUG-018 | General | Browser tab title shows "Untitled" | Low | Low |

---

## Detailed Bug Descriptions

---

### BUG-001 — Password field shows input as plaintext
**Area:** Login | **Severity:** High | **Priority:** Critical

**Description:**
The password input field uses `type="text"` instead of `type="password"`. Every character typed by the user is visible on screen in plaintext. Anyone looking at the screen can see the password.

**Root cause:** `type="text"` used instead of `type="password"` on the password input
**Fix:** Change `type="text"` to `type="password"`

---

### BUG-002 — Login succeeds with empty username and password
**Area:** Login | **Severity:** High | **Priority:** Critical

**Description:**
Clicking "Sign In" with both fields completely empty navigates the user directly to the Products page. No client-side validation checks whether fields are filled before proceeding.

**Root cause:** `doLogin()` calls `showPage('products')` unconditionally with no field validation
**Fix:** Validate that both username and password are non-empty before navigating

---

### BUG-003 — No error message shown on failed login
**Area:** Login | **Severity:** Medium | **Priority:** High

**Description:**
When a user enters incorrect or empty credentials, no error message is displayed. The login error element exists in the HTML but is never made visible. The user gets no feedback that their login attempt failed.

**Root cause:** Error message display logic is missing from `doLogin()`
**Fix:** Show the `.error-msg` element when credentials are invalid or empty

---

### BUG-004 — Discount calculated incorrectly
**Area:** Products | **Severity:** High | **Priority:** Critical

**Description:**
Product discounts use the wrong formula. The code divides by `1000` instead of `100`, so a 20% discount applies only ~2% off. Example: Wireless Headphones at $89.99 with 20% off shows ~$88.19 instead of the correct $71.99.

**Root cause:** `price * (1 - discount / 1000)` used instead of `price * (1 - discount / 100)`
**Fix:** Change divisor from `1000` to `100` in the discount formula

---

### BUG-005 — First product image is broken
**Area:** Products | **Severity:** Medium | **Priority:** High

**Description:**
The "Wireless Headphones Pro" card shows a broken image icon. The `src` attribute points to `https://broken-link.invalid/headphones.jpg` which does not exist.

**Root cause:** Invalid image URL used for the first product
**Fix:** Replace with a valid image URL or working placeholder

---

### BUG-006 — Product image missing alt attribute
**Area:** Products | **Severity:** Low | **Priority:** Medium

**Description:**
The "Mechanical Keyboard TKL" image is rendered without an `alt` attribute — an accessibility violation. Screen readers cannot describe the image, and if it fails to load there is no fallback text.

**Root cause:** `alt` attribute conditionally omitted for product ID 3
**Fix:** Add a descriptive `alt` attribute to all product images

---

### BUG-007 — Product description overflows card boundary
**Area:** Products | **Severity:** Low | **Priority:** Medium

**Description:**
The "Mechanical Keyboard TKL" card has an unusually long description that overflows its container, breaking the visual layout of the product grid.

**Root cause:** No CSS `overflow`, `line-clamp`, or `max-height` applied to product description text
**Fix:** Add `display: -webkit-box; -webkit-line-clamp: 3; overflow: hidden;` to the description element

---

### BUG-008 — Add to Cart accepts zero and negative quantities
**Area:** Products | **Severity:** High | **Priority:** High

**Description:**
Users can set the quantity to `0` or a negative number (e.g. `-5`) and click "Add to Cart". The item is added with the invalid quantity and no error is shown.

**Root cause:** `addToCart()` uses the quantity value directly without checking `qty >= 1`
**Fix:** Validate that `qty` is a positive integer before adding; show an error if not

---

### BUG-009 — Cart total not recalculated after removing an item
**Area:** Cart | **Severity:** High | **Priority:** Critical

**Description:**
When a user removes an item from the cart, the item row disappears but the total amount displayed does not update. It keeps showing the pre-removal total, making the cart financially incorrect.

**Root cause:** `removeFromCart()` removes the item from the array and updates the rows but never recalculates or updates `#cart-total`
**Fix:** After removing an item, recalculate the total from the updated cart array and update the display

---

### BUG-010 — Negative quantity accepted in cart
**Area:** Cart | **Severity:** High | **Priority:** High

**Description:**
On the Cart page, users can type a negative number into a quantity field. The cart accepts it without validation, potentially resulting in a negative subtotal and cart total.

**Root cause:** No JS validation on cart quantity change; `min` attribute not enforced
**Fix:** Validate quantity changes in the cart and reject values below 1

---

### BUG-011 — "Proceed to Checkout" button does nothing
**Area:** Cart | **Severity:** High | **Priority:** Critical

**Description:**
The "Proceed to Checkout" button is visible and styled but has `onclick=""` — an empty handler. Clicking it produces no action. Users cannot navigate from cart to checkout.

**Root cause:** `onclick=""` — empty event handler, no navigation called
**Fix:** Change to `onclick="showPage('checkout')"` or equivalent navigation call

---

### BUG-012 — Required checkout fields not validated
**Area:** Checkout | **Severity:** Critical | **Priority:** Critical

**Description:**
First Name and Address fields have no `required` attribute and no JavaScript validation. Users can leave them blank and still "place" an order — the app never checks if they are filled.

**Root cause:** Missing `required` attributes; no validation in `submitOrder()`
**Fix:** Add `required` attributes and validate all required fields in `submitOrder()`

---

### BUG-013 — Email field does not validate format
**Area:** Checkout | **Severity:** High | **Priority:** High

**Description:**
The Email field uses `type="text"` instead of `type="email"`, bypassing the browser's built-in email format validation. Values like "notanemail", "abc", or "@" are accepted.

**Root cause:** `type="text"` used instead of `type="email"`
**Fix:** Change to `type="email"` and add regex validation in `submitOrder()`

---

### BUG-014 — Phone field accepts letters and special characters
**Area:** Checkout | **Severity:** High | **Priority:** High

**Description:**
The Phone field accepts any character including letters, symbols, and spaces. There is no pattern validation, no `type="tel"`, and no JS check ensuring only digits are entered.

**Root cause:** `type="text"` with no `pattern` attribute or validation
**Fix:** Add `pattern="[0-9+\-\s()]+"` or validate with a regex check in `submitOrder()`

---

### BUG-015 — Order placed with all fields empty
**Area:** Checkout | **Severity:** Critical | **Priority:** Critical

**Description:**
Clicking "Place Order" with every field blank immediately shows "Order placed! Thank you." No validation of any kind occurs. This is the most severe bug in the app.

**Root cause:** `submitOrder()` shows the success message unconditionally — no validation logic present
**Fix:** Implement full form validation in `submitOrder()` before showing the confirmation

---

### BUG-016 — No order summary shown after placing order
**Area:** Checkout | **Severity:** Medium | **Priority:** High

**Description:**
After clicking "Place Order", only a generic success message appears. No item list, total, or reference number is shown. Users have no confirmation of what they ordered.

**Root cause:** The order summary panel is empty — no code populates it with cart data
**Fix:** Populate the confirmation panel with cart items and total before displaying it

---

### BUG-017 — Submit button has critically low contrast
**Area:** Checkout | **Severity:** Medium | **Priority:** High

**Description:**
The "Place Order" button uses light gray text (`#d1d5db`) on a light gray background (`#e5e7eb`). The contrast ratio fails WCAG AA standards, making the button nearly unreadable — especially for users with low vision.

**Root cause:** Low-contrast color values intentionally applied to `.btn-submit`
**Fix:** Use `background: #2563EB; color: #ffffff` or any WCAG AA-compliant color pair

---

### BUG-018 — Browser tab title shows "Untitled"
**Area:** General | **Severity:** Low | **Priority:** Low

**Description:**
The `<title>` tag is set to `"Untitled"`. The browser tab, bookmarks, and screen readers show "Untitled" instead of a meaningful app name.

**Root cause:** `<title>Untitled</title>` used instead of a proper title
**Fix:** Change to `<title>TechShop — Your Tech Store</title>`

---

## Bug Count by Area

| Area | Count |
|------|-------|
| Login | 3 |
| Products | 4 |
| Cart | 3 |
| Checkout | 5 |
| General | 1 |
| **Total** | **18** |

## Bug Count by Severity

| Severity | Count |
|----------|-------|
| Critical | 2 |
| High | 10 |
| Medium | 4 |
| Low | 2 |
