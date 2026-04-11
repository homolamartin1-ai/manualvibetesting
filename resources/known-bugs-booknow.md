# BookNow — Known Bugs (Broken App)
> Reference document for the Section 12 Capstone Project.
> All bugs are intentional and present in `demo-apps/booknow-broken/`.
> The fixed version (`demo-apps/booknow-fixed/`) resolves all of them.

---

## Summary Table

| Bug ID | Area | Title | Severity | Priority |
|--------|------|-------|----------|----------|
| BUG-001 | Login | Password field shows input as plaintext | High | Critical |
| BUG-002 | Login | Login succeeds with empty email and password | High | Critical |
| BUG-003 | Login | No error message shown on failed login | Medium | High |
| BUG-004 | Rooms | Discount calculated incorrectly (wrong formula) | High | Critical |
| BUG-005 | Rooms | Deluxe Room image is broken (bad URL) | Medium | High |
| BUG-006 | Rooms | Family Suite image missing alt text | Low | Medium |
| BUG-007 | Rooms | Family Suite description overflows card boundary | Low | Medium |
| BUG-008 | Rooms | Available badge displays in red (wrong CSS class) | Low | Medium |
| BUG-009 | Booking | Check-out date can be set before check-in date | High | High |
| BUG-010 | Booking | Guest count accepts zero and negative numbers | High | High |
| BUG-011 | Booking | Total price does not update when dates are changed | High | Critical |
| BUG-012 | Booking | Booking form submits with all fields empty | Critical | Critical |
| BUG-013 | Booking | Phone field accepts letters and special characters | High | High |
| BUG-014 | Booking | Email field accepts invalid format | High | High |
| BUG-015 | Confirm | No booking summary shown on confirmation page | Medium | High |
| BUG-016 | Confirm | No booking reference number generated | Medium | High |
| BUG-017 | General | Browser tab title shows "Untitled" | Low | Low |
| BUG-018 | General | Navbar visible on login page (not hidden) | Medium | High |
| BUG-019 | General | No auth guard — pages reachable without login | Critical | Critical |

---

## Detailed Bug Descriptions

---

### BUG-001 — Password field shows input as plaintext
**Area:** Login | **Severity:** High | **Priority:** Critical

**Description:**
The password input uses `type="text"` instead of `type="password"`. Every character typed is visible on screen. Anyone looking at the screen can read the password as it is entered.

**Root cause:** `type="text"` on the password `<input>` element
**Fix:** Change `type="text"` to `type="password"`

---

### BUG-002 — Login succeeds with empty email and password
**Area:** Login | **Severity:** High | **Priority:** Critical

**Description:**
Clicking "Sign In" with both fields completely blank navigates to the Rooms page. No client-side validation checks whether fields are filled before proceeding.

**Root cause:** `buggyLogin()` calls `showPage('rooms')` with no empty-field check
**Fix:** Validate that both email and password are non-empty before navigating

---

### BUG-003 — No error message shown on failed login
**Area:** Login | **Severity:** Medium | **Priority:** High

**Description:**
Entering wrong credentials produces no visible error. The `#login-error` element exists in the HTML but is never displayed. The user receives no feedback that their attempt failed.

**Root cause:** Error message display logic is missing from `buggyLogin()`
**Fix:** Show `#login-error` with an appropriate message when credentials are invalid or empty

---

### BUG-004 — Discount calculated incorrectly
**Area:** Rooms | **Severity:** High | **Priority:** Critical

**Description:**
Room discounts use the wrong formula. The code divides by `1000` instead of `100`, making discounts almost invisible. Example: Deluxe Room at $129 with 20% off shows $126.42 instead of the correct $103.20.

**Root cause:** `price * (1 - discountPct / 1000)` used instead of `price * (1 - discountPct / 100)`
**Fix:** Change divisor from `1000` to `100` in `calcDiscountedBuggy()`

---

### BUG-005 — Deluxe Room image is broken
**Area:** Rooms | **Severity:** Medium | **Priority:** High

**Description:**
The Deluxe Room card shows a broken image icon. The `src` attribute points to a deliberately invalid URL that returns a 404.

**Root cause:** Invalid image URL in the ROOMS data array for room id 1
**Fix:** Replace with a valid image URL

---

### BUG-006 — Family Suite image missing alt text
**Area:** Rooms | **Severity:** Low | **Priority:** Medium

**Description:**
The Family Suite image has an empty `alt=""` attribute — an accessibility violation. Screen readers cannot describe the image, and there is no fallback text if it fails to load.

**Root cause:** `imgAlt: ""` set intentionally in the ROOMS data for room id 3
**Fix:** Add a descriptive alt text string, e.g. `"Family Suite with ocean view"`

---

### BUG-007 — Family Suite description overflows card boundary
**Area:** Rooms | **Severity:** Low | **Priority:** Medium

**Description:**
The Family Suite has a very long description that breaks outside its card container, disrupting the room grid layout. Other cards are unaffected.

**Root cause:** `overflow-bug` CSS class applied to room id 3 — sets `white-space: nowrap` and removes line clamping
**Fix:** Remove the `overflow-bug` class; the base `.room-desc` CSS correctly clamps to 3 lines

---

### BUG-008 — Available badge displays in red
**Area:** Rooms | **Severity:** Low | **Priority:** Medium

**Description:**
All room cards show a red "Available" badge. Red conventionally signals unavailability or an error. The wrong CSS class `badge-unavailable` is applied instead of `badge-available`.

**Root cause:** `badge-unavailable` class used in `renderRooms()` for all rooms
**Fix:** Change to `badge-available` class which renders the badge in green

---

### BUG-009 — Check-out date can be set before check-in date
**Area:** Booking | **Severity:** High | **Priority:** High

**Description:**
The booking form allows a check-out date that is earlier than the check-in date. No comparison is performed. This results in a negative number of nights and an invalid booking.

**Root cause:** No date comparison logic in `buggyPlaceBooking()` or `buggyUpdateTotal()`
**Fix:** Validate that `checkoutDate > checkinDate` before submitting; show an error if not

---

### BUG-010 — Guest count accepts zero and negative numbers
**Area:** Booking | **Severity:** High | **Priority:** High

**Description:**
The number of guests field accepts `0`, `-1`, and any negative integer. No minimum value is enforced by JavaScript. A booking can be placed for zero guests.

**Root cause:** `min="1"` attribute present in HTML but not enforced in `buggyPlaceBooking()`
**Fix:** Validate that `guests >= 1` before allowing form submission

---

### BUG-011 — Total price does not update when dates are changed
**Area:** Booking | **Severity:** High | **Priority:** Critical

**Description:**
The booking summary always shows 1 night regardless of which dates are selected. The `buggyUpdateTotal()` function called by date change events has an empty body — it does nothing.

**Root cause:** `buggyUpdateTotal()` is intentionally empty; `_frozenNights` is never recalculated
**Fix:** Implement `updateTotal()` to calculate the difference in days between check-in and check-out and update the summary panel

---

### BUG-012 — Booking form submits with all fields empty
**Area:** Booking | **Severity:** Critical | **Priority:** Critical

**Description:**
Clicking "Book Now" with every field blank immediately shows the confirmation page. No validation of any kind is performed. This is the most severe functional bug in the app.

**Root cause:** `buggyPlaceBooking()` calls `showPage('confirm')` unconditionally with no validation logic
**Fix:** Implement full form validation before navigating to the confirmation page

---

### BUG-013 — Phone field accepts letters and special characters
**Area:** Booking | **Severity:** High | **Priority:** High

**Description:**
The phone number field accepts any characters — letters, symbols, spaces. There is no `pattern` attribute and no JavaScript regex check. Values like "abc" and "!!!" are accepted.

**Root cause:** `type="text"` with no pattern validation in `buggyPlaceBooking()`
**Fix:** Change to `type="tel"` and validate with `/^[0-9 +\-().]{7,}$/` before submitting

---

### BUG-014 — Email field accepts invalid format
**Area:** Booking | **Severity:** High | **Priority:** High

**Description:**
The email field uses `type="text"` and has no format validation. Strings like "notanemail", "abc@", and "@test" are accepted without error.

**Root cause:** `type="text"` used; no regex check in `buggyPlaceBooking()`
**Fix:** Add email format validation using `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` before submitting

---

### BUG-015 — No booking summary shown on confirmation page
**Area:** Confirm | **Severity:** Medium | **Priority:** High

**Description:**
After a booking is placed, the confirmation page shows only a generic success message. No room name, dates, guest name, nights, or total charge is displayed.

**Root cause:** No code populates `#confirm-summary` — `renderConfirmation()` does not exist in the broken app
**Fix:** Implement `renderConfirmation()` to populate the confirmation panel with booking details before showing the page

---

### BUG-016 — No booking reference number generated
**Area:** Confirm | **Severity:** Medium | **Priority:** High

**Description:**
The confirmation page contains no booking reference number. Users have no way to identify or reference their booking after the fact.

**Root cause:** Reference number generation logic is absent from the broken app
**Fix:** Generate a reference (e.g. `BKN-` + random 6-digit number) and display it on the confirmation page

---

### BUG-017 — Browser tab title shows "Untitled"
**Area:** General | **Severity:** Low | **Priority:** Low

**Description:**
The `<title>` element is set to `"Untitled"`. The browser tab, bookmarks, screen readers, and search results all show "Untitled" instead of the app name.

**Root cause:** `<title>Untitled</title>` in `index.html`
**Fix:** Change to `<title>BookNow — Hotel Room Booking</title>`

---

### BUG-018 — Navbar visible on login page
**Area:** General | **Severity:** Medium | **Priority:** High

**Description:**
The navbar containing the "BookNow" logo and "Rooms" link is fully visible and interactive on the login page. The `hidden` class is not applied on page load. This exposes navigation before authentication.

**Root cause:** `class="navbar"` used instead of `class="navbar hidden"` on the `<nav>` element
**Fix:** Add `hidden` class to the navbar in HTML; remove it only after successful login

---

### BUG-019 — Pages reachable without login (no auth guard)
**Area:** General | **Severity:** Critical | **Priority:** Critical

**Description:**
The `showPage()` function contains no authentication check. Any page — Rooms, Booking, Confirm — can be reached by calling `showPage('rooms')` in the browser console without ever logging in. Combined with BUG-018, a user can click "Rooms" in the navbar from the login page and bypass authentication entirely.

**Root cause:** No `isLoggedIn` check in `showPage()` in the broken app
**Fix:** Add an auth guard: `if (!isLoggedIn && name !== 'login') { showPage('login'); return; }`

---

## Bug Count by Area

| Area | Count |
|------|-------|
| Login | 3 |
| Rooms | 5 |
| Booking | 6 |
| Confirm | 2 |
| General | 3 |
| **Total** | **19** |

## Bug Count by Severity

| Severity | Count |
|----------|-------|
| Critical | 3 |
| High | 10 |
| Medium | 4 |
| Low | 3 |
