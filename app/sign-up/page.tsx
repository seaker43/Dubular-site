export const runtime = 'edge';
import { SignUp } from "@clerk/nextjs";
export default function Page(){ return <main className="p-6"><SignUp routing="path" signInUrl="/sign-in" /></main>; }
