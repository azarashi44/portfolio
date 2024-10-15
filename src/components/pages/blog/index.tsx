import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Button from '@/components/shared/button';


const BlogIndex: React.FC = () => {
  return (
    <>
      <Head>
        <title>ブログ記事一覧</title>
        <meta name="description" content="ブログ記事の一覧ページです" />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold mb-6 text-green-500">ブログ記事一覧</h1>
        <ul className="space-y-4">
          <li>
            <Link href="/blog/first-post" className="text-blue-600 hover:underline">
              最初の投稿
            </Link>
          </li>
          {/* 他の記事へのリンクをここに追加 */}
        </ul>
        <Button>次のページ</Button>

      </main>
    </>
  );
};

export default BlogIndex;
