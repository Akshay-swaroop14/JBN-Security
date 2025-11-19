// Import local images
import securityGuardImg from '../assets/security-guard.jfif';
import corporateStaffImg from '../assets/corporate-staff.jfif';
import armedSecurityImg from '../assets/armed-security.jpg';
import eventSecurityImg from '../assets/event-security.jpg';
import industrialSecurityImg from '../assets/industrial-security.jfif';
import residentialSecurityImg from '../assets/residential-security.jfif';

const Services = () => {
  const services = [
    {
      title: "Security Guards",
      description: "Trained security guards for commercial, residential, and industrial premises.",
      image: securityGuardImg
    },
    {
      title: "Corporate Security Staff",
      description: "Professional security personnel for corporate offices and business centers.",
      image: corporateStaffImg
    },
    {
      title: "Armed Security Personnel",
      description: "Licensed armed security guards for high-risk environments and valuable assets.",
      image: armedSecurityImg
    },
    {
      title: "Event Security Staff",
      description: "Crowd management and security personnel for events and gatherings.",
      image: eventSecurityImg
    },
    {
      title: "Industrial Security",
      description: "Security manpower for factories, warehouses, and industrial facilities.",
      image: industrialSecurityImg
    },
    {
      title: "Residential Security",
      description: "Security guards and personnel for housing societies and residential complexes.",
      image: residentialSecurityImg
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Manpower Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security manpower solutions with trained, verified, and professional personnel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="flex justify-between items-center">
                  <button className="text-emerald-700 hover:text-emerald-800 font-semibold transition-colors duration-300">
                    Hire Staff →
                  </button>
                  <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">Verified Staff</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services