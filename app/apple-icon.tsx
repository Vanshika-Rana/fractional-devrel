import { ImageResponse } from "next/og";
import { fontsFor } from "@/lib/og-font";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const fonts = await fontsFor([800], "V");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f6f3ec",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 132,
            height: 132,
            background: "#ffe14a",
            border: "8px solid #1c1c1c",
            borderRadius: 34,
            boxShadow: "10px 10px 0 #1c1c1c",
            color: "#1c1c1c",
            fontFamily: "Geist",
            fontSize: 96,
            fontWeight: 800,
          }}
        >
          V
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
