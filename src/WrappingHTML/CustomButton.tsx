import React from "react";

type CustomButtonProps = {
  variant: "primary" | "secondary";
  children:string
} & Omit<React.ComponentProps<`button`>,"children">

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => {
  return <button className={`class-With-${variant}`} {...rest}>{children}</button>;
};
