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
