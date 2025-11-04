import React from "react";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Card } from "./ui/card";

function TodoList() {
  return (
    <div className="mt-2 max-h-100 overflow-y-auto ">
      <div className="flex flex-col space-y-4">
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="leading-relaxed pl-0.5 text-sm">
              Accept terms and conditions lorem epsum lorem
            </Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
        <Card className="px-1 space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default TodoList;
