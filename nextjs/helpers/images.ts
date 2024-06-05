import { StaticImport } from "next/dist/shared/lib/get-img-props";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : process.env.APP_URL ?? "https://minfcommerce.vercel.app";

const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);

export async function dynamicBlurDataUrl(url: string | StaticImport) {
  const base64str = await fetch(`${baseUrl}/_next/image?url=${url}&w=16&q=55`).then(async (res) =>
    Buffer.from(await res.arrayBuffer()).toString("base64"),
  );

  const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='1' />
      </filter>

      <image preserveAspectRatio='none' filter='url(#b)' x='0' y='0' height='100%' width='100%' 
      href='data:image/avif;base64,${base64str}' />
    </svg>
  `;

  return `data:image/svg+xml;base64,${toBase64(blurSvg)}`;
}

const staticShimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<filter id='b' color-interpolation-filters='sRGB'>
    <feGaussianBlur stdDeviation="10" />
  </filter>
  <defs>
    <linearGradient id="g">
      <stop stop-color="#eee" offset="0%" />
      <stop stop-color="#ccc" offset="50%" />
      <stop stop-color="#eee" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#ddd" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite" />
</svg>`;

export const staticBlurDataUrl = (w: number, h: number) => `${toBase64(staticShimmer(w, h))}`;
