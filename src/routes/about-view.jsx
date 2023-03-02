import React from "react";

export default function About() {
  return (
    <div>
      <h2>About us</h2>
      <p>We are great company with decent values</p>
      <h3>Our contacts:</h3>
      <address>
        <a style={{ display: "block" }} href="mailto:noname@digital.com">
          noname@digital.com
        </a>
        <a style={{ display: "block" }} href="tel:+13115552368">
          +380 (44) 333-2211
        </a>
      </address>
    </div>
  );
}
