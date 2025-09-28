'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { follow, unfollow, listFollowing } from '@/lib/api/follow';

export default function FollowButton({ creatorId: propCreatorId }: { creatorId?: number }) {
  const params = useParams() as { handle?: string };
  const [creatorId, setCreatorId] = useState<number | undefined>(propCreatorId);
  const [userId, setUserId] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetch('/api/user/self').then(r => r.ok ? r.json() : null);
        if (me?.ok && typeof me.user?.id === 'number') setUserId(me.user.id);
      } catch {}
      if (!creatorId) {
        const handle = params?.handle as string | undefined;
        if (handle) {
          try {
            const res = await fetch(`/api/creators?handle=${encodeURIComponent(handle)}`).then(r => r.json());
            const id = res?.creators?.[0]?.id;
            if (typeof id === 'number') setCreatorId(id);
          } catch {}
        }
      }
    })();
  }, [params]);

  useEffect(() => {
    (async () => {
      if (!userId || !creatorId) { setLoading(false); return; }
      try {
        const res = await listFollowing(userId);
        const ids = Array.isArray(res?.creators) ? res.creators.map((c: any) => c.creator_id ?? c.id) : [];
        setIsFollowing(ids.includes(creatorId));
      } finally {
        setLoading(false);
      }
    })();
  }, [userId, creatorId]);

  async function toggle() {
    if (!userId || !creatorId) return;
    setLoading(true);
    try {
      const res = await (isFollowing ? unfollow(userId, creatorId) : follow(userId, creatorId));
      if (res?.ok) setIsFollowing(!isFollowing);
    } finally {
      setLoading(false);
    }
  }

  if (!creatorId || !userId) return null;

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`px-4 py-2 rounded-2xl shadow ${isFollowing ? 'bg-gray-200' : 'bg-black text-white'}`}
      aria-pressed={isFollowing}
    >
      {loading ? '…' : isFollowing ? 'Following' : 'Follow'}
    </button>
  );
}
