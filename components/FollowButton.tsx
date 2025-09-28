'use client';

import { useEffect, useMemo, useState } from 'react';
import { follow, unfollow, listFollowing } from '@/lib/api/follow';

type Props = {
  /** Pass the creator's numeric id if you already have it (preferred). */
  creatorId?: number;
  /** Optional override; if omitted we'll read /api/user/self */
  userId?: number;
};

export default function FollowButton({ creatorId: pCreatorId, userId: pUserId }: Props) {
  const [userId, setUserId] = useState<number | null>(pUserId ?? null);
  const [creatorId, setCreatorId] = useState<number | null>(pCreatorId ?? null);
  const [isFollowing, setIsFollowing] = useState(false);
  const [loading, setLoading] = useState(false);

  // If ids were passed via props, lock them in
  useEffect(() => {
    if (typeof pUserId === 'number') setUserId(pUserId);
    if (typeof pCreatorId === 'number') setCreatorId(pCreatorId);
  }, [pUserId, pCreatorId]);

  // Fetch self user if needed
  useEffect(() => {
    if (userId != null) return;
    (async () => {
      try {
        const r = await fetch('/api/user/self').then(r => r.json());
        if (r?.ok && typeof r?.user?.id === 'number') setUserId(r.user.id);
      } catch {}
    })();
  }, [userId]);

  // If we still don't have creatorId, try to infer from URL (u/[handle] page)
  useEffect(() => {
    if (creatorId != null) return;
    (async () => {
      try {
        // Try reading handle from current pathname and look up creators API
        const handle = typeof window !== 'undefined'
          ? window.location.pathname.split('/').filter(Boolean).pop()
          : undefined;
        if (!handle) return;
        const res = await fetch(`/api/creators?handle=${encodeURIComponent(handle)}`).then(r => r.json());
        const id = res?.creators?.[0]?.id;
        if (typeof id === 'number') setCreatorId(id);
      } catch {}
    })();
  }, [creatorId]);

  // Check follow state once both IDs are known
  useEffect(() => {
    if (userId == null || creatorId == null) return;
    (async () => {
      setLoading(true);
      try {
        const res = await listFollowing(userId);
        const ids: number[] = Array.isArray(res?.creators)
          ? res.creators.map((c: any) => c.creator_id ?? c.id)
          : [];
        setIsFollowing(ids.includes(creatorId));
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId, creatorId]);

  const canRender = useMemo(() => userId != null && creatorId != null, [userId, creatorId]);
  if (!canRender) return null;

  async function toggle() {
    if (userId == null || creatorId == null) return;
    setLoading(true);
    try {
      const res = await (isFollowing ? unfollow(userId, creatorId) : follow(userId, creatorId));
      if (res?.ok) setIsFollowing(!isFollowing);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`px-4 py-2 rounded-2xl shadow ${isFollowing ? 'bg-gray-200' : 'bg-black text-white'}`}
      aria-pressed={isFollowing}
    >
      {loading ? '...' : (isFollowing ? 'Following' : 'Follow')}
    </button>
  );
}
