export const runtime = "experimental-edge";

function ErrorPage({ statusCode }) {
  return (
    <main style={{maxWidth:600,margin:"60px auto",padding:"0 20px",textAlign:"center"}}>
      <h1>{statusCode ? `Error ${statusCode}` : "An error occurred"}</h1>
      <p>Something went wrong.</p>
    </main>
  );
}

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
