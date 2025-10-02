import Image from "next/image";

export default function Home() {
  const handleClick = async()=>{
    const res = await fetch("/api/add?a=10&b=20")
    const data = await res.json()
    console.log(data)
  }
  return (
    <div>
      Nextjs APIs demo 
          <button onClick={()=>{
        handleClick()
        }}>Click me</button> 
    </div>

  );
}
