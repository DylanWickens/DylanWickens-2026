import ParralaxImage from "../ui/ParralaxImage";
import Link from "next/link";
import Image from "next/image";

// TODO: Create a project dataset in json.

export default function HeroGallery() {
  return (
    <section
      id="hero-projects"
      className="px-4 grid grid-cols-8 gap-x-4 mt-32 [&>div:first-child]:mt-0 gap-y-8 relative">
      <div className="contents">
        <Link href="/temple" className="col-start-1 col-span-4">
          <ParralaxImage delay={100}>
            <Image
              src="/images/temple/cover-1.png"
              alt="Temple Underground"
              width={2000}
              height={2500}
            />
          </ParralaxImage>
        </Link>

        <div className="col-start-6 col-span-3 ">
          <ParralaxImage delay={190}>
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
        <div className="col-start-1 col-span-6">
          <ParralaxImage delay={260}>
            <video
              src="https://media.wickens.design/EmergentX/DW-EX-Winebottle-ERC-Optimised.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </ParralaxImage>
        </div>
        <div className="col-start-7 col-span-2">
          <ParralaxImage delay={120}>
            <div className="w-full h-68 bg-foreground"></div>
          </ParralaxImage>
        </div>
      </div>
    </section>
  );
}
