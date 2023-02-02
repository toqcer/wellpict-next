import { memo, SVGProps } from "react";

function CrossIcon({
  color,
  width = 12,
  height = 12,
  strokeWidth = 1.677,
  ...other
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...{ width, height }}
      {...other}
    >
      <path
        d="M11 1L1 11M1 1L11 11"
        stroke={color}
        stroke-width={strokeWidth}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default memo(CrossIcon);
