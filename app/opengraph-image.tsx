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

const host = SITE_URL.replace(/^https?:\/\//, "");

export default async function OpenGraphImage() {
  const glyphs = `Vanshika Rana, fractional DevRel Developers show up. I make sure they actually stick around. ${host} Let's talk`;
  const fonts = await fontsFor([700, 800], glyphs);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        padding: 52,
        background: PAPER,
        fontFamily: "Geist",
        color: INK,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "64px 72px",
          background: SURFACE,
          border: `4px solid ${INK}`,
          borderRadius: 36,
          boxShadow: `12px 12px 0 ${INK}`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              width: 22,
              height: 22,
              marginRight: 16,
              border: `3px solid ${INK}`,
              borderRadius: 999,
              background: SUN,
            }}
          />
          <div style={{ display: "flex", fontSize: 30, fontWeight: 700 }}>
            Vanshika Rana, fractional DevRel
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
            }}
          >
            Developers show up.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 4,
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              color: PINK,
            }}
          >
            I make sure they
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.14,
              letterSpacing: "-0.03em",
              color: PINK,
            }}
          >
            actually stick around.
          </div>
        </div>

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
              padding: "14px 34px",
              border: `3px solid ${INK}`,
              borderRadius: 999,
              background: SUN,
              boxShadow: `5px 5px 0 ${INK}`,
              fontSize: 32,
              fontWeight: 800,
            }}
          >
            {"Let's talk"}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              fontWeight: 800,
              color: PINK,
            }}
          >
            {host}
          </div>
        </div>
      </div>
    </div>,
    { ...size, fonts },
  );
}
