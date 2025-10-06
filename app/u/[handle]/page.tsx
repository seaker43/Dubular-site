"use client";
export const runtime='edge';
"use client";
'use client';
import { useParams } from 'next/navigation';
export default function Page(){const { handle }=useParams();return (<div className='p-6 text-white'><h1 className='text-2xl font-bold mb-2'>Profile: {String(handle)}</h1><p>Public profile placeholder.</p></div>);}
