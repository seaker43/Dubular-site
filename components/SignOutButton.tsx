'use client';
import { SignOutButton } from '@clerk/nextjs';

export default function SignOutBtn() {
  return (
    <div className="flex justify-center mt-6">
      <SignOutButton redirectUrl="/sign-in">
        <button
          type="button"
          className="px-5 py-2 rounded-lg text-sm font-medium bg-[var(--laser-green,#00ff00)] text-black hover:opacity-80 transition"
          data-testid="signout-btn"
        >
          Sign out
        </button>
      </SignOutButton>
    </div>
  );
}
