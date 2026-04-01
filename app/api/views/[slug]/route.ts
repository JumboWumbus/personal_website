import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Params = { params: Promise<{ slug: string }> };

// GET — return current view count without incrementing (for SSR)
export async function GET(_req: NextRequest, { params }: Params) {
  const { slug } = await params;

  const record = await prisma.postView.findUnique({ where: { slug } });

  return NextResponse.json({ slug, count: record?.count ?? 0 });
}

// POST — increment and return new count
export async function POST(_req: NextRequest, { params }: Params) {
  const { slug } = await params;

  const record = await prisma.postView.upsert({
    where: { slug },
    update: { count: { increment: 1 } },
    create: { slug, count: 1 },
  });

  return NextResponse.json({ slug, count: record.count });
}
