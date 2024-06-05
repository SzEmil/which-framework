import { dynamicBlurDataUrl, staticBlurDataUrl } from "@/helpers/images";
import Image from "next/image";
import { ImageProps } from "next/image";

import { use } from "react";

type NextImageProps = {
  blurVariant?: "static" | "dynamic" | "none";
  w: number;
  h: number;
} & ImageProps;

export const NextImage = ({ w, h, src, alt, blurVariant = "static", ...rest }: NextImageProps) => {
  const blurURL = blurVariant === "static" || "none" ? "" : use(dynamicBlurDataUrl(src));

  return (
    <Image
      width={w}
      height={h}
      loading="lazy"
      src={src}
      alt={alt ?? ""}
      {...rest}
      placeholder={
        blurVariant === "none"
          ? "empty"
          : "static"
          ? `data:image/svg+xml;base64,${staticBlurDataUrl(w, h)}`
          : "blur"
      }
      blurDataURL={blurVariant === "static" || "none" ? undefined : blurURL}
    />
  );
};

