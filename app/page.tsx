// import Image from "next/image";
import ImageFlipper from "@/components/ImageFlipper/ImageFlipper";
import face1 from "../public/faces/BenThreshold_1.png";
import face2 from "../public/faces/BenThreshold_2.png";
import face3 from "../public/faces/BenThreshold_3.png";
import face4 from "../public/faces/BenThreshold_4.png";
import face5 from "../public/faces/BenThreshold_5.png";
import face6 from "../public/faces/BenThreshold_6.png";
import metadata from "@/data/metadata.json"
import BlogList from "@/components/BlogList/BlogList";

const faces = [face1, face2, face3, face4, face5, face6];

//TODO: Style hero text to shrink on smaller screens
//TODO: Generate single file from mdx metadata to use instead of getPosts() for performance
export default async function Home() {
  return (
    <>
      <div className="flex flex-col min-[860px]:flex-row min-[860px]:items-end w-full">
        <div className="flex flex-row gap-2 items-start flex-[5_5_0%]">
          <h1 className="uppercase text-justify text-5xl min-[450px]:text-7xl min-[640px]:text-8xl font-bold ">
            Jello me Ben
          </h1>
          <ImageFlipper
            interval={3000}
            images={faces}
            className="min-[860px]:min-w-[274px] min-[860px]:min-h-[425px]"
          />
        </div>
        <h1 className="uppercase text-justify text-6xl min-[450px]:text-7xl min-[640px]:text-8xl font-bold flex-[3_3_0%]">
          This is da den
        </h1>
      </div>
      <div>

        <BlogList className="py-16" sidebar={false} title="Recent Projects" description="Recent projects that will impress you and make you think highly of me" postList={metadata} sectionFilter={["projects"]} />
        <BlogList sidebar={false} title="Recent Blog posts" description="Recent blog posts that I wrote with my own fat hands" postList={metadata} sectionFilter={["blog"]} />
      </div>
    </>
  );
}
