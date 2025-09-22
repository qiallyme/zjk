import { personalData } from "@/utils/data/personal-data";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Hello, I&apos;m <span className="text-pink-500">{personalData.name}</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">{personalData.designation}</p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            {personalData.description}
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href={personalData.resume} 
              className="bg-gradient-to-r from-pink-500 to-violet-600 px-8 py-3 rounded-full hover:scale-105 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            <a 
              href="#contact" 
              className="border border-pink-500 px-8 py-3 rounded-full hover:bg-pink-500 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-300 leading-relaxed">
            {personalData.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to work together? Let&apos;s connect!
          </p>
          <div className="space-y-4">
            <p className="text-gray-400">Email: {personalData.email}</p>
            <p className="text-gray-400">Phone: {personalData.phone}</p>
            <p className="text-gray-400">Location: {personalData.address}</p>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a 
              href={personalData.github} 
              className="text-pink-500 hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a 
              href={personalData.linkedIn} 
              className="text-pink-500 hover:text-pink-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
};