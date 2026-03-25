"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const WrapperLink: React.FC<Props> = ({ children, className, href }) => {
  const router = useRouter();

  function handleClick(event: React.MouseEvent<HTMLElement>) {
    const target = event.target as HTMLElement;

    // If the click originated from a nested interactive element, do nothing
    if (target.closest("a, button, input, textarea, select")) {
      return;
    }

    router.push(href);
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLElement>) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      router.push(href);
    }
  }

  return (
    <article
      className={className}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      style={{ cursor: "pointer" }}
    >
      {children}
    </article>
  );
};

export default WrapperLink;
