import cx from "classnames";
import { useState } from "react";
import ChevronDown from "@/assets/svg/ChevronDown";

type optionsType = {
  value: any;
  label: string;
};

type classNamesAttr = {
  container: string;
  controller: string;
  optionContainer: string;
  optionItem: string;
  menuItemLabel: string;
  menuItem: string;
  menuContainer: string;
};

interface SelectProps {
  placeholder?: string;
  options: optionsType[];
  defaultValue?: optionsType;
  classNames?: Partial<classNamesAttr>;
}

export default function Select({
  options,
  placeholder = "Select",
  defaultValue,
  classNames,
}: SelectProps) {
  const [currentValue, setCurrentValue] = useState<optionsType | null>(
    defaultValue ?? null
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const controllerLabel = currentValue ? currentValue.label : placeholder;

  return (
    //   container
    <div className={cx("w-full ", classNames?.container)}>
      {/* controller */}
      <div
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className={cx(
          "p-2 flex border-gray-300 border-[1px] rounded-[4px] items-center"
        )}
      >
        <span className={cx("flex-1 select-none")}>{controllerLabel}</span>
        <div className="">
          <ChevronDown className={"text-gray-500"} />
        </div>
      </div>
      <div className={cx("relative visible", !menuOpen && "hidden invisible")}>
        <div
          className={cx(
            "absolute overflow-hidden w-full py-1 rounded-xl shadow-custom bg-white mt-1",
            classNames?.menuContainer
          )}
        >
          {options?.map((option) => (
            <div
              key={option.value}
              onClick={() => {
                setCurrentValue(option);
                setMenuOpen(false);
              }}
              className={cx(
                "p-[14px] hover:bg-primary-50 select-none",
                classNames?.menuItem,
                currentValue?.value === option.value && "bg-primary-50"
              )}
            >
              <span
                className={cx(
                  "text-label2 text-black",
                  classNames?.menuItemLabel
                )}
              >
                {option.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
