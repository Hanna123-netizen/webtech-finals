'use client';

import { useQuery } from "@tanstack/react-query";
import { getUser, getUserPosts } from "@/lib/api";
import type { User, Post } from "@/lib/api";
import Link from "next/link";

export default function UserDetailPage({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id);

  const { data: user, isLoading: isLoadingUser } = useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  const { data: posts = [], isLoading: isLoadingPosts } = useQuery<Post[]>({
    queryKey: ["userPosts", userId],
    queryFn: () => getUserPosts(userId),
  });

  if (isLoadingUser || isLoadingPosts) {
    return <div className="p-6">Loading...</div>;
  }

  if (!user) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <p className="mb-2">
                <span className="font-medium">Username:</span> @{user.username}
              </p>
              <p className="mb-2">
                <span className="font-medium">Email:</span> {user.email}
              </p>
              <p className="mb-2">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
              <p className="mb-2">
                <span className="font-medium">Website:</span>{' '}
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                className="text-black hover:text-gray-800"
                >
                  {user.website}
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Address</h2>
              <p className="mb-2">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="mb-2">
                {user.address.city}, {user.address.zipcode}
              </p>
              <div className="mt-4">
                <a
                  href={`https://www.google.com/maps?q=${user.address.geo.lat},${user.address.geo.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Posts by {user.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">{post.body.slice(0, 100)}...</p>
              <Link
                href={`/POSTS/${post.id}`}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800"
              >
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}