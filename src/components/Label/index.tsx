import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

export type ColorVariantType =
  | "primary"
  | "secondary-1"
  | "secondary-2"
  | "success"
  | "warning"
  | "info"
  | "error"
  | "gray";

export interface LabelProps {
  variant?: ColorVariantType;
  icon?: boolean;
  iconPosition?: "head" | "tail";
  children?: React.ReactNode;
  label: string | number;
}

export default function Label({
  variant = "success",
  label,
  icon,
}: LabelProps) {
  const _classNames = {
    label: {
      container: {
        primary: "bg-primary-50",
        "secondary-1": "bg-secondary-1-50",
        "secondary-2": "bg-secondary-2-50",
        success: "bg-success-50",
        warning: "bg-warning-50",
        info: "bg-info-50",
        error: "bg-error-50",
        gray: "bg-gray-50",
      },
      text: {
        primary: "text-primary-600",
        "secondary-1": "text-secondary-1-600",
        "secondary-2": "text-secondary-2-600",
        success: "text-success-600",
        warning: "text-warning-600",
        info: "text-info-600",
        error: "text-error-600",
        gray: "text-gray-600",
      },
    },
  };

  return (
    <div
      className={classNames(
        " px-3 py-1 rounded-2xl flex items-center",
        _classNames.label.container[variant],
        !icon && "justify-center"
      )}
    >
      <span
        className={classNames("text-label3", _classNames.label.text[variant])}
      >
        {label}
      </span>
    </div>
  );
}
