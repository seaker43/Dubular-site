// pages/signup.js
import Head from "next/head";

export default function Signup() {
  return (
    <>
      <Head>
        <title>Sign up – Dubular</title>
        <meta
          name="description"
          content="Create your Dubular account to start dubbing videos."
        />
      </Head>

      <main
        style={{
          maxWidth: 600,
          margin: "60px auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h1>Sign up</h1>
        <p>
          🚀 This is a placeholder page. In production you’ll add your actual
          signup form.
        </p>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            marginTop: "28px",
          }}
        >
          <input type="text" placeholder="Name" style={input} />
          <input type="email" placeholder="Email" style={input} />
          <input type="password" placeholder="Password" style={input} />
          <button style={btn}>Create account</button>
        </form>
      </main>
    </>
  );
}

const input = {
  padding: "10px 14px",
  borderRadius: 8,
  border: "1px solid #444",
  background: "#111",
  color: "#eee",
};

const btn = {
  padding: "12px",
  borderRadius: 8,
  background: "#2ac1ff",
  color: "#000",
  border: "none",
  fontWeight: 600,
  cursor: "pointer",
};
