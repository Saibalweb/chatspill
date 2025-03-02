// components/ChatsList.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type ChatPreview = {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline?: boolean;
};

export default function ChatsList() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - in a real app, this would come from an API or state management
  const chats: ChatPreview[] = [
    {
      id: "elmer-laverty",
      name: "Elmer Laverty",
      avatar: "/avatars/elmer.jpg",
      lastMessage: "Haha oh man 🔥",
      timestamp: "12m",
      isOnline: false,
    },
    {
      id: "florencio-dorrance",
      name: "Florencio Dorrance",
      avatar: "/avatars/florencio.jpg",
      lastMessage: "woohooooo",
      timestamp: "24m",
      isOnline: true,
    },
    {
      id: "lavern-laboy",
      name: "Lavern Laboy",
      avatar: "/avatars/lavern.jpg",
      lastMessage: "Haha that's terrifying 😂",
      timestamp: "1h",
      isOnline: false,
    },
    {
      id: "lavern-kole",
      name: "Lavern kole",
      avatar: "/avatars/lavern.jpg",
      lastMessage: "Haha that's terrifying 😂",
      timestamp: "1h",
      isOnline: false,
    },
    // Add more chats as needed
  ];

  const filteredChats = chats.filter(
    (chat) =>
      chat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      chat.lastMessage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium mb-4 flex items-center justify-between">
          Chats
          <Badge variant="outline" className="ml-2 text-xs font-normal">
            12
          </Badge>
        </h2>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search messages"
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="overflow-y-auto flex-1">
        {filteredChats.map((chat) => (
          <Link
            key={chat.id}
            href={`/home/chats/${chat.id}`}
            className={`flex items-start gap-3 p-4 hover:bg-gray-100 transition-colors ${
              pathname === `/chat/${chat.id}` ? "bg-gray-100" : ""
            }`}
          >
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between">
                <h3 className="font-medium text-sm truncate">{chat.name}</h3>
                <span className="text-xs text-gray-500">{chat.timestamp}</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                {chat.lastMessage}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
