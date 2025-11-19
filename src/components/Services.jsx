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
      description: "Trained, verified, and disciplined security guards for commercial, residential, and industrial premises.",
      image: securityGuardImg
    },
    {
      title: "Corporate Security Staff",
      description: "Professional and well-presented personnel for corporate offices and business environments.",
      image: corporateStaffImg
    },
    {
      title: "Armed Security Personnel",
      description: "Licensed and authorized armed guards for high-security operations and critical facilities.",
      image: armedSecurityImg
    },
    {
      title: "Event Security Staff",
      description: "Experienced staff for event crowd management, VIP protection, and venue safety.",
      image: eventSecurityImg
    },
    {
      title: "Industrial Security",
      description: "Reliable manpower for factories, warehouses, and industrial zones with 24/7 monitoring.",
      image: industrialSecurityImg
    },
    {
      title: "Residential Security",
      description: "Dedicated guards for apartments, gated communities, and private residences.",
      image: residentialSecurityImg
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Our <span className="text-yellow-500">Manpower Services</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive and customizable security staffing solutions delivered with professionalism and trust.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-slate-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div
                className="h-52 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex justify-between items-center">
                  <button className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors duration-300">
                    Hire Staff →
                  </button>
                  <span className="text-xs font-semibold bg-yellow-500/10 border border-yellow-400/30 text-yellow-400 px-3 py-1 rounded-lg">
                    Verified Staff
                  </span>
                </div>
              </div>

              {/* Bottom Accent Border */}
              <div className="h-1 bg-gradient-to-r from-yellow-500 to-yellow-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
