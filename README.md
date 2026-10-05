# Animated Login & Signup Form

A two-panel authentication interface built with plain HTML, CSS, and JavaScript. A sliding transition switches between login and signup while the invitation text updates to match the active form.

**Stack:** HTML5 · CSS3 · JavaScript

## Highlights

- Login and signup views within one shared layout.
- CSS transforms and opacity transitions driven by an `active` class.
- JavaScript updates the panel heading, description, and switch button.
- Required fields and browser-native email validation.
- Demonstration submit handlers that prevent navigation and show an alert.

## Run locally

Clone the repository and open `index.html` in a browser. There is no package installation or build step.

```sh
git clone https://github.com/itzhoman/AnimatedLogInForm.git
cd AnimatedLogInForm
```

Alternatively, serve the directory with your editor's static-server extension.

## Project structure

| Path | Responsibility |
| --- | --- |
| `index.html` | Two-panel markup and login/signup forms |
| `style.css` | Layout, gradients, button states, and sliding transitions |
| `script.js` | Form switching and demonstration submit handlers |

## Customize

- Change the headings and fields in `index.html`.
- Adjust the `.container`, `.left-panel`, and `.right-panel` styles in `style.css`.
- Replace the alert-based submit handlers in `script.js` when connecting an authentication API.

## Current scope

This is a frontend interaction demo. The success alerts do not authenticate users or create accounts. The container uses a fixed 800×500px design; responsive layout and accessible form labels are useful next steps.

## Try the interaction

1. Click **Sign Up**, then **Login**, and watch the text and form transition.
2. Submit empty fields to inspect browser validation, then use dummy values to see the demo alerts.

## Repository

[Source on GitHub](https://github.com/itzhoman/AnimatedLogInForm) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`9e8c956`](https://github.com/itzhoman/AnimatedLogInForm/commit/9e8c95648bce24108b3a72ee9089a3656c40d3e1).
