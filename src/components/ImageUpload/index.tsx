import Image from "next/image";

import Select from "../Select";
import BoxBorderDash from "../BoxBorderDash";
import ImageLogo from "@/assets/images/logo-picture.png";
import CrossIcon from "@/assets/svg/CrossIcon";
import { ImageUploadProps } from "./types";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function ImageUpload({ images }: ImageUploadProps) {
  const renderContentBase = (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-10">
        <Image src={ImageLogo} alt={"pict"} />
      </div>
      <div className="text-center">
        <p className="text-h2 text-primary-600 font-semibold">
          Click to upload <span className="text-black">or drag and drop</span>
        </p>
        <p className="mt-1 text-label1">JPG, PNG, SVG, or GIF are allowed</p>
      </div>
    </div>
  );

  const renderContentPreview = (
    <div className={"w-full"}>
      <div className="p-4 rounded-xl border-primary-500 flex w-full border-[1px] ">
        <div className="flex w-full gap-8 items-center">
          <div className="h-14 w-14">
            <Image src={ImageLogo} alt={"pict"} />
          </div>
          <div>
            <span className="text-label1 font-bold text-primary-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              quo laudantium culpa.jpg
            </span>
            <div>
              <span className="text-label2 font-semibold text-gray-500 mt-2">
                5MB JPG
              </span>
            </div>
          </div>
        </div>
        <CrossIcon className={"cursor-pointer"} color="#000000" />
      </div>
      <p className="px-4 text-gray-500 mt-2 text-label3">Upload another one?</p>
      <div className="mt-4">
        <h4 className="text-label1 font-bold text-gray-700">Expiration date</h4>
        <Select {...{ options }} />
      </div>
    </div>
  );

  return (
    <BoxBorderDash
      radius={32}
      strokeWidth={3}
      dashWidth={12}
      className="w-full py-8 px-10 rounded-[32px] bg-white"
    >
      {/* {!images && renderContentBase} */}
      {renderContentPreview}
    </BoxBorderDash>
  );
}
