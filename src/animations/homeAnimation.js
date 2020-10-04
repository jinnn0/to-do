import gsap from 'gsap';

const homeAnimation = () => {
  const tl = gsap.timeline();

  tl.to('.initial-message', {
    duration: 0.8,
    ease: 'power4.out',
    y: 0,
    opacity: 1
  }).to('.point-up-icon', {
    duration: 0.5,
    opacity: 1,
    delay: -0.5
  });
};

export default homeAnimation;
