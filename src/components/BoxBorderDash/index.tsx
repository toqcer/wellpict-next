import classNames from "classnames";
import { BoxBorderDashProps } from "./types";

export default function BoxBorderDash({
  dashColor = "#99C5C9",
  strokeWidth = 1,
  dashWidth = 12,
  radius = 0,
  className,
  children,
}: BoxBorderDashProps) {
  return (
    <div
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='${radius}' ry='${radius}' stroke='${dashColor.replace(
          "#",
          "%23"
        )}' stroke-width='${strokeWidth}' stroke-dasharray='${dashWidth}' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`,
      }}
      {...{ className }}
    >
      {children}
    </div>
  );
}
