import Sidebar from "@/components/Sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
const HomeLayout = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default HomeLayout;
