'use client';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { getUsers } from '@/lib/api';
import type { User } from '@/lib/api';

export default function UsersPage() {
  const { data: users = [], isLoading, error } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn: getUsers,
  });

  if (isLoading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="text-red-500">Error loading users</div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-2">@{user.username}</p>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <Link
              href={`/USERS/${user.id}`}
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}