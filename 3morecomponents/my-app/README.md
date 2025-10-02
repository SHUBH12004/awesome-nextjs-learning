This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Project Learning & Code Reference

### 1. Navbar Component (`components/Navbar.js`)
```jsx
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-around bg-slate-800 text-white py-4'>
        <div className="logo font-bold">Facebook</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul> 
    </nav>
  )
}
export default Navbar
```
- **Learning:** Uses Next.js `Link` for client-side navigation. Utility classes from Tailwind CSS for layout and styling.

### 2. Footer Component (`components/Footer.js`)
```jsx
import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
        <footer className='flex justify-around bg-slate-800 text-white py-4 text-xs'>
            <div className="logo font-bold">CopyRight 2025 | All rights reserved</div>
        <ul className='flex gap-6'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/contact'><li>Contact</li></Link>
        </ul> 
    </footer>  
  )
}
export default Footer
```
- **Learning:** Similar to Navbar, demonstrates reusable layout and navigation links in the footer.

### 3. Root Layout (`app/layout.js`)
```jsx
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
//This is for title of the webpage next to ur favicon
export const metadata = {
  title: "Facebook",
  description: "Facebook is a social media platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
```
- **Learning:**
  - Demonstrates use of custom fonts with `next/font`.
  - Shows how to set up a global layout with persistent Navbar and Footer.
  - Metadata for SEO and browser tab title.

### 4. Home Page (`app/page.js`)
```jsx
import Image from "next/image";
//Image component in next.js is used to display images in a page
//fill={true} is used to make the image fill the container
//src is the source of the image
//alt is the alt text of the image
//className is used to style the image
//object-cover is used to make the image cover the container
//mx-auto is used to center the image
//my-5 is used to add margin to the image

//Best part -> it optimizes the image size and quality
//it also helps in loading the image faster
//it also helps in SEO
//it also helps in accessibility
//it also helps in performance
//it also helps in mobile optimization
//it also helps in desktop optimization
export default function Home() {
  return (
     <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-cover" fill={true} src="http://www.menucool.com/slider/prod/image-slider-3.jpg" alt="" />
     </div>
  );
}
```
- **Learning:**
  - Extensive comments on the benefits of Next.js `Image` component: optimization, SEO, accessibility, and responsive design.
  - Shows how to use external images and style them with Tailwind CSS.

### 5. Next.js Config for External Images (`next.config.mjs`)
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.menucool.com"],
  },
};

export default nextConfig;
```
- **Learning:**
  - Required to allow external images from specific domains.
  - Note: As of Next.js 15+, `images.domains` is deprecated in favor of `images.remotePatterns`.

---

This section documents the main code, structure, and learning points from the `/3morecomponents/my-app` project for easy reference and review.
