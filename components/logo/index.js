import AppLink from "components/shared/app-link/app-link";
import Image from "next/image";
import React from "react";

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
