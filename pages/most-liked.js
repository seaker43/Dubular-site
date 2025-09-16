export const dynamic ="force-dynamic";
import Layout from"../components/Layout";

export async function getServerSideProps() {
 // SSR so CF Pages doesn’t attempt static export
 return { props: {} };
}

export default function MostLikedPage() {
 return (
 <Layout title="Most Liked">
 <div className="">
 <h1 className="text-2xl font-semibold">Most Liked</h1>
 {/* TODO: render your real list component here */}
 </div>
 </Layout>
 );
}

export const config = { runtime: 'experimental-edge' };
