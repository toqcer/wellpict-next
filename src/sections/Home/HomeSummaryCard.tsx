import Label from "@/components/Label";

interface HomeSummaryCardProps {
  eachValue: [totalUpload: number, totalDownload: number, totalView: number];
}

export default function HomeSummaryCard({ eachValue }: HomeSummaryCardProps) {
  return (
    <div className="bg-white shadow-custom rounded-lg px-8 py-4 mt-10">
      <div className="mt-2 space-y-6">
        <div>
          <p className="text-gray-500 text-label2 font-semibold">
            Total uploaded
          </p>
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-h2">
              {eachValue[0].toLocaleString("en-US")}
            </span>
            <Label label={"9.2%"} />
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-label2 font-semibold">
            Total downloads
          </p>
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-h2">
              {eachValue[1].toLocaleString("en-US")}
            </span>
            <Label label={"9.2%"} />
          </div>
        </div>
        <div>
          <p className="text-gray-500 text-label2 font-semibold">Total views</p>
          <div className="flex items-center gap-4">
            <span className="font-extrabold text-h2">
              {eachValue[2].toLocaleString("en-US")}
            </span>
            <Label label={"9.2%"} />
          </div>
        </div>
      </div>
    </div>
  );
}
