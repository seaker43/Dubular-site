import { NextResponse } from 'next/server';
export const config={matcher:['/account','/settings/:path*','/u/me']};
export default function m(){return NextResponse.next();}
