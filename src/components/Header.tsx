import { useState, useEffect } from 'react';
import { Menu, X, Brain } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'services', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="flex items-center text-2xl font-bold">
            <Brain className="mr-2 text-ai-accent" size={28} />
            <span className="gradient-text">Swaira Riaz</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative py-2 transition-all duration-300 font-medium group ${
                  activeSection === item.href.substring(1) 
                    ? 'text-ai-accent' 
                    : 'text-ai-light hover:text-ai-accent'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-ai-accent transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.substring(1) ? 'w-full' : ''
                }`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-ai-light p-2 rounded-lg hover:bg-ai-mid transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 glass-effect rounded-xl p-4 backdrop-blur-xl">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? 'bg-ai-accent/20 text-ai-accent'
                      : 'text-ai-light hover:bg-ai-mid/50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;