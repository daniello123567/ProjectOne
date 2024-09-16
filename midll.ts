// import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";
// const ProtectedRoute = createRouteMatcher(['/admin','/admin/new','admin/signIn']);
// export default clerkMiddleware((auth,req)=>{
//   if(ProtectedRoute(req)){
//    if(!auth().userId){
//      const redirectUrl = new URL('/admin/signIn',req.url)
//      return NextResponse.redirect(redirectUrl)
//    }else{
//     return NextResponse.next()
//    }
//   }
// })

