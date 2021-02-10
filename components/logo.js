import AppLink from "@/components/shared/app-link";
import Image from "next/image";
import React from "react";

const Logo = ({ href, ...rest }) => {
  return (
    <AppLink href={"/"}>
      <Image alt="Logo" src="/logo.png" {...rest} />
    </AppLink>
  );
};

export default Logo;
