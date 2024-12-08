import { ThemeToggle } from "@/components/theme-toggle";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen w-full items-center justify-center px-4">
      {children}
      <div className="place-self-end mb-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default LoginLayout;
