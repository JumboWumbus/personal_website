import { NextRequest, NextResponse } from "next/server";
import type { WebmentionFeed } from "@/utils/types";

const WEBMENTION_IO_BASE = "https://webmention.io/api/mentions.jf2";
const REVALIDATE_SECONDS = 3600; // 1 hour

function buildWebmentionUrl(target: string): string {
  const params = new URLSearchParams({
    target,
    "sort-by": "published",
    "sort-dir": "up",
    "per-page": "100",
  });
  return `${WEBMENTION_IO_BASE}?${params.toString()}`;
}

function isValidTarget(target: string): boolean {
  try {
    const url = new URL(target);
    return url.hostname === "bensden.xyz";
  } catch {
    return false;
  }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = request.nextUrl;
  const target = searchParams.get("target");

  if (!target) {
    return NextResponse.json(
      { error: "Missing required query parameter: target" },
      { status: 400 }
    );
  }

  if (!isValidTarget(target)) {
    return NextResponse.json(
      { error: "target must be a URL on bensden.xyz" },
      { status: 400 }
    );
  }

  const webmentionUrl = buildWebmentionUrl(target);

  const response = await fetch(webmentionUrl, {
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Failed to fetch webmentions from webmention.io" },
      { status: 502 }
    );
  }

  const data: WebmentionFeed = await response.json();

  return NextResponse.json(data, {
    headers: {
      "Cache-Control": `public, s-maxage=${REVALIDATE_SECONDS}, stale-while-revalidate=${REVALIDATE_SECONDS * 2}`,
    },
  });
}
