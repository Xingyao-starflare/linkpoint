import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Clock, Globe, Zap } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Dedicated Support',
      description: 'Ensuring your business never misses an opportunity.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Expert Team Across Four Countries',
      description: 'A global workforce delivering excellence.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Seamless Client Connections',
      description: 'Helping businesses reach new markets effortlessly.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Tailored Customer Profile',
      description: 'Outsourcing designed around your needs.'
    }
  ];

  const team = [
    {
      name: 'Zinan Liu',
      role: 'Founder & CEO',
      image: '👨‍💼'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Page Header */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your Trusted Partner for Global Client Connections
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At <strong>LinkPoint</strong>, we specialize in <strong>seamless outsourcing solutions</strong> that connect businesses with the <strong>right clients worldwide</strong>.
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-blue-100 mb-16">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you need <strong>high-quality customer engagement, business development, or dedicated call center support</strong>, our expert team ensures real results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a diverse and skilled team based across the US, Europe, and Asia, we provide reliable client acquisition and business support services tailored to any industry. Our approach is built on <strong>trust, efficiency, and results-driven solutions</strong>, helping businesses <strong>expand, connect, and grow globally</strong>.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Why Choose LinkPoint
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Company Info */}
      <section className="container mx-auto px-4 py-16 bg-white rounded-xl my-8 border border-blue-100">
        <h2 className="text-3xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Company Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Legal Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Company Name:</strong> LINKPOINT DOO BEOGRAD</li>
              <li><strong>Registration Number:</strong> 2211048</li>
              <li><strong>Tax ID:</strong> 115744435</li>
              <li><strong>Legal Form:</strong> Limited Liability Company</li>
              <li><strong>Founded:</strong> June 2, 2026</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Location & Contact</h3>
            <ul className="space-y-3 text-gray-700">
              <li><strong>Address:</strong> Kneza Mihaila 33, Belgrade (Stari Grad), Serbia</li>
              <li><strong>Email:</strong> klaycklay0102@gmail.com</li>
              <li><strong>Capital:</strong> 117,000.00 RSD</li>
              <li><strong>Business Activity:</strong> Business & Management Consultancy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-6xl mb-4">
                {member.image}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-blue-600 font-semibold">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Ready to Connect with Global Clients?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how LinkPoint can help your business grow.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Get A Consultation Now
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
