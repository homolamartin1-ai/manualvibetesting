# Bug Report Templates — TechShop Demo App
> Course resource for: Vibetesting in 2026 — Manual Testing with AI Tools

---

## BLANK TEMPLATE

**Bug ID:** BUG-XXX
**Title:** [Short, specific description — e.g. "Cart total not updated after removing item"]
**Reported By:** [Your name]
**Date:** [YYYY-MM-DD]
**Application:** TechShop
**Version/Build:** Broken App v1.0

**Environment:**
- OS: [e.g. macOS 15.0 / Windows 11]
- Browser: [e.g. Chrome 124.0]
- Device: [e.g. MacBook Pro, Desktop]

**Severity:** [ ] Critical  [ ] High  [ ] Medium  [ ] Low
**Priority:** [ ] Critical  [ ] High  [ ] Medium  [ ] Low

**Steps to Reproduce:**
1. 
2. 
3. 

**Expected Result:**
[What should happen]

**Actual Result:**
[What actually happens]

**Attachments:**
- [ ] Screenshot
- [ ] Screen recording
- [ ] Browser console log

**Notes / Additional Context:**
[Any extra information — frequency of occurrence, workaround, related bugs]

---

## SAMPLE BUG REPORT 1

**Bug ID:** BUG-001
**Title:** Cart total not recalculated after removing an item
**Reported By:** Course Student
**Date:** 2026-04-03
**Application:** TechShop
**Version/Build:** Broken App v1.0

**Environment:**
- OS: macOS 15.2
- Browser: Chrome 124.0.6367.82
- Device: MacBook Pro (M3)

**Severity:** High
**Priority:** High

**Steps to Reproduce:**
1. Open the broken TechShop app in Chrome (broken-app/index.html)
2. Log in with any credentials
3. Add "USB-C Hub" (qty: 1) to the cart — price $34.99 after discount
4. Add "HD Webcam 1080p" (qty: 1) to the cart — price ~$59.99 after discount
5. Navigate to the Cart page
6. Note the displayed total (e.g. $94.97)
7. Click "Remove" on the "USB-C Hub" row

**Expected Result:**
Cart total updates to reflect only the remaining item ($59.99 for the Webcam). The removed item's price is subtracted from the total.

**Actual Result:**
The "USB-C Hub" row disappears from the cart table, but the total displayed ($94.97) does not change. The total still includes the price of the removed item, showing an incorrect amount.

**Attachments:**
- Screenshot: cart-total-bug.png (shows stale total after removal)

**Notes:**
The bug appears to be in the `removeFromCart()` function, which removes the item from the array but does not update the total display element. Reproduced 5/5 times.

*AI-assisted description (Claude prompt used): "Here are my testing notes about a cart bug. Write a professional bug report: [notes pasted]"*

---

## SAMPLE BUG REPORT 2

**Bug ID:** BUG-002
**Title:** Password field displays input as plaintext instead of masking characters
**Reported By:** Course Student
**Date:** 2026-04-03
**Application:** TechShop
**Version/Build:** Broken App v1.0

**Environment:**
- OS: Windows 11
- Browser: Chrome 124.0.6367.82
- Device: Desktop PC

**Severity:** High
**Priority:** Critical

**Steps to Reproduce:**
1. Open the broken TechShop app (broken-app/index.html)
2. Navigate to the Login page (default landing page)
3. Click on the "Password" input field
4. Type any text (e.g. "mypassword123")

**Expected Result:**
Characters are masked as dots or asterisks (••••••••••••) as is standard for password fields. The input value is not visually readable.

**Actual Result:**
All typed characters appear as plaintext (e.g. "mypassword123" is fully visible on screen). Anyone looking at the screen — or a screenshot — can see the full password.

**Attachments:**
- Screenshot: password-plaintext.png

**Notes:**
Root cause: the password `<input>` element uses `type="text"` instead of `type="password"`. This is a security and privacy defect. Severity is High (data exposure risk). Priority is Critical because it affects every user's login session.

*AI-assisted severity assessment prompt used: "Is showing a password as plaintext a High or Critical severity bug? What is the business impact?"*

---

## SAMPLE BUG REPORT 3

**Bug ID:** BUG-003
**Title:** Checkout form submits successfully with all required fields empty
**Reported By:** Course Student
**Date:** 2026-04-03
**Application:** TechShop
**Version/Build:** Broken App v1.0

**Environment:**
- OS: macOS 15.2
- Browser: Firefox 125.0.1
- Device: MacBook Air (M2)

**Severity:** Critical
**Priority:** Critical

**Steps to Reproduce:**
1. Open broken TechShop app (broken-app/index.html)
2. Log in and add at least one item to the cart
3. Navigate to the Checkout page (via direct URL or after adding items)
4. Leave ALL form fields blank: First Name, Last Name, Address, City, Email, Phone, Card Number, Expiry, CVV
5. Click "Place Order"

**Expected Result:**
Form submission is blocked. Validation errors are shown for all required fields (First Name, Address, Email, Phone). The order is NOT placed until all required fields contain valid data.

**Actual Result:**
The form submits immediately with no validation. The success message "Order placed! Thank you." is displayed even though no customer information was provided. No order summary is shown.

**Attachments:**
- Screenshot: empty-checkout-success.png (success message with all blank fields)
- Screen recording: checkout-no-validation.mp4

**Notes:**
This is a Critical defect in a production context — it would allow orders to be placed with no shipping address, no contact info, and no payment details. Reproduced 5/5 times across Chrome, Firefox, and Safari.

*AI-assisted priority assessment: "A checkout form that accepts empty fields in an e-commerce app — what severity and priority is this?"*
