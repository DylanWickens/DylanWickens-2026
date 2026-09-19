import Link from "next/link";

export default function Navbar() {

    const linkStyle = "text-foreground hover:opacity-70 transition-opacity duration-200";

  return (
    <nav className="z-100 fixed top-4 left-1/2 -translate-x-1/2 flex flex-row justify-between w-[calc(100vw-40px)] items-start xl:max-w-[2000px] xl:grid xl:grid-cols-8 xl:gap-x-4 xl:mx-auto">
      <h1 className="xl:col-start-1 xl:col-span-1 lg:text-nowrap">Dylan Wickens</h1>
      <p className="hidden xl:block md:col-start-3 lg:col-start-2 col-span-1 lg:text-nowrap">
        Creative Technologist <br />
        at{" "}
        <Link href="https://ward.studio" className={linkStyle}>
          Ward.Studio
        </Link>
      </p>

      <a
        className={`hidden xl:block xl:col-start-7 xl:col-span-1 lg:text-nowrap ${linkStyle}`}
        href="mailto:dylan@wickens.design">
        Send a message
      </a>
      <p className="xl:col-start-8 xl:col-span-1 text-nowrap text-right">
        {" "}
        &copy; {new Date().getFullYear()}
      </p>
    </nav>
  );
}
