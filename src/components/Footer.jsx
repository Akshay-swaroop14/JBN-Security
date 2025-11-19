import logo from '../assets/logo.jpeg';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const quickLinks = ['Home', 'Services', 'About', 'Why Choose Us', 'Contact'];
  const services = [
    'Armed Security',
    'Surveillance Systems',
    'Corporate Security',
    'Personal Security',
    'Event Security',
  ];

  return (
    <footer className="bg-slate-900 text-gray-200 border-t-4 border-yellow-500">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <img
                  src={logo} // 🔹 Replace with your logo
                  alt="JBN Logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-white">
                JBN Security Services
              </h3>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              A trusted security & manpower service provider with over 15 years
              of experience protecting businesses, industries, and individuals
              across India.
            </p>
            <div className="flex space-x-3">
              <span className="bg-yellow-500 text-black px-3 py-1 rounded text-sm font-semibold shadow">
                Licensed
              </span>
              <span className="bg-slate-800 text-yellow-400 px-3 py-1 rounded text-sm font-semibold shadow">
                Certified
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-yellow-500 mb-4 text-lg">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      scrollToSection(link.toLowerCase().replace(' ', '-'))
                    }
                    className="text-gray-400 hover:text-yellow-400 transition-all duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-bold text-yellow-500 mb-4 text-lg">
              Our Services
            </h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-gray-400 hover:text-yellow-400 transition-all duration-300">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Emergency Contact */}
          <div>
            <h4 className="font-bold text-yellow-500 mb-4 text-lg">
              Emergency Contact
            </h4>
            <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-black rounded-lg p-6 shadow-lg border border-yellow-400/40">
              <div className="text-lg font-bold mb-2">24/7 Hotline</div>
              <div className="text-2xl font-extrabold tracking-wide mb-1">
                +91 99999 11111
              </div>
              <p className="text-sm font-medium">
                Always on alert for your protection
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} JBN Security Services. All rights
            reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <button className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
