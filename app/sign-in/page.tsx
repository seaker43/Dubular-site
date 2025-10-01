export const runtime = 'edge';
import { SignIn } from "@clerk/nextjs";
export default function Page(){ return <main className="p-6"><SignIn routing="path" signUpUrl="/sign-up" /></main>; }
