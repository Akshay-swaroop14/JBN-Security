import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! Our JBN team will contact you shortly.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            <span className="text-yellow-500">Contact</span> JBN Security
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Get in touch with our expert team for trusted protection and a free security consultation.
          </p>
        </div>

        {/* Contact Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left - Form */}
          <div className="flex-1">
            <div className="bg-yellow-50/60 rounded-xl p-8 border border-yellow-400/30 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Get In <span className="text-yellow-600">Touch</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Phone */}
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-slate-800 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="armed-security">Armed Security</option>
                    <option value="surveillance">Surveillance Systems</option>
                    <option value="corporate">Corporate Security</option>
                    <option value="personal">Personal Security</option>
                    <option value="event">Event Security</option>
                    <option value="consulting">Security Consulting</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-slate-800 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-yellow-300 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                    placeholder="Tell us about your security requirements..."
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 rounded font-bold shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Right - Contact Info */}
          <div className="flex-1 max-w-md">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Contact <span className="text-yellow-500">Information</span>
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Office Address</h4>
                  <p className="text-gray-700">
                    #24, JBN Towers, Main Business Street<br />
                    Bangalore, Karnataka - 560001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone Numbers</h4>
                  <p className="text-gray-700">
                    +91 98765 43210<br />
                    24/7 Emergency: +91 99999 11111
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email Address</h4>
                  <p className="text-gray-700">
                    info@jbnsecurity.com<br />
                    support@jbnsecurity.com
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency Card */}
            <div className="mt-10 bg-gradient-to-r from-slate-900 to-black rounded-lg p-6 text-white shadow-xl border border-yellow-500/30">
              <h4 className="text-xl font-bold mb-2 text-yellow-400">
                24/7 Emergency Service
              </h4>
              <p className="mb-4 text-gray-200">
                Always available for critical security requirements and rapid response deployment.
              </p>
              <div className="text-2xl font-bold text-yellow-400">
                +91 99999 11111
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
