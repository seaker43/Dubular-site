"use client";
export const runtime = 'edge';

import {useEffect,useState}from'react';export default function CookieDebug(){const[d,setD]=useState(null);useEffect(()=>{setD({location:{href:location.href,host:location.host,hostname:location.hostname,protocol:location.protocol},documentCookie:document.cookie||'(empty)'});},[]);return <pre style={{whiteSpace:'pre-wrap',wordBreak:'break-all',padding:16}}>{JSON.stringify(d,null,2)}</pre>}
