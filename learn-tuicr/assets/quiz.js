document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  let answered = false;
  quiz.querySelectorAll("button[data-correct]").forEach((button) => {
    button.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const isCorrect = button.dataset.correct === "true";
      button.classList.add(isCorrect ? "correct" : "incorrect");
      if (!isCorrect) {
        quiz.querySelectorAll("button[data-correct='true']").forEach((correctButton) => {
          correctButton.classList.add("correct");
        });
      }
      quiz.querySelector(isCorrect ? ".quiz-feedback.correct" : ".quiz-feedback.incorrect").classList.add("show");
    });
  });
});
