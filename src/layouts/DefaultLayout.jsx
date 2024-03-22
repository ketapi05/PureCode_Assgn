
import React, { Suspense } from "react";

const DefaultLayout = ({ children }) => {
  return <Suspense>{children}</Suspense>;
};

export default DefaultLayout;
