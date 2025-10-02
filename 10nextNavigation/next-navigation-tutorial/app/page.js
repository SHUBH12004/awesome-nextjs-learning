"use client"
import { useSearchParams } from "next/navigation";
export default function Home() {
  const searchParams=useSearchParams()
  return (
    <div>
      Hey this is a page! And the blog post is {searchParams.get("blog")} and the source is {searchParams.get("source")}
    </div>
  );
}
