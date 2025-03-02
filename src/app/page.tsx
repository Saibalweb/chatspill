
'use client';
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <div>
      <h1 className="text-red-300">Landing</h1>
      <Button variant="default" size={'sm'} asChild>
      <Link href="/login">
        Login
      </Link>
      </Button>
    </div>
  );
}
