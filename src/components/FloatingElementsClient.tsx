"use client";

import dynamic from "next/dynamic";

const FloatingElements = dynamic(
  () => import("./FloatingElements"),
  { ssr: false }
);

export default function FloatingElementsClient() {
  return <FloatingElements />;
}
