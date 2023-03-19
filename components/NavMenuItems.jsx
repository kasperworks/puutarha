import Link from "next/link";
import * as React from "react";

const NavMenuItems = () => (
  <>
    <Link
      href="/blog"
      className="internal-link font-josefin hover:text-accent active:text-accent"
    >
      Notes
    </Link>
    <Link
      href="/works"
      className="internal-link font-josefin hover:text-accent active:text-accent"
    >
      Works
    </Link>
    <Link
      href="/about"
      className="internal-link font-josefin hover:text-accent active:text-accent"
    >
      About
    </Link>
  </>
);

export default NavMenuItems;
