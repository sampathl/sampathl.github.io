import { Helmet } from 'react-helmet-async';

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects - Sampath Portfolio</title>
        <meta name="description" content="View my projects and work" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 1</h3>
            <p className="text-gray-600">Description of project 1</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 2</h3>
            <p className="text-gray-600">Description of project 2</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Project 3</h3>
            <p className="text-gray-600">Description of project 3</p>
          </div>
        </div>
      </div>
    </>
  );
}
