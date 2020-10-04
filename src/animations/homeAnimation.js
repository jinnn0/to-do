import gsap from 'gsap';

const homeAnimation = () => {
  const tl = gsap.timeline();

  tl.to('.animation-title', {
    duration: 0.8,
    ease: 'power4.out',
    y: 0,
    opacity: 1
  });
};

export default homeAnimation;
