import React from "react";
import { resumeSection } from "../../portfolio";

const Resume = () => {
  if (!resumeSection.display) return null;

  return (
    <section id="resume" style={{ textAlign: "center", padding: "40px 0" }}>
      <h2>{resumeSection.title}</h2>
      <p>{resumeSection.subtitle}</p>
      {resumeSection.resumeLink && (
        <a
          href={resumeSection.resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button
            style={{
              padding: "10px 24px",
              fontSize: "16px",
              borderRadius: "6px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer"
            }}
          >
            Download Resume
          </button>
        </a>
      )}
    </section>
  );
};

export default Resume;