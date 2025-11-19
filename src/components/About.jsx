const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 lg:mr-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About JBN Manpower Services</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              JBN Management & Protection is a leading security manpower provider with over 15 years of experience 
              in supplying trained, verified, and professional security personnel to businesses across the nation.
            </p>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We specialize in providing comprehensive security staffing solutions, from individual security guards 
              to complete security teams for corporate, industrial, and residential requirements.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              All our security personnel undergo rigorous training, background verification, and regular performance 
              assessments to ensure the highest standards of service delivery.
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-3 rounded font-semibold transition-colors duration-300">
                Our Training Process
              </button>
              <button className="border border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white px-6 py-3 rounded font-semibold transition-colors duration-300">
                Meet Our Team
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-md mt-12 lg:mt-0">
            <div 
              className="bg-gray-100 rounded-lg p-8 h-96 bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1551830410-95f7e0289ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80")'
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Manpower Strength</h3>
                <div className="space-y-4">
                  {[
                    { number: "1000+", label: "Active Security Staff" },
                    { number: "24/7", label: "Staff Availability" },
                    { number: "98%", label: "Client Retention" },
                    { number: "50+", label: "Cities Served" }
                  ].map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.label}</span>
                      <span className="font-bold text-emerald-700">{item.number}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About