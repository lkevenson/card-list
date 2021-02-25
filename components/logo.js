import Image from "next/image";
import React from "react";
import AppLink from "../components/shared/app-link";

const Logo = ({ href, ...rest }) => {
  return (
    <>
      <AppLink href={"/"}>
        <Image className="imageBorder" alt="Logo" src="/logo.png" {...rest} />
      </AppLink>
      <style jsx>{`
        imageborder: {
          border-style: solid;
          border-width: 9px;
          border-color: green;
        }
      `}</style>
    </>
  );
};

export default Logo;
