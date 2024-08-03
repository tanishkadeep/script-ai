import React from "react";
import Image from "next/image";
import Link from "next/link";

import { MuseoModerno } from "next/font/google";
import { cn } from "@/lib/utils";

const museo = MuseoModerno({
  weight: "700",
  subsets: ["latin"],
});

export const Logo = () => {
  return (
    <Link href="/" className="flex gap-2 items-center">
      <Image src="/logo.svg" width={44} height={44} alt="logo"  />
      <h2 className={cn(museo.className, "text-xl")}>Script AI</h2>
    </Link>
  );
};