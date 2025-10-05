'use client';
import { useClerk, ClerkLoaded } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function SignOutBtn() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <ClerkLoaded>
      <button
        onClick={() => signOut(() => router.push('/sign-in'))}
        className='mt-4 rounded-lg bg-[var(--laser-green,#00ff00)]/10 px-4 py-2 text-sm'
        type='button'
      >
        Sign out
      </button>
    </ClerkLoaded>
  );
}
