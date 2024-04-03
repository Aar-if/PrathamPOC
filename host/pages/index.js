import React from "react";
import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/index"), { ssr: false });
const Sample = dynamic(() => import("reactapp/Sample"), { ssr: false });

function index() {
  return (
    <>
      <RemoteComponent />
      <Sample />
      <Sample />
      <Sample />
    </>
  );
}

export default index;