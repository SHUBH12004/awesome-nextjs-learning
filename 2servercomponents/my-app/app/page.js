"use client";
import {useState} from "react";
//useState throws err cuz it is not a server component
//everything in next.js by default is a server component
//so we need to use use client
//use client is a hook that allows us to use state in a server component
//we add "use client" at the top of the file to make it a client component
// Example: Using a server-only module like 'fs/promises' in a client component will cause an error
// Uncommenting the following lines will throw an error in the browser because 'fs/promises' is only available on the server:
// import { readFile } from 'fs/promises';
//
// export default function Home() {
//   // This will throw an error if 'use client' is present
//   useEffect(() => {
//     readFile('/some/file.txt', 'utf-8').then(console.log);
//   }, []);
//   return <div>Trying to use fs/promises in a client component</div>;
// }
//
// In Next.js, server-only modules like 'fs/promises' can only be used in server components (files without 'use client').

export default function Home() {
  const [count, setCount] = useState(0);
  console.log("I am a component");
  //the above statement in presenc of "use client" will be printed in the browser console
  //but if we remove "use client" from the file, the above statement will not be printed in 
  //our terminal, i.e server console
  return (
    <div>
      <h1>I am a component</h1>
      <p>Count: {count}</p>  
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
