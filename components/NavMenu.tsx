"use client";

import * as React from "react";
import { BookOpenCheck, ChevronsUpDown, Hotel, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavMenu() {
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <ChevronsUpDown size={20} />
          <span className="sr-only">Menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/hotel/new")}
        >
          <Plus size={15} />
          <span className="ml-2">Add Hotel</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/my-hotels")}
        >
          <Hotel size={15} />
          <span className="ml-2">My Hotels</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer flex items-center"
          onClick={() => router.push("/my-bookings")}
        >
          <BookOpenCheck size={15} />
          <span className="ml-2">My Bookings</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
