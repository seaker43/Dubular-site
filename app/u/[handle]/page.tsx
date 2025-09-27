import ClientUserPage from "./ClientUserPage";

// Keep server file minimal to avoid "handle is not defined" during data collection.
export const dynamic = "force-dynamic";

export default function UserPublicPage() {
  return <ClientUserPage />;
}
