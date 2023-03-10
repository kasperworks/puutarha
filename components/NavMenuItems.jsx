import Link from "next/link";
import * as React from "react";

const NavMenuItems = () => (
  <>
    <Link href="/blog" className="internal-link">
      Notes
    </Link>
    <Link href="/works" className="internal-link">
      Works
    </Link>
    <Link href="/about" className="internal-link">
      About
    </Link>
  </>
);

export default NavMenuItems;
