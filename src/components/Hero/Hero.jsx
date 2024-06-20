import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
// import pdfFile from "./ashish_resume.pfg";
export const Hero = () => {
  const texts = ["an Engineer", "a Programmer", "a Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 500); // Reduced delay
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 50); // Faster typing speed

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkTimeout = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(blinkTimeout);
  }, [blink]);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Ashish</h1>
        <div className={styles.typewriterContainer}>
          <span className={styles.typewriter}>I am</span>
          <span className={styles.dynamicText}>
            <p> </p>
             {` ${texts[index].substring(0, subIndex)}`}
            <span className={styles.cursor}>{blink ? "|" : " "}</span>
          </span>
        </div>
        <p className={styles.description}>
          I am a developer and a programmer in C++ who loves to learn new
          technologies and connect with others.
        </p>
        <a href="https://drive.google.com/file/d/1J6GBraGC7ldQlrkKWyGP6bOlhRJXbm2a/view?usp=sharing" download="ashish_resume.pdf" className={styles.contactBtn}>
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/portf.png")}
        alt="Hero-img"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
