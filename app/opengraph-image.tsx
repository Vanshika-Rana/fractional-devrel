import { ImageResponse } from "next/og";
import { fontsFor } from "@/lib/og-font";
import { SITE_URL } from "@/lib/site";

export const alt =
  "Vanshika Rana, fractional DevRel. Developers show up. I make sure they actually stick around.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const INK = "#1c1c1c";
const PAPER = "#f6f3ec";
const SURFACE = "#fffdf8";
const PINK = "#cf2a66";
const SUN = "#ffe14a";
const MUTED = "#3f3f3f";

const host = SITE_URL.replace(/^https?:\/\//, "");
const stats = [
  { value: "1000+", label: "developers" },
  { value: "4K+", label: "community" },
  { value: "4+ years", label: "in DevRel" },
];

export default async function OpenGraphImage() {
  const glyphs = `Vanshika Rana Fractional DevRel Developers show up. I make sure they actually stick around. Docs, demos, onboarding, and community for developer-tool teams. </>${host} ${stats
    .map((item) => `${item.value} ${item.label}`)
    .join(" ")} Let's talk`;
  const fonts = await fontsFor([700, 800], glyphs);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 44,
        background: PAPER,
        backgroundImage: `radial-gradient(rgba(28,28,28,0.16) 1.6px, transparent 1.7px)`,
        backgroundSize: "24px 24px",
        fontFamily: "Geist",
        color: INK,
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "44px 52px",
          background: SURFACE,
          border: `4px solid ${INK}`,
          borderRadius: 36,
          boxShadow: `12px 12px 0 ${INK}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "10px 26px",
              border: `3px solid ${INK}`,
              borderRadius: 999,
              background: SURFACE,
              boxShadow: `5px 5px 0 ${INK}`,
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            Vanshika Rana
          </div>
          <div
            style={{
              display: "flex",
              padding: "10px 26px",
              border: `3px solid ${INK}`,
              borderRadius: 999,
              background: PINK,
              boxShadow: `5px 5px 0 ${INK}`,
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
            }}
          >
            Fractional DevRel
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
            }}
          >
            Developers show up.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 4,
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: "-0.04em",
              color: PINK,
            }}
          >
            I make sure they actually stick around.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 22,
              fontSize: 30,
              fontWeight: 700,
              color: MUTED,
            }}
          >
            Docs, demos, onboarding, and community for developer-tool teams.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            {stats.map((item, index) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  marginRight: 14,
                  padding: "10px 18px",
                  border: `3px solid ${INK}`,
                  borderRadius: 18,
                  background: index === 0 ? SUN : SURFACE,
                  boxShadow: `4px 4px 0 ${INK}`,
                }}
              >
                <div style={{ display: "flex", fontSize: 30, fontWeight: 800 }}>
                  {item.value}
                </div>
                <div
                  style={{
                    display: "flex",
                    marginLeft: 8,
                    fontSize: 20,
                    fontWeight: 700,
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexShrink: 0,
              marginLeft: 20,
              fontSize: 30,
              fontWeight: 800,
              color: PINK,
              whiteSpace: "nowrap",
            }}
          >
            {host}
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: -30,
            right: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            border: `4px solid ${INK}`,
            borderRadius: 20,
            background: SUN,
            boxShadow: `5px 5px 0 ${INK}`,
            fontSize: 34,
            fontWeight: 800,
            transform: "rotate(8deg)",
          }}
        >
          {"</>"}
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
