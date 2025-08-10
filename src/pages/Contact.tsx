import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact - Sampath Portfolio</title>
        <meta name="description" content="Get in touch with Sampath" />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-4">
              I'm always interested in new opportunities and collaborations.
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> sampath@example.com</p>
              <p><strong>LinkedIn:</strong> linkedin.com/in/sampath</p>
              <p><strong>GitHub:</strong> github.com/sampath</p>
            </div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-md"></textarea>
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
