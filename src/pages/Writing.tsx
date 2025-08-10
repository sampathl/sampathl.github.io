import { Helmet } from 'react-helmet-async';

export default function Writing() {
  return (
    <>
      <Helmet>
        <title>Writing - Sampath Portfolio</title>
        <meta name="description" content="Articles and writing samples" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Writing</h1>
        <div className="space-y-6">
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Article 1</h2>
            <p className="text-gray-600 mb-4">Excerpt from article 1...</p>
            <button className="text-blue-600 hover:underline">Read more</button>
          </article>
          <article className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">Article 2</h2>
            <p className="text-gray-600 mb-4">Excerpt from article 2...</p>
            <button className="text-blue-600 hover:underline">Read more</button>
          </article>
        </div>
      </div>
    </>
  );
}
