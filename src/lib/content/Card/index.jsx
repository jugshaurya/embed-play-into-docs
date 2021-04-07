import React, { lazy, Suspense } from "react";
import { importMDX } from "mdx.macro";
import Playground from "./card.playground.jsx";

const Content = lazy(() => importMDX("../Props/rating.md"));
export default function CardPlayground() {
  return (
    <div>
      <Playground />
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </div>
  );
}
