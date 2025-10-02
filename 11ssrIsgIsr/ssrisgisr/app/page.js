// This is a Static Site Generation (SSG) example.
// Because this page does not fetch any data or use dynamic content,
// Next.js will pre-render it as a static HTML file at build time (npm run build).
// This makes it very fast and SEO-friendly.

import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      I am homepage (Static Site Generation - SSG)
    </div>
  );
}
