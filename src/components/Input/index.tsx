import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input({ ...props }: InputProps) {
  return <input {...props} className="bg-dark-50 w-80 h-10 p-4 rounded-lg" />;
}
