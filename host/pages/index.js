import React from "react";
import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/index"), { ssr: false });

function index() {
  return (
    <>
      <RemoteComponent />
    </>
  );
}

export default index;
