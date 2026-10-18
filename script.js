const guide = document.querySelector("#guide");
const guideToggle = document.querySelector("#guide-toggle");
const guideClose = document.querySelector("#guide-close");
const guidePanel = document.querySelector("#guide-panel");
const guideAnswer = document.querySelector("#guide-answer");
const guideQuestions = document.querySelector(".guide-questions");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

function setGuideOpen(isOpen) {
  guide.classList.toggle("is-open", isOpen);
  guidePanel.hidden = !isOpen;
  guideToggle.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) guideClose.focus();
  else guideToggle.focus();
}

guideToggle.addEventListener("click", () => {
  setGuideOpen(guidePanel.hidden);
});

guideClose.addEventListener("click", () => setGuideOpen(false));

const answers = {
  working: "Destiny is developing M.A.R.S., rebuilding the Thesis brand, and exploring Trade-Oracle. The projects are at different stages, and the portfolio labels that honestly rather than presenting everything as finished.",
  mars: "M.A.R.S. is a personal assistant project focused on bringing useful capabilities and workflows together over time. It is still being developed, so more details will appear as the interface and features become ready.",
  thesis: "Thesis is Destiny's future-facing creative studio. Its focus is helping brands make sense through strategy, visual identity, and digital experiences. The studio is still being built.",
  trade: "Trade-Oracle is a trading analysis project built around structured setups and risk controls. It is a research tool, not an automated trader with access to anyone's funds.",
  approach: "The approach is to start with the actual problem, make the interface intentional, and keep the code understandable. Complexity is useful only when it earns its place.",
  availability: "Destiny is open to thoughtful conversations about projects and collaboration. GitHub is currently the clearest public contact route on this portfolio.",
  background: "Destiny, known online as Allhaildahking, works across development, design, and early-stage product ideas. He is still learning and building, and prefers to show honest progress over inflated claims.",
  collaboration: "A useful collaboration starts with a real problem, clear expectations, and room to make something better. Reach out through the GitHub profile linked on this page.",
  contact: "The contact section links to Destiny's GitHub profile for now. A dedicated email address can be added once one is chosen for the portfolio."
};

const questionSets = {
  top: [
    ["working", "What is Allhaildahking working on?"],
    ["approach", "How does he approach building?"],
    ["availability", "Is he open to projects?"]
  ],
  work: [
    ["mars", "What is M.A.R.S.?"],
    ["thesis", "What's Thesis about?"],
    ["trade", "What is Trade-Oracle?"],
    ["working", "What's still in progress?"]
  ],
  about: [
    ["background", "Who is Allhaildahking?"],
    ["approach", "How does he approach design?"],
    ["collaboration", "What makes a good collaboration?"]
  ],
  contact: [
    ["availability", "Is he open to projects?"],
    ["collaboration", "What kind of work fits?"],
    ["contact", "How can I get in touch?"]
  ]
};

function showAnswer(key) {
  guideAnswer.textContent = answers[key] || "I don't have a reliable answer for that yet.";
}

function renderQuestions(sectionName) {
  const questions = questionSets[sectionName] || questionSets.top;
  guideQuestions.replaceChildren();

  questions.forEach(([key, label]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.question = key;
    button.textContent = label;
    button.addEventListener("click", () => showAnswer(key));
    guideQuestions.append(button);
  });
}

renderQuestions("top");

const sections = ["top", "work", "about", "contact"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const visibleSection = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visibleSection) {
      renderQuestions(visibleSection.target.id);
    }
  }, {
    rootMargin: "-28% 0px -52% 0px",
    threshold: [0, 0.2, 0.5]
  });

  sections.forEach((section) => observer.observe(section));
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !guidePanel.hidden) setGuideOpen(false);
});
