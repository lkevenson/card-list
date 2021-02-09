import React, { forwardRef } from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const Page = forwardRef(({ children, title = "", ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
