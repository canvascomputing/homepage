import Image from 'next/image';
import { siteConfig } from '../config/site';

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-[#F1ECE2] relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-10 lg:gap-24 xl:gap-32">
            {/* Logo and Title - Left Side */}
            <div className="text-center mb-8 lg:mb-0">
              <div className="flex justify-center mb-8">
                <Image 
                  src="/logo.png" 
                  alt={siteConfig.labels.logoAlt} 
                  width={128} 
                  height={128} 
                  className="h-24 w-24 md:h-32 md:w-32 object-contain" 
                  priority 
                  quality={85}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
                />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-[#374049] mb-6">
                {siteConfig.content.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl text-[#666666] max-w-3xl mx-auto mb-8">
                {siteConfig.content.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-0">
                <a href={siteConfig.githubUrl} target="_blank" rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#3D709B] text-white font-semibold rounded-lg hover:bg-[#374049] transition-colors duration-200 transform-gpu will-change-transform">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {siteConfig.content.hero.buttons.github}
                </a>
                
                <a href={siteConfig.huggingFaceUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 border-4 border-[#374049] text-[#374049] font-semibold rounded-lg hover:bg-[#374049] hover:text-white transition-colors duration-200 transform-gpu will-change-transform">
                  <Image src="/hf-logo-pirate.svg" alt={siteConfig.labels.huggingFaceAlt} width={20} height={20} className="w-5 h-5 mr-2" loading="eager" />
                  {siteConfig.content.hero.buttons.huggingface}
                </a>
              </div>
            </div>

            {/* Threat Landscape Letter - Right Side (US Letter 8.5x11 ratio) */}
            <div className="w-[250px] lg:w-[280px] mt-6 sm:mt-8 md:mt-10 lg:mt-0">
              <div className="bg-white shadow-xl transform rotate-0 lg:rotate-[1deg] hover:rotate-0 transition-transform duration-300">
                <div className="p-6 font-mono" style={{ aspectRatio: '8.5/11' }}>
                  <div className="text-[#374049] h-full flex items-center">
                    <p className="text-[10px] leading-relaxed">
                      {siteConfig.content.hero.threatLandscape}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* malwi Project */}
      <section id="malwi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <div className="flex items-center justify-center mb-6">
              <Image 
                src="/malwi-logo.png" 
                alt={siteConfig.labels.malwiLogoAlt} 
                width={80} 
                height={80} 
                className="h-20 w-20 mr-4" 
                loading="lazy"
                quality={85}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QFLQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k="
              />
              <h2 className="text-4xl md:text-5xl font-bold text-[#374049]">
                malwi
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-[#666666] mb-4">
              AI Python Malware Scanner
            </p>
            <div className="w-24 h-1 bg-[#3D709B] mx-auto"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 xl:gap-28">
            <div className="text-center lg:text-left max-w-xl lg:flex-1">
              <p className="text-lg text-[#666666] mb-10 leading-relaxed">
                {siteConfig.content.malwi.description}
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center text-[#374049] lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-[#3D709B] rounded-full mr-3"></div>
                  <span className="text-base">AI-Powered Python Malware Detection</span>
                </div>
                <div className="flex items-center text-[#374049] lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-[#3D709B] rounded-full mr-3"></div>
                  <span className="text-base">Lightning-Fast Codebase Scanning</span>
                </div>
                <div className="flex items-center text-[#374049] lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-[#3D709B] rounded-full mr-3"></div>
                  <span className="text-base">100% Offline & Private</span>
                </div>
                <div className="flex items-center text-[#374049] lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-[#3D709B] rounded-full mr-3"></div>
                  <span className="text-base">Free & Open-Source</span>
                </div>
                <div className="flex items-center text-[#374049] lg:justify-start justify-center">
                  <div className="w-2 h-2 bg-[#3D709B] rounded-full mr-3"></div>
                  <span className="text-base">Developed in the EU</span>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <a href={siteConfig.content.malwi.githubUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-10 py-4 bg-[#3D709B] text-white font-semibold rounded-lg hover:bg-[#374049] transition-colors duration-200 transform-gpu will-change-transform shadow-lg hover:shadow-xl">
                  <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  {siteConfig.content.malwi.buttonText}
                </a>
              </div>
            </div>
            
            {/* Visual Element - Code Preview */}
            <div className="lg:flex-shrink-0 mt-8 lg:mt-0">
              <div className="bg-[#1a1a1a] text-gray-300 font-mono text-xs p-6 rounded-lg shadow-2xl w-full max-w-3xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-1 text-[10px] leading-relaxed whitespace-pre-wrap">
                  <div className="text-green-400">$ <span className="text-blue-400">malwi</span> <span className="text-yellow-400">scan</span> <span className="text-purple-400">discordpydebug-0.0.4/</span></div>
                  <div className="text-gray-300 mt-2">- target: discordpydebug-0.0.4/</div>
                  <div className="text-gray-300">- seconds: 1.87</div>
                  <div className="text-gray-300">- files: 14</div>
                  <div className="text-gray-300">  ├── scanned: 4 (.py)</div>
                  <div className="text-gray-300">  ├── skipped: 10 (.cfg, .md, .toml, .txt)</div>
                  <div className="text-gray-300">  └── suspicious:</div>
                  <div className="text-gray-300">      └── discordpydebug-0.0.4/src/discordpydebug/__init__.py</div>
                  <div className="text-gray-300">          └─── module</div>
                  <div className="text-gray-300">              ├── process management</div>
                  <div className="text-gray-300">              ├── deserialization</div>
                  <div className="text-gray-300">              ├── system interaction</div>
                  <div className="text-gray-300">              └── user io</div>
                  <div className="text-yellow-400 animate-pulse mt-2">█</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#374049] mb-12">
            {siteConfig.content.sections.about}
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
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-[#374049] font-semibold rounded-lg hover:bg-gray-100 transition-colors transform-gpu will-change-transform">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              {siteConfig.content.contact.buttons.github}
            </a>
            <a href="https://huggingface.co/canvascomputing" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#374049] transition-colors transform-gpu will-change-transform group">
              <Image src="/hf-logo-pirate.svg" alt={siteConfig.labels.huggingFaceAlt} width={20} height={20} className="w-5 h-5 mr-2" />
              {siteConfig.content.contact.buttons.huggingface}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#374049] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            {/* Impressum */}
            <div>
              <p className="text-xs font-semibold mb-2">{siteConfig.content.sections.impressum}</p>
              <div className="text-xs space-y-1">
                <p>{siteConfig.content.impressum.company}</p>
                <p>{siteConfig.content.impressum.address.line1}</p>
                <p>{siteConfig.content.impressum.address.line2}</p>
                <p>{siteConfig.content.impressum.address.line3}</p>
                <p className="mt-2">
                  <a href={`mailto:${siteConfig.content.impressum.email}`} 
                     className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.content.impressum.email}
                  </a>
                </p>
                <p>
                  <a href={siteConfig.content.impressum.secondaryContact.url} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    {siteConfig.content.impressum.secondaryContact.text}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}