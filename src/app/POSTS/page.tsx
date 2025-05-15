'use client';
import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/lib/api';
import type { Post } from '@/lib/api';
import Link from 'next/link';

export default function PostsPage() {
  const { data: posts = [], isLoading, error } = useQuery<Post[]>({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="text-red-500">Error loading posts</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">All Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6"
          >
            <h2 className="text-xl font-semibold mb-3 line-clamp-2">
              <Link href={`/POSTS/${post.id}`} className="text-blue-600 underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-3">{post.body}</p>
            <div className="flex justify-between items-center">
              <Link
                href={`/POSTS/${post.id}`}
                className="text-blue-600 hover:text-blue-800"
              >
                Read more
              </Link>
              <Link
                href={`/USERS/${post.userId}`}
                className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800"
              >
                View Author
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}