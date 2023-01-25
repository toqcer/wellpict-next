import React from "react";
import classNames from "classnames";
import { TypographyProps } from "./types";

export default function Typography({
  children,
  variant,
  weight,
  component,
  className,
}: TypographyProps & typeof defaultProps) {
  const Component = component;

  return (
    <Component
      className={classNames(
        "text-black",
        `text-${variant}`,
        `font-${weight}`,
        className
      )}
    >
      {children}
    </Component>
  );
}

const defaultProps = {
  variant: "p1",
  component: "p",
  weight: "regular",
};

Typography.defaultProps = defaultProps;
