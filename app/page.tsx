export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      Sanity dataset value : {process.env.NEXT_PUBLIC_SANITY_DATASET}
    </div>
  );
}
