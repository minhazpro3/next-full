import { NextResponse } from "next/server"


export const middleware =(request) =>{
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/services", request.url));
  }
 
        //  return NextResponse.rewrite(new URL("/about", request.url));

}


export const config = {
  matcher: "/dashboard",
};