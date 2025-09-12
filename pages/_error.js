export const config = { runtime: "edge" };

function ErrorPage({ statusCode }) {
  return (
    <main style={{maxWidth:600,margin:'60px auto',padding:'0 20px',textAlign:'center'}}>
      <h1>{statusCode || 'Error'}</h1>
      <p>Something went wrong.</p>
    </main>
  );
}

export default ErrorPage;
