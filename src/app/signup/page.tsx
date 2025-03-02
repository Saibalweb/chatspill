import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

type Props = {};

const Signup = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-1/3 m-4">
        <CardHeader>
          <CardTitle className="text-2xl">Signup</CardTitle>
          <CardDescription>
            Enter your information below to signup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  placeholder="eg-saibal@gmail.com"
                  className="p-2 border-gray-100 border-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">UserName</label>
                <input
                  type="text"
                  placeholder="eg-saibal123"
                  className="p-2 border-gray-100 border-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 border-gray-100 border-2"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="p-2 border-gray-100 border-2"
                />
              </div>
              <Button>Signup</Button>
              <Button variant={"outline"}>Signup with Google</Button>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link href="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
