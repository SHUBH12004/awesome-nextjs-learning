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