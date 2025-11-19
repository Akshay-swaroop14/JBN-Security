const Footer = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
  }

  const quickLinks = ['Home', 'Services', 'About', 'Why Choose Us', 'Contact']
  const services = ['Armed Security', 'Surveillance', 'Corporate Security', 'Personal Security', 'Event Security']

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">JBN Management & Protection</h3>
            <p className="text-slate-400 mb-4">
              Professional security services provider with over 15 years of experience in protecting businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Licensed
              </div>
              <div className="bg-slate-700 text-white px-3 py-1 rounded text-sm font-semibold">
                Certified
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.toLowerCase().replace(' ', '-'))}
                    className="text-slate-400 hover:text-white transition-colors duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button className="text-slate-400 hover:text-white transition-colors duration-300">
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Emergency Contact</h4>
            <div className="bg-emerald-600 rounded-lg p-4">
              <div className="text-lg font-bold mb-2">24/7 Hotline</div>
              <div className="text-xl font-semibold">+1 (555) 987-6543</div>
              <p className="text-emerald-100 text-sm mt-2">Available for urgent security needs</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 JBN Management & Protection. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <button className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="text-slate-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer