import { Github, Linkedin, Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      const mailtoLink = `mailto:arun8778jul@gmail.com?subject=Contact from Portfolio - ${formData.name}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const contactInfo = [
    { icon: <Mail size={22} />, label: 'Email', value: 'arun8778jul@gmail.com', href: 'mailto:arun8778jul@gmail.com' },
    { icon: <Phone size={22} />, label: 'Phone', value: '+91 87787 65734', href: 'tel:+918778765734' },
    { icon: <MapPin size={22} />, label: 'Location', value: 'India', href: '#' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, label: 'GitHub', href: 'https://github.com/arun-66102' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', href: 'https://wa.me/918778765734' },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="orb w-[400px] h-[400px] bg-neon-pink/5 top-[10%] right-[-10%]" />
      <div className="orb w-[300px] h-[300px] bg-primary-400/8 bottom-[5%] left-[-5%]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just to say hello!
          </p>
          <div className="section-divider mt-8 max-w-sm mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className={`space-y-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-4">Let's Connect</h3>
              <p className="text-secondary-600 leading-relaxed">
                I'm always interested in hearing about new opportunities in Machine Learning, AI,
                and Data Science. Also open to collaborations on AI-powered web applications
                and innovative ML projects.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 glass-card rounded-xl group"
                >
                  <div className="p-2.5 rounded-xl bg-primary-400/10 text-primary-500 group-hover:text-neon-cyan transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <div className="text-xs text-secondary-600">{info.label}</div>
                    <div className="text-sm font-semibold text-secondary-900 group-hover:text-white transition-colors">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base font-bold text-secondary-900 mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-secondary-700 hover:text-neon-cyan hover:bg-white/10 hover:border-primary-400/30 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-secondary-900 mb-6">Send a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl dark-input text-sm"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 rounded-xl dark-input text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-xl dark-input resize-none text-sm"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-gradient flex items-center justify-center px-6 py-3.5 text-white font-semibold rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
