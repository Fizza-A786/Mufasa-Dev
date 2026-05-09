import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initProjectsAnimations = (sectionRef) => {
  return gsap.context(() => {
    gsap.from(".projects-heading", {
      scrollTrigger: {
        trigger: ".projects-heading",
        start: "top 85%",
      },
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".project-tile", {
      scrollTrigger: {
        trigger: ".project-tile",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      stagger: 0.18,
      duration: 0.9,
      ease: "power3.out",
    });

    gsap.from(".projects-btn", {
      scrollTrigger: {
        trigger: ".projects-btn",
        start: "top 90%",
      },
      opacity: 0,
      y: 20,
      duration: 0.6,
    });
  }, sectionRef);
};
