import ParralaxImage from "../ui/ParralaxImage";
import Link from "next/link";
import Image from "next/image";

// TODO: Create a project dataset in json.

export default function HeroGallery() {
  return (
    <section
      id="hero-projects"
      className="relative mx-auto flex max-w-[2000px] flex-col gap-4 xl:mt-32 xl:grid xl:grid-cols-8 xl:gap-x-4 xl:gap-y-8 [&>div:first-child]:mt-0">
      <div className="contents">

        <div className="xl:col-start-1 xl:col-span-5">
          <ParralaxImage delay={190} href="/temple">
            <Image
              src="/images/temple/cover-1.png"
              alt="Temple Underground"
              width={2000}
              height={2500}
            />
          </ParralaxImage>
        </div>

        <div className="xl:col-start-7 xl:col-span-2">
          <ParralaxImage delay={190} href="/mino">
            <Image
              src="/images/mino/cover.png"
              alt="Temple Underground"
              width={2000}
              height={2500}
            />
          </ParralaxImage>
        </div>
      </div>

      <div className="contents ">
        <div className="xl:col-start-1 xl:col-span-6">
          <ParralaxImage delay={260} href="/EmergentX">
            <video
              src="https://media.wickens.design/EmergentX/DW-EX-Winebottle-ERC-Optimised.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </ParralaxImage>
        </div>

        <div className="xl:col-start-7 xl:col-span-2">
          <ParralaxImage delay={120} href="#">
            <div className="w-full h-68 bg-foreground"></div>
          </ParralaxImage>
        </div>
      </div>
    </section>
  );
}
