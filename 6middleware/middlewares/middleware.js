// import { NextResponse } from "next/server";

//Middleware is a function that runs before a request is made to the server.
//have access to the request and response objects.
//It modifies the request before it reaches the route handler. 
//It can be used to check if the user is logged in, redirect them if they are not, or add headers to the request.

// This middleware checks if the user is logged in and redirects them if they try to access authentication routes while logged in.


//
// export default function middleware(req) {
    // return NextResponse.json({message: "Hello, world!"}); 
//     return NextResponse.redirect(new URL("/", req.url));
// }


// export const config = {
//     matcher: '/about/:path*', //about/path* means any path under about will be matched. what if no * was there, then it would only match /about.
    //No * means exactly one segment is required after /about/.
    // It matches only URLs like /about/team or /about/company, but not /about or /about/company/history.
// }



import { NextResponse } from 'next/server'

 
export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url))
  }

//redirect -> redirect to a different page.
//rewrite -> rewrite the request to a different page.


 //same content of / will be shown on /dashboard.
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/', request.url))  //will get content of home page into dashboard route
    // return NextResponse.redirect(new URL('/', request.url)) //this will redirect to home page
  }
}