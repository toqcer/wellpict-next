import classNames from "classnames";

export type ColorVariantType =
  | "primary"
  | "secondary-1"
  | "secondary-2"
  | "success"
  | "warning"
  | "info"
  | "error";

export interface LabelProps {
  variant?: ColorVariantType;
  icons?: boolean;
  iconPosition?: "head" | "tail";
  children?: React.ReactNode;
  label: string | number;
}

export default function Label({ variant = "success", label }: LabelProps) {
  return (
    <div
      className={classNames(
        "min-w-[67px] px-3 py-1 rounded-2xl",
        `bg-success-50`
      )}
    >
      <span className="text-success-600">{label}</span>
    </div>
  );
}
