// Loads Geist for the generated share image and icons.
// ImageResponse only ships a regular-weight font, so bold text needs a real font file.
// If the download fails, callers fall back to the default font and the build still succeeds.

type OgFont = {
  name: string;
  data: ArrayBuffer;
  weight: 700 | 800;
  style: "normal";
};

const cache = new Map<string, Promise<OgFont | null>>();

export function loadGeist(
  weight: 700 | 800,
  text: string,
): Promise<OgFont | null> {
  const key = `${weight}:${text}`;
  const hit = cache.get(key);
  if (hit) return hit;

  const job = (async () => {
    try {
      const css = await (
        await fetch(
          `https://fonts.googleapis.com/css2?family=Geist:wght@${weight}&text=${encodeURIComponent(text)}`,
        )
      ).text();
      const src = css.match(
        /src: url\((.+?)\) format\('(opentype|truetype)'\)/,
      );
      if (!src) return null;
      const response = await fetch(src[1]);
      if (!response.ok) return null;
      return {
        name: "Geist",
        data: await response.arrayBuffer(),
        weight,
        style: "normal" as const,
      };
    } catch {
      return null;
    }
  })();

  cache.set(key, job);
  return job;
}

export async function fontsFor(weights: Array<700 | 800>, text: string) {
  const loaded = await Promise.all(
    weights.map((weight) => loadGeist(weight, text)),
  );
  return loaded.filter((font): font is OgFont => font !== null);
}
