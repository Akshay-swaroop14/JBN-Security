const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold">COMPANY INCEPTION - 2008</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            JBN Management & Protection is a Quality conscious Company and<br />
            one amongst the leading Security Agency in Bangalore
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JBN Management & Protection is a quality conscious company and provides best 
            Security Guard Services in Bangalore. Conceptualised and Founded by experienced 
            security professionals, JBN has been a highly reliable service provider to a diverse customer base.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            {
              title: "Verified Personnel",
              description: "All security staff undergo thorough background checks and verification."
            },
            {
              title: "Trained Professionals",
              description: "Regular training programs to keep our staff updated with latest security protocols."
            },
            {
              title: "24/7 Staff Availability",
              description: "Round-the-clock manpower deployment for all your security needs."
            },
            {
              title: "Quick Deployment",
              description: "Rapid staff deployment within hours of requirement confirmation."
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center border border-gray-200">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Affiliations</h3>
            <p className="text-gray-600 text-lg">Recognized and certified by leading industry bodies</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">ISO</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">ISO 9001:2015</h4>
              <p className="text-gray-600 text-sm">Quality Management System Certified</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">PSA</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">PSA Registered</h4>
              <p className="text-gray-600 text-sm">Licensed Security Agency</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="w-20 h-20 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-sm">QC</span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">Quality Certified</h4>
              <p className="text-gray-600 text-sm">Quality Conscious Company</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-12 text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "1000+", label: "Security Personnel" },
              { number: "24/7", label: "Availability" },
              { number: "15+", label: "Years Experience" },
              { number: "500+", label: "Clients Served" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-200 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <h4 className="text-2xl font-bold mb-4">Why Choose JBN Security?</h4>
            <p className="text-slate-200 text-lg max-w-3xl mx-auto leading-relaxed">
              With over 15 years of experience in security services, JBN Management & Protection 
              has established itself as a trusted partner for businesses across Bangalore. Our 
              commitment to quality, trained personnel, and reliable service makes us the preferred 
              choice for security manpower solutions.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <button className="bg-slate-800 hover:bg-slate-900 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-300 inline-flex items-center">
            Download Company Profile
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs