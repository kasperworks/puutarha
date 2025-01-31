import * as React from "react";
import Link from "next/link";
import NavMenuItems from "./NavMenuItems";

const MobileNav = () => (
  <div className="relative flex w-full min-w-[250px] items-baseline pt-4 text-[1.4rem] sm:hidden">
    <div>
      <Link
        href="/"
        className="internal-link font-josefin hover:text-accent active:text-accent"
      >
        Kasper Viita
      </Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    {/* eslint-disable-next-line */}
    <label htmlFor="menu-toggle" id="menu-button-container">
      <div id="menu-button" />
    </label>
    <div
      id="menu"
      className="z-10 flex flex-col rounded bg-obelisk pt-8 shadow-monolith"
    >
      <NavMenuItems />
    </div>
  </div>
);

export default MobileNav;
