"use client";
export const runtime = 'edge';

import{useAuth}from'@clerk/nextjs';export default function ClerkDebug(){const{isLoaded,isSignedIn,userId,sessionId}=useAuth();return<pre style={{padding:16}}>{JSON.stringify({isLoaded,isSignedIn,userId,sessionId},null,2)}</pre>}
