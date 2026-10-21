/* Shared quiz component (same contract as the learn-* courses).
   Markup: <div data-quiz> with <button data-correct="true|false"> options and
   .quiz-feedback.correct / .quiz-feedback.incorrect messages. Feedback is immediate. */
document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  let answered = false;
  quiz.querySelectorAll("button[data-correct]").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const isCorrect = button.dataset.correct === "true";
      button.classList.add(isCorrect ? "correct" : "incorrect");
      if (!isCorrect) {
        quiz.querySelectorAll("button[data-correct='true']").forEach((b) => b.classList.add("correct"));
      }
      quiz.querySelector(isCorrect ? ".quiz-feedback.correct" : ".quiz-feedback.incorrect").classList.add("show");
    });
  });
});
