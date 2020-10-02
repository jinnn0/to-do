import gsap from 'gsap';

const todoListAnimation = () => {
  const tl = gsap.timeline();
  tl.to('.daily', { duration: 0.8, opacity: 1 });
  tl.to(
    '.todo-item',
    {
      duration: 1,
      ease: 'power4.out',
      y: 0,
      opacity: 1,
      stagger: { amount: 0.4 }
    },
    0.1
  );
};

export default todoListAnimation;
