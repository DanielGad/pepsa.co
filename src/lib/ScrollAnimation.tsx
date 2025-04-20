// utils/scrollAnimation.js
export const revealOnScroll = () => {
  const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .zoom-in, .flip-in, .blur-in, .rotate-in, .scale-up, .bounce-in, .slide-in-bottom, .drop-in');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // optional if you want repeat on scroll
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  revealElements.forEach((el) => observer.observe(el));
};
