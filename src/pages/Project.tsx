import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export default function Project() {
  const { slug } = useParams();

  return (
    <>
      <Helmet>
        <title>Project - Sampath Portfolio</title>
        <meta name="description" content="Project details" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Project: {slug}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600">Project details will go here.</p>
        </div>
      </div>
    </>
  );
}
