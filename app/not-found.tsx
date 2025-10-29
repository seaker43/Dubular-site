export const runtime = 'edge';
export const dynamic = 'force-static';

export default function NotFound(){
  return (
    <main className='min-h-[var(--vvh)] grid place-items-center p-8 text-center'>
      <div>
        <h1 className='text-2xl font-bold'>404</h1>
        <p className='opacity-80'>This page could not be found.</p>
      </div>
    </main>
  );
}
