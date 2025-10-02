//route.js is a file that is used to create API routes in next.js
import { NextResponse } from 'next/server';

export async function GET(request){
    const {searchParams} = new URL(request.url);
    const a = searchParams.get("a");
    const b = searchParams.get("b");
    const sum = parseInt(a) + parseInt(b);
    return NextResponse.json({sum});
}

export async function POST(request){
    const {a, b} = await request.json();
    const sum = a + b;
    return NextResponse.json({sum});
}
//NextResponse is a class that is used to create a response object
//request is the request object
//searchParams is the search params object
//a and b are the parameters passed in the URL
//sum is the sum of a and b
//return is the response object
//json is the method that is used to send the response object in JSON format