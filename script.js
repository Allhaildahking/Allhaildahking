const guide = document.querySelector("#guide");
const guideToggle = document.querySelector("#guide-toggle");
const guideClose = document.querySelector("#guide-close");
const guidePanel = document.querySelector("#guide-panel");
const guideAnswer = document.querySelector("#guide-answer");
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

const guideAnswers = {
  working: "Destiny is developing M.A.R.S., rebuilding the Thesis brand, and exploring other ideas. The projects shown here are at different stages, so the site labels that honestly rather than presenting everything as finished.",
  mars: "M.A.R.S. is a personal build focused on bringing useful capabilities together over time. It is still being developed, so this portfolio will share more as the interface and underlying features become ready.",
  approach: "The aim is to make things feel considered and work clearly. That means starting with the actual problem, keeping the interface intentional, and writing code that is understandable instead of adding complexity for its own sake.",
  availability: "Destiny is open to thoughtful conversations about projects and collaborations. The best starting point for now is his GitHub profile, linked in the contact section."
};

document.querySelectorAll("[data-question]").forEach((button) => {
  button.addEventListener("click", () => {
    guideAnswer.textContent = guideAnswers[button.dataset.question];
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !guidePanel.hidden) setGuideOpen(false);
});
