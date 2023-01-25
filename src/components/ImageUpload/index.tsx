import Image from "next/image";
import ImageLogo from "@/assets/images/logo-picture.png";

export default function ImageUpload() {
  return (
    <div className="w-full py-14 px-44 rounded-[32px] border-dashed border-spacing-6  border-[3px] bg-white border-primary-200">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-10">
          <Image src={ImageLogo} alt={"pict"} />
        </div>
        <div className="text-center">
          <p className="text-h2 text-primary-600 font-semibold">
            Click to upload <span className="text-black">or drag and drop</span>
          </p>
          <p className="text-label1">JPG, PNG, SVG, or GIF are allowed</p>
        </div>
      </div>
    </div>
  );
}
