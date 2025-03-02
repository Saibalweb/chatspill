// app/chat/layout.tsx
import ChatsList from "@/components/Chatlist";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Chat | Your App Name",
  description: "Chat with your team members",
};

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full">
      {/* Chat list sidebar - always visible */}
      <div className="w-72 border-r bg-gray-50">
        <ChatsList />
      </div>
      
      {/* Dynamic chat content area */}
      <div className="flex-1">{children}</div>
    </div>
  );
}