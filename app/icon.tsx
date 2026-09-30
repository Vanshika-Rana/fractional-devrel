import { ImageResponse } from "next/og";
import { fontsFor } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
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
          background: "#ffe14a",
          border: "2px solid #1c1c1c",
          borderRadius: 9,
          color: "#1c1c1c",
          fontFamily: "Geist",
          fontSize: 22,
          fontWeight: 800,
        }}
      >
        V
      </div>
    ),
    { ...size, fonts },
  );
}
