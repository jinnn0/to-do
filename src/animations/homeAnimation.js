import gsap from "gsap";

const homeAnimation = () => {
  const tl = gsap.timeline();

  tl.to(".home-main", {
    duration: 0.8,
    ease: "back.out",
    opacity: 1,
    y: -50
  });
};

export default homeAnimation;
