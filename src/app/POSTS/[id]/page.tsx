'use client';
import { useQuery } from '@tanstack/react-query';
import { getPost, getPostComments, getUser } from '@/lib/api';
import type { Post, Comment, User } from '@/lib/api';
import Link from 'next/link';

export default function PostPage({ params }: { params: { id: string } }) {
  const postId = parseInt(params.id);

  const { data: post, isLoading: isLoadingPost } = useQuery<Post>({
    queryKey: ['post', postId],
    queryFn: () => getPost(postId),
  });

  const { data: comments = [], isLoading: isLoadingComments } = useQuery<
    Comment[]
  >({
    queryKey: ['postComments', postId],
    queryFn: () => getPostComments(postId),
    enabled: !!post,
  });

  const { data: author } = useQuery<User>({
    queryKey: ['user', post?.userId],
    queryFn: () => getUser(post!.userId),
    enabled: !!post,
  });

  if (isLoadingPost || isLoadingComments) {
    return <div className="p-6">Loading...</div>;
  }

  if (!post) {
    return <div className="p-6">Post not found</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <article className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        {author && (
          <Link
            href={`/USERS/${author.id}`}
            className="text-gray-600 hover:text-gray-800 mb-4 block"
          >
            By {author.name}
          </Link>
        )}
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {post.body}
        </p>
      </article>

      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="bg-white rounded-lg shadow p-4"
            >
              <div className="flex items-center mb-2">
                <h3 className="font-semibold">{comment.name}</h3>
                <span className="mx-2">•</span>
                <a
                  href={`mailto:${comment.email}`}
                  className="text-gray-600 hover:text-gray-800"
                >
                  {comment.email}
                </a>
              </div>
              <p className="text-gray-700">{comment.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
} 