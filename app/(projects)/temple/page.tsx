import ParralaxImage from "@/app/ui/ParralaxImage";
import Image from "next/image";

export default function temple() {
  return (
    <section
      id="temple"
      className="relative w-[calc(100vw-40px)] max-w-[2000px] mx-auto px-0 flex-col gap-6 pb-800 xl:mt-32 xl:grid xl:grid-cols-8 xl:gap-x-4 xl:gap-y-14 [&>div:first-child]:mt-0">
      <div className="contents ">
        <div className="xl:col-start-1 xl:col-span-8">
          <ParralaxImage delay={120} href="#">
            <Image
              src="/images/temple/project-image-01.png"
              className="w-full h-auto object-cover"
              alt="Temple Underground"
              width={2800}
              height={1514}
              sizes="(min-width: 1280px) 2000px, 100vw"
              unoptimized
            />
          </ParralaxImage>
        </div>
      </div>

      <div className="contents ">
        <div className="xl:col-start-1 xl:col-span-6">
          <ParralaxImage delay={280} href="#">
            <Image
              src="/images/temple/project-image-02.png"
              className="w-full h-auto object-cover"
              alt="Temple Underground"
              width={2800}
              height={1514}
              sizes="(min-width: 1280px) 2000px, 100vw"
              unoptimized
            />
          </ParralaxImage>
      
        </div>
      </div>
    </section>
  );
}
