document.querySelectorAll('.quiz').forEach(quiz => {
  const options = quiz.querySelectorAll('.quiz-options li');
  const correctFeedback = quiz.querySelector('.quiz-feedback.correct');
  const incorrectFeedback = quiz.querySelector('.quiz-feedback.incorrect');
  let answered = false;

  options.forEach(option => {
    option.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      const correct = option.dataset.correct === 'true';
      option.classList.add(correct ? 'correct' : 'incorrect');
      options.forEach(candidate => {
        if (candidate.dataset.correct === 'true') candidate.classList.add('correct');
      });
      (correct ? correctFeedback : incorrectFeedback).classList.add('show');
    });
  });
});
