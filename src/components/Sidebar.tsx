"use client";
import React from "react";
import Link from "next/link";
import {
  Home,
  MessageSquare,
  Grid3X3,
  Search,
  CalendarDays,
  Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
type Props = {};

const Sidebar = (props: Props) => {
  const router = useRouter();
  console.log(router);
  return (
    <div className="w-16 h-full bg-indigo-100 flex flex-col items-center py-4 border-r">
      {/* Profile icon at top */}
      <div className="w-10 h-10 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold mb-8">
        C
      </div>

      {/* Navigation items */}
      <nav className="flex flex-col space-y-6 items-center">
        <Link
          href="/home/chats"
          className="p-2 rounded-md bg-indigo-200 text-indigo-700 transition-colors"
        >
          <MessageSquare className="h-6 w-6" />
        </Link>

        <Link
          href="/dashboard"
          className="p-2 rounded-md hover:bg-indigo-200 transition-colors"
        >
          <Grid3X3 className="h-6 w-6 text-gray-700" />
        </Link>

        <Link
          href="/search"
          className="p-2 rounded-md hover:bg-indigo-200 transition-colors"
        >
          <Search className="h-6 w-6 text-gray-700" />
        </Link>

        <Link
          href="/calendar"
          className="p-2 rounded-md hover:bg-indigo-200 transition-colors"
        >
          <CalendarDays className="h-6 w-6 text-gray-700" />
        </Link>
      </nav>

      {/* Settings button at bottom */}
      <div className="mt-auto mb-10 flex flex-col gap-2 items-center">
        <Link
          href="/settings"
          className="p-2 rounded-md hover:bg-indigo-200 transition-colors"
        >
          <Settings className="h-6 w-6 text-gray-700" />
        </Link>
        <Link
          href="/settings"
          className="p-2 rounded-md hover:bg-indigo-200 transition-colors"
        >
          <Avatar className="size-7">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
