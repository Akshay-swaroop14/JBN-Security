import { useState, useEffect } from 'react';
import logo from '../assets/logo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'about', 'why-choose-us', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Services', id: 'services' },
    { label: 'About Us', id: 'about' },
    { label: 'Why Choose Us', id: 'why-choose-us' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2 border-b border-yellow-400/40'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
             <div className="w-14 h-14 flex items-center justify-center">
    <img
      src={logo}
      alt="JBN Logo"
      className="w-full h-full object-contain"
    />
  </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-slate-900 tracking-tight">
                <span className="text-yellow-500">JBN</span> Security
              </h1>
              <p className="text-xs text-gray-600 font-medium">
                MANPOWER & PROTECTION SERVICES
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-yellow-600 bg-yellow-50 border-b-2 border-yellow-500'
                    : 'text-slate-700 hover:text-yellow-600 hover:bg-yellow-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-6 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Quote
            </button>
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="text-right">
              <div className="text-sm font-semibold text-gray-900">
                Emergency Support
              </div>
              <div className="text-yellow-600 font-bold">(080) 123-4567</div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-yellow-50 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-yellow-400/40 mt-4 bg-white/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-yellow-600 bg-yellow-50 border-r-4 border-yellow-500'
                      : 'text-gray-700 hover:text-yellow-600 hover:bg-yellow-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="px-4 py-3 border-t border-yellow-400/30 mt-4">
                <div className="text-sm font-semibold text-gray-900 mb-1">
                  Emergency Support
                </div>
                <div className="text-yellow-600 font-bold text-lg">
                  (080) 123-4567
                </div>
                <p className="text-xs text-gray-600 mt-1">24/7 Available</p>
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className="mx-4 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-3.5 rounded-lg font-semibold shadow-md transition-all duration-300"
              >
                Get Free Quote
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
