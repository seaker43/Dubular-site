import Head from "next/head";

export default function Signup() {
  return (
    <>
      <Head><title>Sign up • Dubular</title></Head>
      <main style={{maxWidth:600,margin:"60px auto",padding:"0 20px",textAlign:"center"}}>
        <h1>Sign up</h1>
        <p>This is a safe placeholder page. Replace it with your real sign-up form later.</p>
        <p><a href="/">← Back home</a></p>
      </main>
    </>
  );
}

export async function getServerSideProps(){ return { props: {} }; }
