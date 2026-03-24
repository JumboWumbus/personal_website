"use client";
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  BsCalendar4Event,
  BsEye,
  BsClock,
  BsCalendar4Week,
} from "react-icons/bs";
import Link from "next/link";
import { PostMetadata } from "@/utils/types";
import WrapperLink from "../WrapperLink/WrapperLink";

interface ArticleCardProps {
  post: PostMetadata;
  className?: string;
  lastCardRule?: string;
}

export default function ArticleCard({ post, className, lastCardRule }: ArticleCardProps) {
  const handleChildClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
  };
  return (
    <WrapperLink className={`${className}`} href={post.url}>
      <Card className="group row-span-4 grid grid-rows-subgrid gap-2 p-4 shadow-none transition-shadow duration-300 hover:shadow-box-hov-lg hover:cursor-pointer">
        {/* Title */}
        <CardTitle className="row-start-1 text-xl md:text-3xl font-extrabold mb-1">
          <span className="relative after:block after:absolute after:bottom-[-4px] after:h-1 after:left-1/2 after:w-0 after:bg-primary after:transition-all group-hover:after:w-full group-hover:after:left-0">
            {post.title}
          </span>
        </CardTitle>

        {/* Description / metadata */}
        <CardDescription className="row-start-2 flex gap-3">
          <div className="flex items-baseline gap-1">
            <BsCalendar4Week />
            <span>{post.publishedAt}</span>
          </div>
          <div className="flex items-center gap-1">
            <BsClock />
            <span>{post.minutes}</span>
          </div>
        </CardDescription>

        {/* Content */}
        <CardContent className="row-start-3 p-0 py-2 md:py-6">
          <p className="line-clamp-2 leading-normal">{post.summary}</p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="row-start-4 p-0 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} onClick={handleChildClick} href="/arse">
              <Badge variant="secondary">{tag}</Badge>
            </Link>
          ))}
        </CardFooter>
      </Card>
    </WrapperLink>
  );
}
