"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100">
        <div className="mb-6 relative">
          <h1 className="text-9xl font-black text-gray-100">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-bounce">🔍</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8">
          Oops! The page you are looking for doesn't exist or has been moved.
          Let's get you back on track.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            href="/"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 shadow-md shadow-blue-200"
          >
            Go Back Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="w-full bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium py-3 rounded-xl transition-all border border-gray-200"
          >
            Try Refreshing
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-400">
            Need help?{" "}
            <Link href="/#" className="text-blue-500 hover:underline">
              Contact Support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
