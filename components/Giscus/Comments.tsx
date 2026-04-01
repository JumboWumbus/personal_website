"use client";

import Giscus from "@giscus/react";

export default function GiscusComments() {
  return (
    <aside className="mt-8 pt-8 border-t border-border" aria-label="Comments">
      <h2 className="text-base font-semibold text-foreground mb-4">Comments</h2>
      <Giscus
        id="comments"
        repo="JumboWumbus/personal_website"
        repoId="R_kgDORwUdOA"
        category="Comments"
        categoryId="DIC_kwDORwUdOM4C5PfF"
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="preferred_color_scheme"
        lang="en"
        loading="lazy"
      />
    </aside>
  );
}
