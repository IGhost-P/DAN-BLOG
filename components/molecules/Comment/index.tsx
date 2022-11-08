import React, { useEffect, useRef } from "react";
import { MutableRefObject } from "react";

export function Comment({ repo }: { repo: string }) {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const utterances = document.createElement("script");
    const attributes = {
      src: "https://utteranc.es/client.js",
      repo,
      "issue-term": "pathname",
      label: "comment",
      theme: "github-light", //다크 테마
      crossorigin: "anonymous",
      async: "true",
    };
    Object.entries(attributes).forEach(([key, value]) => {
      utterances.setAttribute(key, value);
    });
    containerRef.current.appendChild(utterances);
  }, []);
  return (
    <div
      id="comment"
      style={{
        width: "100%",
        maxWidth: "700px",
        margin: "0 auto",
        marginTop: "50px",
        marginBottom: "50px",
      }}
      ref={containerRef}
    />
  );
}
