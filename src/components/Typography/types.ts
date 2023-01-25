import React from "react";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p1"
  | "p2"
  | "p3"
  | "label1"
  | "label2"
  | "label3";

export type TypographyTag =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "pre"
  | "span";

export type TypographyWeight = "semibold" | "extrabold" | "bold" | "regular";

export interface TypographyProps {
  children: React.ReactNode;
  variant: TypographyVariant;
  component: TypographyTag;
  className?: string;
  weight: TypographyWeight;
}
