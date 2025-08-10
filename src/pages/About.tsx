import { Helmet } from 'react-helmet-async';

export default function About() {
  return (
    <>
      <Helmet>
        <title>About - Sampath Portfolio</title>
        <meta name="description" content="Learn more about Sampath" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-gray-600 mb-4">
            Hi, I'm Sampath. I'm passionate about technology and creating amazing user experiences.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-3 rounded">React</div>
            <div className="bg-gray-100 p-3 rounded">TypeScript</div>
            <div className="bg-gray-100 p-3 rounded">Node.js</div>
            <div className="bg-gray-100 p-3 rounded">Python</div>
            <div className="bg-gray-100 p-3 rounded">AWS</div>
            <div className="bg-gray-100 p-3 rounded">Docker</div>
          </div>
        </div>
      </div>
    </>
  );
}
