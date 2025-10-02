import { Inter } from "next/font/google"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin: Facebook - Connect with friends and the world around you",
  description: "Admin Page: Facebook is a social utility that connects people with friends and others who work, study and live around them. People use Facebook to keep up with friends, upload an unlimited number of photos, post links and videos, and learn more about the people they meet.",
};

//overall layout, then admin layout, then logout navbar.




export default function AdminLayout({ children }) {
  return (
     <>
     <span>Logout Navbar</span>
        {children} 
     </>
  );
}