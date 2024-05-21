document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    question.addEventListener('click', function() {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
        this.classList.remove('active');
      } else {
        answer.style.display = 'block';
        this.classList.add('active');
      }
    });
  });
});
