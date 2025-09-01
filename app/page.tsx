import Image from 'next/image';
import { siteConfig } from '../config/site';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#F1ECE2]">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image src="/logo.png" alt="Canvas Computing" width={128} height={128} className="h-24 w-24 md:h-32 md:w-32" priority />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-[#374049] mb-6">
              {siteConfig.content.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto mb-8">
              {siteConfig.content.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" 
                className="inline-flex items-center justify-center px-8 py-3 bg-[#3D709B] text-white font-semibold rounded-lg hover:bg-[#374049] transition-colors duration-200">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              
              <a href={siteConfig.huggingFaceUrl} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border-4 border-[#374049] text-[#374049] font-semibold rounded-lg hover:bg-[#374049] hover:text-white transition-colors duration-200">
                <Image src="/hf-logo-pirate.svg" alt="Hugging Face" width={20} height={20} className="w-5 h-5 mr-2" />
                Hugging Face
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* malwi Project */}
      <section id="malwi" className="py-20 bg-[#F1ECE2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image src="/malwi-logo.png" alt="malwi Logo" width={64} height={64} className="h-16 w-16 mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-[#374049]">
                {siteConfig.content.malwi.title}
              </h2>
            </div>
            <p className="text-lg text-[#666666] max-w-4xl mx-auto mb-8">
              {siteConfig.content.malwi.description}
            </p>
            <a href={siteConfig.content.malwi.githubUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#3D709B] text-white font-semibold rounded-lg hover:bg-[#374049] transition-colors duration-200">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View malwi on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#374049] mb-12">
            About Us
          </h2>
          
          {/* Mission Content */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="prose prose-lg mx-auto text-center">
              {siteConfig.content.mission.description.map((paragraph, index) => (
                <p key={index} className="text-lg text-[#666666] mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#374049]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            {siteConfig.content.contact.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            {siteConfig.content.contact.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/canvascomputing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#374049] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              Contribute on GitHub
            </a>
            <a href="https://huggingface.co/canvascomputing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#374049] transition-colors group">
              <Image src="/hf-logo-pirate.svg" alt="Hugging Face" width={20} height={20} className="w-5 h-5 mr-2" />
              View Models
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374049] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p className="mb-2">© 2025 Canvas Computing</p>
            <p className="text-sm">Building AI-based security software for protecting European freedom</p>
          </div>
        </div>
      </footer>
    </div>
  );
}