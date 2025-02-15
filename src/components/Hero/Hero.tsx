import React from "react";
import { Link } from "react-router-dom";

import background from "/src/assets/background.jpg";
import styles from "./Hero.module.css";

export const Hero: React.FC = () => {
  return (
    <section className={styles.heroSection}>
      <div
        className={styles.backgroundImage}
        style={{ "--bg-image": `url(${background})` } as React.CSSProperties}
      />
      <div className={styles.overlay} />

      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              INSPIRING LEADERSHIP{" "}
              <span className="inline-block w-full">BEYOND THE TITLE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              THOUGHT LEADER & SPEAKER
            </p>
            <Link
              to="/booking"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors inline-block"
            >
              SECURE AN IMPACTFUL TALK
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
