import { Link, Outlet } from "react-router-dom";
// Outlet is တစ်ခုပီးမ တစ်ခု တစ်ခု အောက်မှာ တခု (မင်းပီး ရင် ငါ )
function AuthLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="text-2xl font-bold tracking-tight text-black">
            MERN Blog
          </Link>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
