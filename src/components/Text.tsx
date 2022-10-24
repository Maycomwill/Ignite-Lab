import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: "xsm" | "sm" | "md" | "lg" | "xlg";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
  color?: string;
  weight?: "regular" | "bold" | "black";
}

export function Text({
  size = "sm",
  children,
  color = "white",
  asChild,
  className,
  weight
}: TextProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={clsx(
        "font-sans",
        {
          "text-green-500": color === "green",
          "text-gray-900": color === "dark-gray",
          "text-gray-100": color === "white",
        },
        {
          "font-regular": weight === "regular",
          "font-bold": weight === "bold",
          "font-black": weight === "black",
        },
        {
          "text-xsm": size === "xsm",
          "text-sm": size === "sm",
          "text-md": size === "md",
          "text-lg": size === "lg",
          "text-xlg": size === "xlg",
        },
        className
      )}
    >
      {children}
    </Comp>
  );
}
