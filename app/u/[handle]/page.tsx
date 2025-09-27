export const dynamic = "force-dynamic";

export default function UserPublicPage({ params }: { params: { handle: string } }) {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-semibold">
        User <span className="font-mono">/u/{params.handle}</span>
      </h1>
      <p className="opacity-70 mt-2">Viewer profile page placeholder.</p>
    </div>
  );
}
