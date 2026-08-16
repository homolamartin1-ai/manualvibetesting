# Section 4 — Understand the App (Step-by-Step)

**What you'll produce:** a **feature inventory** of TechShop — a written list of every
feature, user action, and the validations a good version should have. This is your
"requirements" when no spec exists, and it feeds every later section.

**Process step:** Requirements understanding · **Tool:** Claude (or any chatbot)

---

## Before you start
- The repo on your machine
- Claude (or ChatGPT) open
- The file `techshop/broken-app/index.html` and `techshop/broken-app/app.js`

---

## Step 1 — Look at the app yourself first (Clip 2)
1. Open `techshop/broken-app/index.html` in your browser (double-click it).
2. Click around: try to log in, browse products, add to cart, check out.
3. Note anything that feels off. Don't fix or report yet — just get familiar.

> Knowing what the app is *supposed* to do is what lets you judge the AI's output later.
> If you don't understand the app, you can't tell when the AI is wrong.

## Step 2 — Get the source in front of you (Clip 3)
1. Open `techshop/broken-app/index.html` in a text editor. Select all, copy.
2. Open `techshop/broken-app/app.js`. Select all, copy.

(You're going to hand both to the AI so it can describe the app back to you.)

## Step 3 — Generate the feature inventory (Clip 3)
In Claude, paste **Prompt 32**, then paste the two files where indicated:

```
Based on this HTML and JavaScript, describe all the features and
user interactions on this page. Also list any validations you would
expect a well-built version of this app to have.
[Paste index.html content]
[Paste app.js content]
```

The AI returns a structured breakdown: the features (login, catalog, cart, checkout), the
actions on each, and the validations that *should* exist (masked password, required
fields, correct totals, etc.).

## Step 4 — Save it
Save the AI's answer to a file — e.g. `feature-inventory.md` in your copy of the repo.
You'll refer back to it in Sections 5, 6, and 7. If you forked the repo, commit it.

## Step 5 — Compare with the official requirements
Open [`resources/techshop-sprint-requirements.md`](../../resources/techshop-sprint-requirements.md).
Compare it to your AI-generated inventory. Where do they differ? Those gaps are where bugs
often hide — note them.

---

## Common mistakes
- **Pasting only the HTML, not the JavaScript** → the AI misses cart math, validation
  logic, and checkout behaviour. Paste both files.
- **Treating the AI's inventory as gospel** → it's a strong first draft, not the truth.
  You reviewed the app in Step 1 so you can correct it.

## Done when
- [ ] You've clicked through TechShop yourself
- [ ] You ran Prompt 32 with both `index.html` and `app.js`
- [ ] You saved a `feature-inventory.md`
- [ ] You compared it to the sprint requirements and noted the gaps
