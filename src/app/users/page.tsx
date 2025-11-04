import { ProductChart } from "../../components/charts/bar-charts";
import React from "react";

export function User() {
  return (
    <div className="flex flex-row gap-4">
      {/* left Side  */}
      <div className="flex flex-col w-1/3 gap-4">
        <div className="bg-primary-foreground">
          lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <div className="bg-primary-foreground">
          lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </div>
        <ProductChart></ProductChart>
      </div>
      {/* right Side  */}
      <div className="flex flex-col w-2/3 gap-2">
        <ProductChart></ProductChart>
      </div>
    </div>
  );
}

export default User;
