# ALLHAILDAHKING Portfolio

## Direction

A personal portfolio for an independent creative builder working across web development, visual design, and AI experiments. It should feel art-directed and made by a person, not generated from a familiar portfolio template.

## Design principles

- Editorial composition, purposeful asymmetry, and strong typography.
- Charcoal and warm white as the foundation. Acid green is a restrained accent; signal red is used rarely.
- Real project evidence over decorative mockups or invented metrics.
- Motion should clarify interaction, never exist just to make the page feel expensive.
- Mobile is designed intentionally, not treated as a compressed desktop layout.
- Code stays readable, direct, testable, and easy for the owner to explain. Avoid needless abstractions and dependencies.

## Homepage structure

1. **Opening statement**: “I build things that should exist.” Short supporting line: “Web developer. Designer. AI builder. Founder in progress.”
2. **Selected work**: M.A.R.S., Thesis, Trade-Oracle, and other projects only when their current state can be represented honestly.
3. **The lab**: experiments and works in progress, clearly labelled.
4. **About**: the person, working approach, skills, and current interests.
5. **Contact**: clear paths for client work, jobs, and collaboration.

## Signature feature: The Builder's Guide

An edge-mounted tab opens a compact conversational panel. It speaks as an independent guide, never pretending to be the portfolio owner.

### Behaviour

- The tab stays subtle and never covers key content by default.
- Suggested questions change with the page or project being viewed.
- Visitors can ask free-form questions and follow up naturally.
- Answers are grounded in an approved profile and project knowledge base.
- It must say when it does not know something instead of guessing.
- It must distinguish shipped work, prototypes, and ideas in progress.
- A protected server endpoint handles model requests; secret keys never go into browser code.
- Provide useful suggested prompts when the model is unavailable.

### Initial suggested questions

- What is Allhaildahking working on?
- What is M.A.R.S.?
- What kind of projects can he build?
- How does he approach design?
- Is he available for work?

## Implementation sequence

1. Review and approve the visual system and page layout.
2. Build the responsive static interface with realistic content.
3. Add project detail pages and real links.
4. Implement the Builder's Guide using structured, editable profile data.
5. Add tests, accessibility checks, and responsive QA.
6. Deploy only after the project builds cleanly.

## Non-negotiables

- No fake testimonials, client logos, metrics, or experience.
- No generic “AI-powered” claims without working functionality.
- No excessive animation, gradients, glow effects, or decorative code snippets.
- No unexplained abstractions or dependencies added without a clear reason.
