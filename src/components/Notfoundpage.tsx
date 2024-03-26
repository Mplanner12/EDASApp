export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-slate-800 text-gray-100 h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl">Page not found</p>
      <a href="/" className="text-blue-500 underline">
        Go back to Dasboard
      </a>
    </div>
  );
}
