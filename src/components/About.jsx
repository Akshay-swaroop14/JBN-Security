const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 lg:mr-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              About <span className="text-yellow-500">JBN Security Services</span>
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <strong className="text-yellow-600">JBN Security & Manpower Services</strong> is one of India’s most trusted
              professional security providers, delivering high-quality manpower, surveillance, and protection services
              for over <span className="font-semibold text-slate-900">15 years</span>. We take pride in maintaining excellence, discipline,
              and reliability across every assignment.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              From <strong>industrial complexes</strong> and <strong>corporate campuses</strong> to
              <strong> residential communities</strong>, we deploy trained and verified personnel to safeguard your people
              and property with utmost commitment.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Every JBN officer undergoes intensive training, background verification, and continuous performance
              evaluation to ensure unmatched security standards.
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold shadow-md hover:shadow-lg transition-all duration-300">
                Our Training Process
              </button>
              <button className="border border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded font-bold transition-all duration-300">
                Meet Our Team
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-md mt-12 lg:mt-0">
            <div
              className="rounded-lg p-8 h-96 bg-cover bg-center shadow-xl relative overflow-hidden"
              style={{
                backgroundImage:
                  'url("/images/about-bg.jpg")', // 🔹 replace this with your local image path
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Card overlay */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-lg p-6 border border-yellow-400/40 shadow-lg">
                <h3 className="text-2xl font-bold text-yellow-600 mb-4">
                  Our Manpower Strength
                </h3>

                <div className="space-y-4">
                  {[
                    { number: '1000+', label: 'Active Security Staff' },
                    { number: '24/7', label: 'Operational Support' },
                    { number: '98%', label: 'Client Retention Rate' },
                    { number: '50+', label: 'Cities Served' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center border-b border-gray-200 pb-2"
                    >
                      <span className="text-gray-800 font-medium">
                        {item.label}
                      </span>
                      <span className="font-bold text-yellow-600 text-lg">
                        {item.number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative Gradient Border */}
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-b-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
