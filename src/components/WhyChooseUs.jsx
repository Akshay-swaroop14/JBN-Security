const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full mb-5 shadow-sm border border-yellow-300">
            <span className="text-sm font-semibold tracking-wide">ESTABLISHED IN 2008</span>
          </div>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
            <span className="text-yellow-500">JBN Security Services</span> — Trusted Since 2008
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We are a quality-driven, ISO-certified company offering highly trained and verified 
            security manpower solutions across Bangalore. With integrity, commitment, and experience, 
            JBN stands as a benchmark for professionalism in the private security industry.
          </p>
        </div>

        {/* Core Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              title: "Verified Personnel",
              description:
                "All JBN security professionals undergo rigorous background verification and screening.",
            },
            {
              title: "Trained Professionals",
              description:
                "Continuous skill development ensures our staff are always ready for evolving security challenges.",
            },
            {
              title: "24/7 Deployment",
              description:
                "Round-the-clock manpower availability for corporate, residential, and industrial needs.",
            },
            {
              title: "Rapid Response",
              description:
                "Swift manpower deployment and immediate escalation support when it matters most.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-slate-900 text-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border-t-4 border-yellow-500"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg
                  className="w-8 h-8 text-slate-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-yellow-400 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Affiliations Section */}
        <div className="bg-yellow-50 rounded-xl p-12 mb-20 border border-yellow-200 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-extrabold text-slate-900 mb-3">
              Recognitions & Certifications
            </h3>
            <p className="text-gray-700 text-lg">
              Accredited by leading industry and government authorities for quality, compliance, and excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {[
              {
                code: "ISO",
                title: "ISO 9001:2015 Certified",
                subtitle: "Quality Management System Certified",
              },
              {
                code: "PSA",
                title: "PSARA Licensed",
                subtitle: "Registered Security Agency",
              },
              {
                code: "QC",
                title: "Quality Certified",
                subtitle: "Trusted by 500+ Clients Nationwide",
              },
            ].map((aff, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-lg shadow-md border border-yellow-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-900 font-extrabold shadow-lg">
                  {aff.code}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {aff.title}
                </h4>
                <p className="text-gray-700 text-sm">{aff.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-slate-900 rounded-xl p-12 text-white shadow-xl border-t-4 border-yellow-500">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center mb-12">
            {[
              { number: "1000+", label: "Security Personnel" },
              { number: "24/7", label: "Active Operations" },
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Satisfied Clients" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold text-yellow-400 mb-4">
              Why Choose JBN Security?
            </h4>
            <p className="text-gray-200 text-lg max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience, JBN Security Services has become
              a trusted protection partner for enterprises and residential
              clients across Bangalore. Our blend of certified training,
              verified manpower, and consistent service quality makes us your
              first choice for professional security solutions.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black px-8 py-4 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center">
            Download Company Profile
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
