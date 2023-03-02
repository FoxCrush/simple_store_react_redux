import React from "react";
import styles from "./social-link.module.css";

export default function SocialLink({ lable }) {
  return <button className={styles.socialLinkButton}>{lable}</button>;
}
