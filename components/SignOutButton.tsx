'use client';
import { useClerk } from '@clerk/nextjs';

export default function SignOutBtn() {
  const { signOut } = useClerk();
  return (
    <button
      type="button"
      onClick={() => signOut({ redirectUrl: '/sign-in' })}
      className="mt-4 rounded-lg px-4 py-2 text-sm bg-[var(--laser-green,#00ff00)]/10 border border-[var(--laser-green,#00ff00)] text-white"
    >
      Sign out
    </button>
  );
}
