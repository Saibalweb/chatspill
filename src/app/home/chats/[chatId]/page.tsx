// app/chat/[chatId]/page.tsx
import { MessageSquare, Phone,Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ChatPage({ params }: { params: { chatId: string } }) {
  // In a real app, you would fetch chat details and messages based on chatId
  // This is a simplified example
  const chatId = params.chatId;

  // Mock data
  const chatPartner = {
    id: chatId,
    name: chatId
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" "),
    isOnline: chatId === "florencio-dorrance",
  };

  const messages = [
    {
      id: 1,
      sender: "them",
      content: "omg, this is amazing",
      time: "10:23 AM",
    },
    { id: 2, sender: "me", content: "perfect! ✅", time: "10:24 AM" },
    {
      id: 3,
      sender: "them",
      content: "Wow, this is really epic",
      time: "10:25 AM",
    },
    { id: 4, sender: "me", content: "How are you?", time: "10:30 AM" },
    {
      id: 5,
      sender: "them",
      content: "just ideas for next time",
      time: "10:32 AM",
    },
    {
      id: 6,
      sender: "me",
      content: "I'll be there in 2 mins ⏰",
      time: "10:33 AM",
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Chat header */}
      <div className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>{chatPartner.name.charAt(0)}</AvatarFallback>
            </Avatar>
            {chatPartner.isOnline && (
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white" />
            )}
          </div>
          <div>
            <h2 className="font-medium">{chatPartner.name}</h2>
            {chatPartner.isOnline && (
              <p className="text-xs text-green-600">Online</p>
            )}
          </div>
        </div>
        <Button variant="outline">
          <Phone />
          Call
        </Button>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[70%] rounded-lg p-3 ${
                message.sender === "me"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-gray-100 text-gray-800 rounded-bl-none"
              }`}
            >
              <p>{message.content}</p>
              <span
                className={`text-xs ${
                  message.sender === "me" ? "text-blue-100" : "text-gray-500"
                } block text-right mt-1`}
              >
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Message input */}
      <div className="border-t p-4 flex gap-2">
        <Input placeholder="Type a message" className="flex-1" />
        <Button>
            <Send />
            Send
        </Button>
      </div>
    </div>
  );
}
