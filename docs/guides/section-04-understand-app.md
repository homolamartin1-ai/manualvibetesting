# Section 4 — Understand the App (Step-by-Step)

**What you'll produce:** a **feature inventory** of TechShop — a written list of every
feature, every action a user can take, and the validations a good version should have.
This is your "requirements" when there's no spec, and you'll use it in Sections 5, 6, 7.

**Process step:** Requirements understanding · **Tool:** Claude (or ChatGPT)

> Do the steps in order. Don't skip Step 1 — you can't judge the AI's answer if you haven't
> seen the app yourself.

---

## Step 1 — Look at the app with your own eyes (video Clip 2)

1. On your Desktop, open the course folder → `techshop` → `broken-app`.
2. **Double-click `index.html`.** It opens in your web browser — this is TechShop.
3. Click around and try to actually use it:
   - Try to **log in** (type anything, press the button).
   - **Browse the products.**
   - **Add something to the cart.**
   - Try to **check out.**
4. Notice anything weird — a button that does nothing, a total that looks wrong, a password
   you can read. **Don't report it yet.** Just get a feel for the app.

**✅ Check:** you've clicked through all four areas (login, products, cart, checkout) in the
browser at least once.

---

## Step 2 — Copy the app's code to give to the AI (video Clip 3)

The AI can describe the app back to you if you show it the code. You'll copy two files.

1. Open the course folder → `techshop` → `broken-app`.
2. **Right-click `index.html` → Open With → your text editor.** Select all (Ctrl/Cmd+A),
   copy (Ctrl/Cmd+C). Keep it on your clipboard for the next step.
3. Do the same for **`app.js`** (this file holds the app's logic — cart math, validation).

> `index.html` is what the page looks like; `app.js` is how it behaves. You need **both**
> or the AI misses the cart and checkout logic.

---

## Step 3 — Generate the feature inventory (video Clip 3)

1. Open **Claude** (or ChatGPT). Click the message box.
2. Type the prompt below. Where it says `[Paste index.html]`, paste the HTML you copied;
   where it says `[Paste app.js]`, paste the JavaScript:

```
Based on this HTML and JavaScript, describe all the features and
user interactions on this page. Also list any validations you would
expect a well-built version of this app to have.

[Paste index.html]

[Paste app.js]
```

3. Press **Enter**.

**✅ Check:** the AI comes back with a structured list — the features (login, catalog,
cart, checkout), what a user can do in each, and the validations that *should* exist
(password hidden, required fields, correct totals, valid card number, etc.).

---

## Step 4 — Save the inventory

1. Copy the AI's whole answer.
2. Make a new file called **`feature-inventory.md`** in your course folder and paste it in
   (any text editor works; save it inside your copy of the repo).

You'll open this again in Sections 5, 6, and 7 — it's the foundation for everything.

---

## Step 5 — Compare with the official requirements

1. Open [`resources/techshop-sprint-requirements.md`](../../resources/techshop-sprint-requirements.md).
2. Read it next to your AI-generated inventory.
3. Where do they disagree, or where does the app not do what the requirements say? **Jot
   those differences down** — that's exactly where bugs tend to hide, and you'll test them
   later.

**✅ Check:** you have a saved `feature-inventory.md` and a short list of "the app should do
X but seems not to" notes.

---

## Common mistakes (read if you're stuck)
- **You pasted only the HTML, not `app.js`.** The AI then misses cart totals, validation,
  and checkout behaviour. Paste **both** files.
- **You didn't try the app first.** Then you can't tell if the AI's description is right. Do
  Step 1.
- **You treated the AI's list as 100% correct.** It's a strong first draft — you're the one
  who confirms it against the real app.

## Done when
- [ ] You clicked through TechShop yourself in the browser
- [ ] You ran the prompt with **both** `index.html` and `app.js`
- [ ] You saved `feature-inventory.md`
- [ ] You noted where the app and the requirements don't match
