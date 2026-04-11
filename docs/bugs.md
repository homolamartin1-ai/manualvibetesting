# TechShop — Known Bugs

**Project:** TECH
**Last updated:** Sprint 1 start

---

## Open Bugs

| Bug ID | Area | Summary | Severity | Priority | Status |
|---|---|---|---|---|---|
| BUG-001 | Login | Password field uses type="text" — input visible in plaintext | High | P2 | Open |
| BUG-002 | Login | Empty email and password accepted — no validation on submit | High | P2 | Open |
| BUG-003 | Login | Wrong credentials silently redirect to catalog instead of showing error | High | P2 | Open |
| BUG-004 | Cart | Discount calculation divides by 1000 instead of 100 — prices show as fractions of a cent | Critical | P1 | Open |
| BUG-005 | Cart | Quantity decrement allows values below 1 — cart shows negative quantities | High | P2 | Open |
| BUG-006 | Cart | Order total does not update when quantity is changed | High | P2 | Open |
| BUG-007 | Catalog | Long product descriptions overflow container — text runs outside card boundary | Medium | P3 | Open |
| BUG-008 | Catalog | Out of Stock badge shows green instead of red — visually misleading | Medium | P3 | Open |
| BUG-009 | Checkout | Expiry date accepts past dates — expired cards not rejected | High | P2 | Open |
| BUG-010 | Checkout | CVV field accepts letters and special characters — only 3 digits should be allowed | Medium | P3 | Open |
| BUG-011 | Checkout | Proceed to Checkout button unresponsive — checkout page unreachable via UI | Critical | P1 | Open |
| BUG-012 | Checkout | Form submits with all fields empty — no validation on submission | Critical | P1 | Open |
| BUG-013 | Checkout | Confirmation page does not display order reference number | High | P2 | Open |
| BUG-014 | General | Browser tab title shows "Untitled" on all pages | Low | P4 | Open |
| BUG-015 | General | Navbar visible on login page before user is authenticated | High | P2 | Open |

---

## Test Blockers

**BUG-011** blocks all checkout test scenarios. The Proceed to Checkout button does not respond to clicks. Workaround: use browser console to call `showPage('checkout')` directly. Any test case covering checkout must note this dependency.

---

## Resolved Bugs

None — Sprint 1 has not started.
