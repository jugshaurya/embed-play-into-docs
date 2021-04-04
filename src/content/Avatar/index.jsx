import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";
import Playground from "./avatar.playground.jsx";

const Content = lazy(() => importMDX("../Props/avatar.md"));
export default function Avatar() {
  return (
    <div>
      <Playground />
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}
