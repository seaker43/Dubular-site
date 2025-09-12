// Minimal Edge-compatible error page for Pages Router
export const config = { runtime: 'edge' }

function ErrorPage({ statusCode }) {
  return (
    <main style={{maxWidth:600,margin:"60px auto",padding:"0 20px",textAlign:"center"}}>
      <h1>Something went wrong</h1>
      <p>{statusCode ? `Error ${statusCode}` : "An unexpected error occurred."}</p>
      <p><a href="/">Back home</a></p>
    </main>
  );
}

// Preserve status code when available
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res?.statusCode ?? err?.statusCode ?? 404;
  return { statusCode };
};

export default ErrorPage;
