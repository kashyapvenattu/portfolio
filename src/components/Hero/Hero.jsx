import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi...
          <br />
          I'm Kashyap Venattu <div></div>
        </h1>

        {/* <p className={styles.description}></p> */}
        <ul className={styles.description}>
          <li>
            10+ years of Performance, Chaos & Resiliency Engineering, consulting
            for multiple clients at global locations (Canada, US, India,
            Australia, Germany, South Korea, Japan)
          </li>
          <li>
            3+ years of experience working closely with DevOps, integrating
            Performance/Automation frameworks and test processes into CI/CD
            pipelines using Jenkins, Docker, Kubernetes, Helm on Could (AWS &
            Azure)
          </li>
          <li>Experience in Full Stack Development</li>
          <li>
            Bachelor of Technology in Computer Science & Engineering [4 years]
          </li>
        </ul>
        <a href="mailto:kashyapvenattu@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
