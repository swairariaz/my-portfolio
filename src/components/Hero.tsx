import { useState } from 'react';
import { Github, Linkedin, Mail, Download, Cpu, BrainCircuit, Code } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
  const roles = [
    'AI Engineer',
    'Machine Learning Specialist',
    'Data Scientist',
    'Deep Learning Engineer'
  ];
  
  const currentText = useTypewriter(roles, 100, 2000);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:swairariaz101@gmail.com';
  };

  const handleDownloadClick = () => {
    const link = document.createElement('a');
    link.href = './Swaira Riaz.pdf';
    link.download = 'Swaira_Riaz_AI_Engineer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      {/* Advanced Cyber Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10 md:opacity-20">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0wIDBoMTAwdjEwMEgweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDZiNmQ0IiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMiIvPjwvc3ZnPg==')]"></div>
      </div>

      {/* Animated Neural Network Lines */}
      <div className="absolute inset-0 z-0 opacity-20 md:opacity-30">
        <svg width="100%" height="100%" className="absolute inset-0">
          <defs>
            <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#6366f1" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path d="M10,50 Q200,30 300,100 T500,80" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse" />
          <path d="M50,200 Q150,150 400,180 T600,120" stroke="url(#neuralGradient)" strokeWidth="0.5" fill="none" className="animate-pulse delay-1000" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center">
          {/* Left Content - Bio */}
          <div className="w-full lg:w-7/12 text-center lg:text-left" data-aos="fade-right">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Hi, I'm <span className="gradient-text">Swaira Riaz</span>
            </h1>
            
            <div className="h-16 md:h-20 mb-4 md:mb-6 flex items-center justify-center lg:justify-start">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-400 font-mono">
                {currentText}<span className="animate-pulse">|</span>
              </h2>
            </div>
            
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transforming complex business challenges into intelligent AI solutions with cutting-edge 
              machine learning and deep learning technologies. Specializing in end-to-end AI system 
              development and deployment.
            </p>

            <p className="text-sm md:text-base text-blue-400/80 mb-6 md:mb-8 border-l-4 border-blue-400 pl-4 py-2 max-w-2xl mx-auto lg:mx-0">
              2+ years of experience in production AI systems • MLOPs • Computer Vision • NLP
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-6 md:mb-8 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-3 md:px-6 md:py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-2 group text-sm md:text-base"
              >
                <Code size={18} />
                View Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-3 md:px-6 md:py-3 bg-gray-800 border border-gray-700 rounded-md text-gray-200 font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300 group text-sm md:text-base"
              >
                Start Conversation
              </button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-3 mb-8 md:mb-10">
              <a 
                href="https://github.com/swairariaz" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-gray-800 rounded-md hover:bg-blue-600 transition-all duration-300 group relative"
                aria-label="GitHub Profile"
                onMouseEnter={() => setIsHovering('github')}
                onMouseLeave={() => setIsHovering(null)}
              >
                <Github size={18} className="text-gray-400 group-hover:text-white" />
                {isHovering === 'github' && (
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap border border-gray-700 hidden md:block">
                    GitHub Profile
                  </span>
                )}
              </a>
              <a 
                href="https://www.linkedin.com/in/swaira-riaz-4b946330a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 bg-gray-800 rounded-md hover:bg-blue-700 transition-all duration-300 group relative"
                aria-label="LinkedIn Profile"
                onMouseEnter={() => setIsHovering('linkedin')}
                onMouseLeave={() => setIsHovering(null)}
              >
                <Linkedin size={18} className="text-gray-400 group-hover:text-white" />
                {isHovering === 'linkedin' && (
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap border border-gray-700 hidden md:block">
                    LinkedIn Profile
                  </span>
                )}
              </a>
              <button
                onClick={handleEmailClick}
                className="p-2.5 md:p-3 bg-gray-800 rounded-md hover:bg-green-600 transition-all duration-300 group relative"
                aria-label="Email Me"
                onMouseEnter={() => setIsHovering('email')}
                onMouseLeave={() => setIsHovering(null)}
              >
                <Mail size={18} className="text-gray-400 group-hover:text-white" />
                {isHovering === 'email' && (
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap border border-gray-700 hidden md:block">
                    Email: swairariaz101@gmail.com
                  </span>
                )}
              </button>
              <button
                onClick={handleDownloadClick}
                className="p-2.5 md:p-3 bg-gray-800 rounded-md hover:bg-purple-600 transition-all duration-300 group relative"
                aria-label="Download Resume"
                onMouseEnter={() => setIsHovering('resume')}
                onMouseLeave={() => setIsHovering(null)}
              >
                <Download size={18} className="text-gray-400 group-hover:text-white" />
                {isHovering === 'resume' && (
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap border border-gray-700 hidden md:block">
                    Download My Resume
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right Content - Profile Picture */}
          <div className="w-full lg:w-5/12 flex justify-center" data-aos="fade-left" data-aos-delay="300">
            <div className="relative">
              {/* Main Profile Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
                {/* Outer Cyber Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur-md animate-pulse"></div>
                
                {/* Profile Frame */}
                <div className="relative rounded-full p-1 bg-gradient-to-r from-blue-500 to-blue-600">
                  <div className="rounded-full p-1 bg-gray-900">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden border border-gray-700 relative">
                      {/* Profile Picture */}
                      <div className="w-52 h-52 sm:w-60 sm:h-60 md:w-68 md:h-68 lg:w-76 lg:h-76 rounded-full bg-gray-800 flex items-center justify-center relative overflow-hidden">
                        <img 
                          src="./profile_picture.jpg" 
                          alt="Swaira Riaz - AI Engineer"
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Holographic Scan Lines */}
                        <div className="absolute inset-0 rounded-full bg-[linear-gradient(to_bottom,transparent_50%,rgba(6,182,212,0.1)_50%)] bg-[length:100%_4px]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating AI Elements */}
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                    <Cpu size={14} className="text-blue-400 sm:text-base" />
                  </div>
                </div>
                
                <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3">
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-blue-600/10 border border-blue-600/30 flex items-center justify-center">
                    <BrainCircuit size={12} className="text-blue-500 sm:text-sm" />
                  </div>
                </div>
              </div>

              {/* Professional Status Badge */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="flex items-center bg-gray-900/90 border border-gray-700 rounded-full px-3 py-1.5 md:px-4 md:py-2 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-xs text-gray-300 font-medium">Open to opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-12 md:mt-16">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-blue-400/60 hover:text-blue-400 transition-colors animate-bounce"
            aria-label="Scroll to learn more"
          >
            <div className="flex flex-col items-center">
              <span className="text-xs mb-2 text-gray-500">Explore my work</span>
              <div className="w-6 h-10 border-2 border-blue-400/40 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400/60 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 z-0 opacity-5 md:opacity-10 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-blue-400/20 font-mono text-xs animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
              fontSize: '10px'
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;