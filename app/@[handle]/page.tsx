import FollowButton from "../../components/FollowButton";

export default function ChannelPage({ params }: { params: { handle: string } }) {
  // For now we just render the handle and a follow button tied to a predictable channelId.
  // When your channel API is wired client-side, pass the real channelId.
  const channelId = `channel:demo-user-1`; // placeholder; replace with fetched channel.ownerId mapping

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
