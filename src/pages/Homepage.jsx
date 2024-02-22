import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa"
import Navbar from "../components/Navbar"
import { useRef } from "react";
// import ParticlesWrapper from "./components/ParticlesWrapper";

// import { gsap } from "gsap";

import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {

  const container = useRef();

  // let tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".section",
  //     pin: true,
  //     start: "top top",
  //     end: "+=500",
  //     scrub: 1,
  //     snap: {
  //       snapTo: "labels",
  //       duration: { min: 0.2, max: 3 },
  //       delay: 0.2,
  //       ease: "power1.inOut"
  //     }
  //   }
  // })

  useGSAP(() => { 
    let panels = gsap.utils.toArray(".section");

    let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));
    
    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
        pin: true, 
        pinSpacing: false 
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
              snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
          return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
        },
        duration: 0.5
      }
    });

  }, { scope: container });


  return (
    <div className="container">
    <Navbar />
    <main className="main" ref={container}>
      <section className="section hero">
        <section className="hero__bg">{/* <ParticlesWrapper /> */}</section>
        <section className="hero__content">
          <h1 className="heading">thompson</h1>
          {/* <h1 className="heading">ovie</h1> */}
          <span className="decor"></span>
          <p className="greeting">I am</p>
          <p className="title">a frontend <span>developer</span></p>
        </section>
        <section className="socials">
          <ul>
            <li>
            <FaLinkedinIn />
            </li>
            <li>
            <FaGithubAlt />
            </li>
          </ul>
        </section>
      </section>
      
      <section className="section about" id="about">
        <h1>get to know me</h1>
        <h2>About me</h2>
        <section>
          <img src="" alt="" />
        </section>
        <section>
          <h1>who am I?</h1>
          <h2>I am a fullstack web developer </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam aliquid quae, totam minus id voluptatibus ullam voluptates ut, numquam error iusto dolores. Labore porro nostrum, ad esse consectetur numquam.
          </p>

        </section>
      </section>
      <section className="section projects" id="projects">
        <h1>Projects</h1>
      </section>
      <section className="section contact" id="contact">
        <h1>Contact</h1>
      </section>
    </main>
    <footer className="footer"></footer>
    {/* <Particles 
      id="tsparticles" 
      init={particlesInit} 
      loaded={particlesLoaded} 
      options={{ 
        background: { 
          color: "rgb(10,10,25)", 
        }, 
        fpsLimit: 60, 
        particles: { 
          shape: { 
            type: "circle", 
          }, 
          size: { 
            random: { 
              enable: true, 
              minimumValue: 0.5, 
            }, 
            value: 1.4, 
          }, 
          color: { 
            value: "#f1f1f1", 
          }, 
          number: { 
            density: { 
              enable: true, 
              area: 1080, 
            }, 
            limit: 0, 
            value: 800, 
          }, 
          opacity: { 
            animation: { 
              enable: true, 
              minimumValue: 0.5, 
              speed: 1.6, 
              sync: false, 
            }, 
            random: { 
              enable: true, 
              minimumValue: 0.1, 
            }, 
            value: 1, 
          }, 
          interactivity: { 
            detectsOn: "canvas", 
            events: { 
              resize: true, 
            }, 
          }, 
        }, 
      }} 
    />  */}
  </div>
  )
}

export default Homepage
