import ImageUpload from "@/components/ImageUpload";

export default function HomeHero() {
  return (
    <section>
      <div className="rounded-3xl bg-primary-50 lg:h-[486px] lg:py-24 lg:px-16 text-center">
        <h1 className="text-h1 lg:text-display font-extrabold mb-6">
          Upload your images{" "}
          <span className="text-primary-600">
            in a <br /> breeze
          </span>{" "}
          with <span className="text-primary-600">Wellpict</span>
        </h1>
        <p className="text-p1">
          We make it easy to select and upload your images in no time <br />
          Start <span className="text-primary-600">sharing</span> your images
          today with Wellpict!
        </p>
      </div>
      <div className="-mt-24 lg:px-16">
        <ImageUpload />
      </div>
    </section>
  );
}
