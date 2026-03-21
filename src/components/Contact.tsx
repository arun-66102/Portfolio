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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          access_key: '844ff51b-f86d-4ecd-9afe-43daf90c6914',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={18} />, label: 'EMAIL', value: 'arun8778jul@gmail.com', href: 'mailto:arun8778jul@gmail.com' },
    { icon: <Phone size={18} />, label: 'PHONE', value: '+91 87787 65734', href: 'tel:+918778765734' },
    { icon: <MapPin size={18} />, label: 'LOCATION', value: 'India', href: '#' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />, label: 'GitHub', href: 'https://github.com/arun-66102' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/' },
    { icon: <MessageCircle size={18} />, label: 'WhatsApp', href: 'https://wa.me/918778765734' },
  ];

  return (
    <section id="contact" ref={ref}>
      {/* Section Header */}
      <div className="cyber-header">
        <div className="ch-num">05</div>
        <div className="ch-title">
          <span className="col-a">GET</span>_<span className="col-b">IN_TOUCH</span>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="contact-cyber" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        {/* Left — contact info */}
        <div>
          <div className="contact-big">
            <span className="col-a">LET'S</span><br />
            <span className="col-b">CONNECT</span>
          </div>

          <p className="contact-sub">
            I'm always interested in hearing about new opportunities in Machine Learning, AI,
            and Data Science. Also open to collaborations on AI-powered web applications
            and innovative ML projects.
          </p>

          {/* Contact links */}
          <div className="contact-links-cyber">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.href} className="cc-link">
                <span className="cc-link-icon">{info.icon}</span>
                <div>
                  <div style={{ fontFamily: "'Fira Code',monospace", fontSize: 9, letterSpacing: 2, color: 'rgba(242,232,255,0.25)', textTransform: 'uppercase', marginBottom: 2 }}>
                    {info.label}
                  </div>
                  <div style={{ fontSize: 13, color: 'rgba(242,232,255,0.7)' }}>{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="contact-social-row">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-btn"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrap">
          <div style={{ fontFamily: "'Exo 2',sans-serif", fontSize: 18, fontWeight: 700, color: '#f2e8ff', marginBottom: 28, letterSpacing: 1 }}>
            SEND_A_MESSAGE
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="form-label">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="cyber-input"
                placeholder="Your message here..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="cyber-send"
            >
              {isSubmitting ? (
                <>
                  <div style={{ width: 16, height: 16, border: '2px solid rgba(0,0,0,0.3)', borderTop: '2px solid #000', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
                  SENDING...
                </>
              ) : (
                <>
                  SEND MESSAGE
                  <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
