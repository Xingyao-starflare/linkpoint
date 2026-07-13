import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Briefcase, Award, Target } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const stats = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Projects Completed', value: '1000+' },
    { label: 'Years Of Experience', value: '5+' },
    { label: 'Team Members', value: '50+' }
  ];

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Strategic Client Engagement',
      description: 'Turn every incoming inquiry into sales opportunities. Our expert team handles calls from multiple channels.'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Targeted Business Outreach',
      description: 'Proactively reach out to potential clients to promote your products or services.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'B2B Business Development',
      description: 'Specializing in B2B interactions, we help businesses connect with other businesses effectively.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Consumer Engagement & Sales',
      description: 'Engage directly with consumers to promote your offerings and drive sales.'
    }
  ];

  const testimonials = [
    {
      text: 'LinkPoint transformed our client acquisition process. Their team is professional, responsive, and delivers real results.',
      author: 'John Smith',
      role: 'CEO, Tech Startup'
    },
    {
      text: 'Working with LinkPoint has been a game-changer for our business. Highly recommended!',
      author: 'Sarah Johnson',
      role: 'Marketing Director'
    },
    {
      text: 'The level of service and attention to detail is exceptional. LinkPoint is a true partner.',
      author: 'Michael Chen',
      role: 'Business Owner'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            The Right Clients.<br />The Right Connections.<br />The Right Results
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Bringing you the clients that matter, wherever you are
          </p>
          <button className="px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg text-lg">
            Contact Us
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-blue-600 mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {stat.value}
              </p>
              <p className="text-gray-600 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4 py-16 mb-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">About Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your Trusted Partner for Global Client Connections
          </h2>
        </div>

        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-blue-100 mb-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <strong>LinkPoint</strong>, we specialize in <strong>seamless outsourcing solutions</strong> that connect businesses with the <strong>right clients worldwide</strong>. Whether you need <strong>high-quality customer engagement, business development, or dedicated call center support</strong>, our expert team ensures real results.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With a diverse and skilled team based across the US, Europe, and Asia, we provide reliable client acquisition and business support services tailored to any industry. Our approach is built on <strong>trust, efficiency, and results-driven solutions</strong>, helping businesses <strong>expand, connect, and grow globally</strong>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">24/7 Dedicated Support</h3>
            <p className="text-gray-600">Ensuring your business never misses an opportunity.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 mb-3">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Expert Team Across Four Countries</h3>
            <p className="text-gray-600">A global workforce delivering excellence.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 mb-3">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Seamless Client Connections</h3>
            <p className="text-gray-600">Helping businesses reach new markets effortlessly.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
            <div className="text-blue-600 mb-3">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Tailored Customer Profile</h3>
            <p className="text-gray-600">Outsourcing designed around your needs.</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/about">
            <a className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all">
              Learn More About Us
            </a>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-4 py-16 mb-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Services We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
              <div className="text-blue-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 py-16 mb-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold mb-2">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Our Customer Feedback
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm border border-blue-100">
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-blue-600 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Get A Consultation Now!
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Ready to connect with global clients and grow your business?
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
