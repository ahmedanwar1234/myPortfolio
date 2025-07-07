import React from 'react'

const About = () => {
  return (
    <section className="mt-8 border-t-2 border-black pt-6">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Column - Headshot */}
        <div className="w-full md:w-1/3 border-2 border-black p-2 bg-amber-50">
          <div className="border border-black p-1">
            <div className="bg-gray-300 h-64 flex items-center justify-center">
              <span className="font-oldStandard italic">[YOUR PORTRAIT]</span>
            </div>
            <p className="font-oldStandard text-center mt-2 text-sm">
              "Full-stack architect specializing in modern web solutions"
            </p>
          </div>
        </div>

        {/* Right Column - Bio */}
        <div className="w-full md:w-2/3">
          <h2 className="font-oldStandard text-3xl font-bold uppercase mb-4 border-b-2 border-black pb-2">
            THE DEVELOPER CHRONICLE
          </h2>
          <p className="font-oldStandard text-justify leading-relaxed mb-4">
            Seasoned MERN stack developer with 5+ years crafting robust web applications. 
            My expertise bridges the gap between elegant frontend interfaces and 
            high-performance backend systems.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-oldStandard font-bold uppercase text-lg border-l-4 border-black pl-2">
                Technical Focus
              </h3>
              <ul className="font-oldStandard list-disc pl-5 mt-2 space-y-1">
                <li>React & Next.js Architecture</li>
                <li>Node.js Microservices</li>
                <li>MongoDB Optimization</li>
              </ul>
            </div>
            <div>
              <h3 className="font-oldStandard font-bold uppercase text-lg border-l-4 border-black pl-2">
                Methodology
              </h3>
              <ul className="font-oldStandard list-disc pl-5 mt-2 space-y-1">
                <li>Test-Driven Development</li>
                <li>CI/CD Pipelines</li>
                <li>Agile Collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
