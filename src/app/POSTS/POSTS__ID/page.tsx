'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(setPost);

    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then(res => res.json())
      .then(setComments);
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{post.title}</h1>
      <p className="mb-4">{post.body}</p>

      <h2 className="text-lg font-semibold mt-6 mb-2">Comments</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mb-2">
            <p className="font-semibold">{comment.name}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}