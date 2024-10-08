import dynamic from "next/dynamic";
import React, {Suspense, lazy} from "react";

// const VueApp = lazy(() => import('vueApp/App'));

// const VueApp = dynamic(() => import("vueApp/App"))

const RemoteVueComponent = dynamic(() => import('vueApp/App'), { ssr: false });

export default function Nice() {
  return (
    <div>
      Nice
        {/* <VueApp /> */}
        <RemoteVueComponent/>
    </div>
  );
}
