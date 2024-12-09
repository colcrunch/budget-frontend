import { ThemeToggle } from "@/components/theme-toggle";
import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const LoginLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-full px-4">
        <div className="flex w-full items-center justify-center">
          {children}
        </div>
        <div className="place-self-end mb-4 z-40">
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default LoginLayout;
