import Link from "next/link";

export default function Navbar() {

    const linkStyle = "text-foreground hover:opacity-70 transition-opacity duration-200";

  return (
    <nav className="top-4 left-5 fixed w-[calc(100vw-40px)] grid grid-cols-8 gap-x-4">
      <h1 className="col-start-1 col-span-1 text-nowrap">Dylan Wickens</h1>
      <p className="col-start-2 col-span-1 text-nowrap">
        Creative Technologist <br />
        at <Link href="https://ward.studio" className={linkStyle}>Ward.Studio</Link>
      </p>

      <a className={`col-start-7 col-span-1 text-nowrap ${linkStyle}`} href="mailto:dylan@wickens.design">Send a message</a>
      <p className="col-start-8 col-span-1 text-nowrap text-right"> &copy; {new Date().getFullYear()}</p>
    </nav>
  );
}
