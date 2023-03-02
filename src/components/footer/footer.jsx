import React from "react";
import SocialLink from "../social-link";
import styles from "./footer.module.css";

const socialLinks = ["twitter", "instagram"];

export default function Footer() {
  return (
    <div className={styles.container}>
      <span>All rights reserved</span>
      <div className={styles.socialContainer}>
        {socialLinks.map((link, index) => (
          <SocialLink lable={link} key={index} />
        ))}
      </div>
    </div>
  );
}
