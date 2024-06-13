"use client";
import { NextImage } from "@/components/NextImage/NextImage";
import React from "react";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";

export const FormImage = () => {
  const pathname = usePathname();

  const imageConfig = {
    src: "/contact-form.png",
    w: 506,
    h: 506,
    alt: "people drinking coffee",
    aspectRatio: "1/1",
  };

  if (pathname === ROUTES.contact) {
    imageConfig.src = "/contact-form2.svg";
    imageConfig.h = 345;
    imageConfig.w = 640;
    imageConfig.alt = "team meeting";
    imageConfig.aspectRatio = "auto";
  }

  return (
    <NextImage
      loading="lazy"
      src={imageConfig.src}
      w={imageConfig.w}
      h={imageConfig.h}
      alt={imageConfig.alt}
      style={{
        height: "auto",
        aspectRatio: imageConfig.aspectRatio,
      }}
    />
  );
};
