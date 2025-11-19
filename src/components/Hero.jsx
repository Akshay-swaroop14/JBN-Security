import heroBg from '../assets/j.jfif'; // your background image
import logo from '../assets/logo.jpeg';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-24 min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 text-white mb-12 lg:mb-0 lg:mr-12">
            {/* Tagline */}
            <div className="inline-flex items-center bg-yellow-500/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-6 py-3 mb-8">
              <div className="w-3 h-3 bg-amber-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-semibold text-yellow-100">
                ISO Certified Security Agency in India
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="text-yellow-400">JBN Security Services</span>
              <br />
              <span className="text-white">Committed to Protection</span>
              <br />
              <span className="text-red-400">Driven by Excellence.</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
              At JBN Security Services, we deliver elite protection solutions
              backed by experience, trust, and technology. Your safety is our
              mission — and we uphold it with integrity and pride.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded font-bold transition-colors duration-300 flex items-center justify-center group shadow-lg"
              >
                LEARN MORE
                <svg
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-4 rounded font-bold transition-colors duration-300 flex items-center justify-center group"
              >
                CONTACT US
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-yellow-400/40">
              {[
                { number: '1000+', label: 'Security Personnel' },
                { number: '24/7', label: 'Active Support' },
                { number: '15+', label: 'Years Experience' },
                { number: '50+', label: 'Cities Covered' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-200 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-md">
            <div className="bg-yellow-500/10 backdrop-blur-lg rounded-xl p-8 border border-yellow-400/30 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <img
                    src={logo} 
                    alt="JBN Logo"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">
                  Certified & Trusted Agency
                </h3>
                <p className="text-gray-200 text-sm">
                  ISO 9001:2015 Certified | Recognized by PSARA
                </p>
              </div>

              {/* Badges */}
              <div className="space-y-4">
                {[
                  'Licensed & Verified Agency',
                  'Background Verified Guards',
                  '24/7 CCTV Monitoring',
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-black/30 rounded-lg border border-yellow-400/20"
                  >
                    <span className="text-gray-100 text-sm">{text}</span>
                    <svg
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>

              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-3 rounded-lg font-bold transition-colors duration-300 mt-6 shadow-lg">
                Get a Free Security Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
