import * as React from "react";
import Link from "next/link";
import NavMenuItems from "./NavMenuItems";

const DesktopNav = () => (
  <div className="relative hidden w-full min-w-[250px] items-baseline pt-4 text-[1.4rem] sm:flex">
    <div className="basis-1/2">
      <Link
        href="/"
        className="internal-link font-josefin hover:text-accent active:text-accent"
      >
        Kasper Viita
      </Link>
    </div>
    <div className="flex basis-1/2 justify-end gap-5 font-josefin">
      <NavMenuItems />
    </div>
  </div>
);

export default DesktopNav;
