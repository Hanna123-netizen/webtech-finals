'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { ApexOptions } from 'apexcharts';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export default function DashboardPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(setUsers);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(setPosts);
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(res => res.json())
      .then(setComments);
  }, []);

  const options: ApexOptions = {
    chart: { type: 'bar', toolbar: { show: false } },
    plotOptions: { bar: { horizontal: false, columnWidth: '50%' } },
    dataLabels: { enabled: true },
    xaxis: { categories: ['Users', 'Posts', 'Comments'], title: { text: 'Categories' } },
    yaxis: { title: { text: 'Count' } },
    tooltip: { enabled: true },
    legend: { show: true, position: 'top' },
    grid: { show: true, borderColor: '#e0e0e0' },
  };

  const series = [
    { name: 'Count', data: [users.length, posts.length, comments.length] },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}
