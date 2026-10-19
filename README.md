# Security & Risk Management — E-Portfolio

A unit-by-unit e-portfolio for the Security and Risk Management module,
built to match the theme and structure of the previous (Advanced OOP)
e-portfolio: same fonts, colours, card/section system, fixed sidebar
nav, dark mode toggle, and live sidebar search.

## Module

**Aims**
- Discuss the difference between qualitative and quantitative risk assessments.
- Describe how to carry out both kinds of assessments.
- Explain what is meant by, and how to create, threat models.
- Demonstrate how to create quantitative risk models.
- Discuss and design Disaster Recovery (DR) solutions.

**Objectives**
- Describe when to use qualitative and quantitative risk assessments.
- Create threat models for various scenarios.
- Create quantitative risk models.
- Design and explain DR strategies and solutions.

## Page structure

Every unit page (`units/unitNN.html`) follows the same model:

1. **Unit overview** — welcome text, "In this unit we shall…", "On completion of this unit you will be able to…" (from the module brief)
2. **Tasks Done**
3. **Reflection**
4. **Outcome**

Units 1–4 are pre-filled with the overview content from the module
brief. Units 5–12 currently contain placeholder text in square
brackets, e.g. `[Add this unit's welcome / overview text here.]` —
replace these as each unit's brief and your own work become available.
The "Tasks Done", "Reflection", and "Outcome" cards on every unit are
placeholders for you to fill in with your own work and reflections.

## Folder structure

```
srm-portfolio/
├── index.html                Home page
├── units/
│   ├── unit01.html … unit12.html
├── assets/
│   ├── css/
│   │   ├── styles.css        Base theme (shared with the OOP portfolio)
│   │   └── dark.css          Dark mode overrides
│   └── js/
│       ├── app.js            Theme toggle, persisted in localStorage
│       └── search.js         Filters the sidebar nav as you type
└── README.md
```

## Running it locally

No build step required — open `index.html` directly in a browser, or
serve the folder with a local server (e.g. VS Code's Live Server
extension, or `python3 -m http.server` from inside `srm-portfolio/`).

## Hosting on GitHub Pages

1. Push this folder's contents to a GitHub repository.
2. Settings → Pages → Source: `Deploy from a branch`, branch `main`,
   folder `/ (root)`.
3. Your site will be live at
   `https://<your-username>.github.io/<your-repo-name>/` within a
   minute or two.

## Updating a unit page

Each unit page is plain HTML using the same `<section class="section">`
/ `<div class="card">` pattern throughout — copy the pattern used in
`unit01.html` if you want to add more cards (e.g. code snippets, stat
grids, or diagrams) to a later unit, exactly as done in the previous
OOP portfolio's week pages.
