import React from "react";
import { BackNavbar } from "../Navigation/BackNavbar";
import styles from "./Privacy.module.css";

export const Privacy: React.FC = () => {
  return (
    <>
      <BackNavbar />

      <div className="min-h-screen bg-gray-900 pt-20">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Privacy Policy</h1>
          <div className="prose prose-invert">
            <p className="text-gray-300 mb-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-gray-300 mb-4">
              Your privacy is important to us. This Privacy Policy outlines how
              we collect, use, and protect your personal information when you
              use our website and services.
            </p>
            <h2 className="text-xl font-bold mt-6 mb-4 text-white">
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We collect information that you voluntarily provide to us when you
              subscribe to our newsletter, fill out contact forms, or interact
              with our website.
            </p>
            <h2 className="text-xl font-bold mt-6 mb-4 text-white">
              How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to:
              <ul className={styles.ul}>
                <li className={styles.listItem}>
                  Provide and maintain our services.
                </li>
                <li className={styles.listItem}>
                  Send you newsletters and updates (if subscribed).
                </li>
                <li className={styles.listItem}>
                  Respond to your inquiries and requests.
                </li>
                <li className={styles.listItem}>
                  Improve our website and services
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
