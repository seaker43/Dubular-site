export const config = { runtime: "experimental-edge" };

function ErrorPage({ statusCode }) {
  return (
    <main style={{padding:20,fontFamily:'system-ui, sans-serif'}}>
      <h1>Something went wrong</h1>
      <p>{statusCode ? `Error ${statusCode}` : 'An error occurred on client'}</p>
    </main>
  );
}

// Keep this to show the HTTP status when available.
ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
