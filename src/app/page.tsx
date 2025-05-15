// app/page.js or pages/index.js
'use client';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to{' '}
            <span className="text-blue-600">Social Data Explorer</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Explore user profiles, posts, and comments in an interactive way.
            Visualize data patterns and connections between users and their content.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Users</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Browse through user profiles, view their details, and see their posts.
                </p>
                <div className="mt-4">
                  <Link
                    href="/USERS"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Users
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Posts</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Read posts from all users, view comments, and interact with content.
                </p>
                <div className="mt-4">
                  <Link
                    href="/POSTS"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Explore Posts
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Dashboard</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Visualize data patterns with interactive charts and statistics.
                </p>
                <div className="mt-4">
                  <Link
                    href="/DASHBOARD"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Built with Modern Technologies
          </h2>
          <div className="mt-4 flex justify-center space-x-6">
            <div className="text-gray-600">Next.js</div>
            <div className="text-gray-600">React Query</div>
            <div className="text-gray-600">Tailwind CSS</div>
            <div className="text-gray-600">ApexCharts</div>
          </div>
        </div>
      </div>
    </div>
  );
}
