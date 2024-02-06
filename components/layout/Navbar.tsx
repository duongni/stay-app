"use client";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default Navbar;
