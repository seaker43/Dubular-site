"use client";
import FollowButton from "../../components/FollowButton";

export default function ChannelPage({ params }: { params: { handle: string } }) {
  const channelId = `channel:demo-user-1`; // placeholder until real mapping
  return (
    <div className="p-4 text-white">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">
          Channel <span className="font-mono">@{params.handle}</span>
        </h1>
        <FollowButton channelId={channelId} />
      </div>
      <p className="opacity-70 mt-2">Public channel page placeholder.</p>
    </div>
  );
}
