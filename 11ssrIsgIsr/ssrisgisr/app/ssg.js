// This is a Static Site Generation (SSG) example.
// This page does not fetch any data or use dynamic content.
// Next.js will pre-render it as a static HTML file at build time (npm run build).
// This makes it very fast and SEO-friendly.

export default function SSGPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>SSG Example</h1>
      <p>This page is generated at build time and is fully static.</p>
    </div>
  );
} 

//export const dynamic = "force-dynamic"
//this is to force the page to be dynamic , i.e not statically render