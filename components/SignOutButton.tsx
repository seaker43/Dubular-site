'use client';
import { useClerk } from '@clerk/nextjs';

export default function SignOutBtn() {
  const { signOut, session } = useClerk();

  async function handleSignOut() {
    try {
      await signOut({ redirectUrl: '/sign-in', sessionId: session?.id });
    } catch (err) {
      console.error('Sign-out error:', err);
      // fallback redirect
      window.location.href = '/sign-in';
    }
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="mt-4 rounded-lg px-4 py-2 text-sm bg-[var(--laser-green,#00ff00)]/10 border border-[var(--laser-green,#00ff00)] text-white"
    >
      Sign out
    </button>
  );
}
