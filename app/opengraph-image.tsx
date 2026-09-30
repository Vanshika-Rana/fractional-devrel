import { ImageResponse } from "next/og";

export const alt = "Developers show up. I make sure they actually stick around.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f3ec",
          color: "#1c1c1c",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 28 }}>Vanshika Rana</div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 920,
          }}
        >
          Developers show up. I make sure they actually stick around.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#cf2a66" }}>
          devrel.van.codes
        </div>
      </div>
    ),
    { ...size },
  );
}
