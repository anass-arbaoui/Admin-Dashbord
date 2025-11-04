import { cn } from "@/lib/utils";
import React from "react";

interface CustomButtonProps {
  disabled?: boolean;
  rounded?: boolean;
  buttonName?: string;
}

function CustomButton({
  disabled,
  rounded,
  buttonName,
  children,
}: React.PropsWithChildren<CustomButtonProps>) {
  // This component can be customized further based on the props
  return (
    <button
      className={cn(
        rounded && "rounded-2xl",
        disabled ? "bg-gray-300" : "bg-blue-300"
      )}
    >
      {children}
      {buttonName}
    </button>
  );
}

export default CustomButton;
