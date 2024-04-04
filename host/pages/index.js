import React from "react";
import dynamic from "next/dynamic";

const RemoteComponent = dynamic(() => import("remote/Index"), { ssr: false });
const Sample = dynamic(() => import("reactapp/Sample"), { ssr: false });


function Index() {

  return (
    <>
      <RemoteComponent />
      <Sample />
      <Sample />
      <Sample />
    </>
  );
}

export default Index;