import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";

import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Badge } from "../../../components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import { UserActivityChart } from "../../../components/charts/user-activity-chart";
import CardList from "../../../components/CardList";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../components/ui/sheet";

import UserForm from "../../../components/UserForm";
const user = {
  userName: "john.doe123",
  email: "john.doe123@gmail.com",
  phone: "+22 665 4687",
  location: "New York, NY",
};
export default function Page() {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users/1">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>KUser</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-row gap-4 mt-4">
        {/* Left Side */}
        <div className="flex flex-col w-1/3 gap-4">
          {/* User Badges */}
          <div className="bg-primary-foreground p-2 rounded-md flex flex-col gap-2">
            <h2>User Badges</h2>
            <div className="flex flex-row gap-2">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600 p-0 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <BadgeCheck className="w-6 h-6" />
              </Badge>
              <Badge
                variant="secondary"
                className="text-white bg-green-800 p-0 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Shield className="w-6 h-6" />
              </Badge>
              <Badge
                variant="secondary"
                className="bg-yellow-600 text-white p-0 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Candy className="w-6 h-6" />
              </Badge>
              <Badge
                variant="secondary"
                className="bg-yellow-800 text-white p-0 w-8 h-8 rounded-full flex items-center justify-center"
              >
                <Citrus className="w-6 h-6" />
              </Badge>
            </div>
          </div>

          {/* User Information */}
          <div className="bg-primary-foreground p-2 rounded-md flex flex-col">
            <div className="flex flex-row items-center justify-between p-2">
              <h2 className="font-semibold">User Information</h2>

              {/* IMPORTANT: Wrap trigger and content inside Sheet */}
              <Sheet>
                <SheetTrigger>
                  <Button>Edit User</Button>
                </SheetTrigger>
                <SheetContent className="w-[400px] sm:w-[540px]">
                  <SheetHeader>
                    <SheetTitle>Edit User</SheetTitle>
                  </SheetHeader>
                  <div className="p-4 w-full">
                    {" "}
                    <UserForm user={user}></UserForm>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            <div className="flex flex-col gap-1 my-2">
              <h4 className="text-sm text-gray-400">Profile completion</h4>
              <Progress value={70} />
            </div>

            <div className="flex flex-col gap-4 my-2">
              <span>
                <strong className="text-md">Username:</strong>
                <span className="text-sm px-2">john.doe123</span>
              </span>
              <span>
                <strong className="text-md">Email:</strong>
                <span className="text-sm px-2">john.doe123@gamil.com</span>
              </span>
              <span>
                <strong className="text-md">Phone:</strong>
                <span className="text-sm px-2">+22 665 4687</span>
              </span>
              <span>
                <strong className="text-md">Location:</strong>
                <span className="text-sm px-2">New York, NY</span>
              </span>
              <span>
                <strong className="text-md">Role:</strong>
                <Button className="mx-2 bg-gray-900 dark:bg-gray-200 w-18 h-6">
                  Admin
                </Button>
              </span>
            </div>
          </div>

          <div className="max-h-100 overflow-y-auto">
            <CardList title="popular" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-2/3 gap-4">
          {/* John Doe Panel */}
          <div className="bg-primary-foreground rounded-md p-2 flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <Avatar>
                <AvatarImage
                  src="/logo.png"
                  className="rounded-full h-12 w-12"
                />
                <AvatarFallback>user</AvatarFallback>
              </Avatar>
              <h2 className="font-semibold">Jhon Doe</h2>
            </div>
            <p className="text-justify p-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Second Element on Right Side */}
          <div className="bg-primary-foreground p-2 rounded-md">
            <UserActivityChart></UserActivityChart>
          </div>
        </div>
      </div>
    </div>
  );
}
