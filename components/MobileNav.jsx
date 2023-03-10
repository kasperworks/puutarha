import * as React from "react";
import Link from "next/link";
import * as s from "../styles/Layout.styled";
import NavMenuItems from "./NavMenuItems";

const MobileNav = () => (
  <s.NavBar className="mobile-nav">
    <div>
      <Link href="/" className="internal-link">
        Kasper Viita
      </Link>
    </div>
    <input id="menu-toggle" type="checkbox" />
    {/* eslint-disable-next-line */}
    <label htmlFor="menu-toggle" id="menu-button-container">
      <div id="menu-button" />
    </label>
    <div id="menu" className="z-10 rounded bg-obelisk pt-8 shadow-monolith">
      <NavMenuItems />
    </div>
  </s.NavBar>
);

export default MobileNav;
