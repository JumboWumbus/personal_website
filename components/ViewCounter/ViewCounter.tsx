"use client";

import { useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";

type Props = { slug: string };

export default function ViewCounter({ slug }: Props) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => {});
  }, [slug]);

  if (count === null) return null;

  return (
    <div className="flex items-center gap-1.5">
      <BsEye />
      <span>{count.toLocaleString()} {count === 1 ? "view" : "views"}</span>
    </div>
  );
}
