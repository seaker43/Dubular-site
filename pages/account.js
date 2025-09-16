export const dynamic ="force-dynamic";
export default function Account() {
 return (
 <main className="main" style={{ __: 16 }}>
 <h1
 style={{
 fontWeight: 900,
 color:"#7efcff",
 fontSize:"clamp(28px,6vw,42px)",
 }}
 >
 Account
 </h1>
 <p style={{ color:"#b7c0d8", }}>
 Manage your profile, security, and preferences.
 </p>
 </main>
 );
}

export const config = { runtime: 'experimental-edge' };
