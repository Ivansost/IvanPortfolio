import { ImageResponse } from "next/og";

export const alt = "Ivan Sostaric computer science portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#030303",
          color: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px",
          width: "100%",
        }}
      >
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.28)",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "22px",
          }}
        >
          <span style={{ fontSize: 28, letterSpacing: "-0.04em" }}>
            Ivan Sostaric
          </span>
          <span style={{ color: "#b8b8b8", fontSize: 22 }}>
            Computer Science Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              letterSpacing: "-0.075em",
              lineHeight: 0.92,
              maxWidth: 900,
            }}
          >
            Software, data, and AI systems.
          </div>
          <div style={{ color: "#cfcfcf", fontSize: 30, maxWidth: 840 }}>
            University of Guelph computer science student focused on full-stack
            engineering, analytics, and machine learning.
          </div>
        </div>

        <div
          style={{
            borderBottom: "1px solid rgba(255,255,255,0.28)",
            color: "#a3a3a3",
            fontSize: 20,
            paddingBottom: "22px",
          }}
        >
          Selected experience and project case studies
        </div>
      </div>
    ),
    size
  );
}
