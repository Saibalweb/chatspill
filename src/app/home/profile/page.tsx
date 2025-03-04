'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

type Props = {};

const ProfilePage = (props: Props) => {
    const [disable, setDisable]= useState(true);
  return (
    <Card className="w-1/3 m-2">
      <CardHeader>
        <CardTitle className="text-3xl mb-4">Profile</CardTitle>
        <Avatar className="size-40 mb-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="text-2xl">S</AvatarFallback>
        </Avatar>
        <CardTitle className="text-2xl">Saibal Kole</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
          rerum?
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Email"
              className="p-2 border-gray-100 border-2"
              value={'saibalkole@gmail.com'}
            />
          </div>
            <Button variant={disable ? 'secondary' : 'default'}>
                Update
            </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfilePage;
