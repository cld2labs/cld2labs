import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Innovative Technologies",
          "Quality Assurance",
          "Competitive Pricing",
          "Future-Ready Services",
          "Customer Satisfaction",
          "Comprehensive Platform"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
