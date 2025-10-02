// This is an Incremental Static Regeneration (ISR) example.
// Next.js will pre-render this page as static HTML at build time,
// but will revalidate and update the static page every 10 seconds.
// This combines the speed of static pages with the ability to update content regularly.

export default async function ISRPage() {
  // Fetch some data (here using a public API for demonstration)
  const res = await fetch('https://api.quotable.io/random', {
    next: { revalidate: 10 }, // Revalidate every 10 seconds
  });
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>ISR Example (revalidates every 10 seconds)</h1>
      <blockquote>{data.content}</blockquote>
      <div>— {data.author}</div>
    </div>
  );
} 