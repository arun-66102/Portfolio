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
    { icon: <Mail size={16} />,    label: 'Email',    value: 'arun8778jul@gmail.com', href: 'mailto:arun8778jul@gmail.com' },
    { icon: <Phone size={16} />,   label: 'Phone',    value: '+91 87787 65734',       href: 'tel:+918778765734' },
    { icon: <MapPin size={16} />,  label: 'Location', value: 'Erode, India',         href: '#' },
  ];

  const socialLinks = [
    { icon: <Github size={18} />,       label: 'GitHub',   href: 'https://github.com/arun-66102' },
    { icon: <Linkedin size={18} />,     label: 'LinkedIn', href: 'https://www.linkedin.com/in/arunkumar-rathinasamy-844085290/' },
    { icon: <MessageCircle size={18} />,label: 'WhatsApp', href: 'https://wa.me/918778765734' },
  ];

  return (
    <section id="contact" ref={ref} className="noir-contact">
      <div className="noir-section-label">Let's Collaborate</div>
      <h2 className="noir-section-title">
        Get In<br />
        <em>Touch</em>
      </h2>

      <div
        className="noir-contact-layout"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(1.5rem)',
          transition: 'opacity 0.8s cubic-bezier(0.16,1,0.3,1), transform 0.8s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {/* Left — Info */}
        <div>
          <h3 className="noir-contact-info-title">
            Open to opportunities in AI and Backend roles
          </h3>
          <p className="noir-contact-sub">
            Always interested in hearing about new challenges and collaborations
            on AI-powered applications and innovative ML projects.
          </p>

          <div className="noir-contact-links">
            {contactInfo.map((info, index) => (
              <a key={index} href={info.href} className="noir-contact-link">
                <span className="noir-contact-link-icon">{info.icon}</span>
                <div>
                  <div className="noir-contact-link-label">{info.label}</div>
                  <div className="noir-contact-link-value">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="noir-social-row">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="noir-social-btn"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="noir-form-label">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="noir-input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="noir-form-label">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="noir-input"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="noir-form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="noir-input"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              id="contact-submit-btn"
              disabled={isSubmitting}
              className="noir-submit-btn"
            >
              {isSubmitting ? (
                <>
                  <div style={{
                    width: 16, height: 16,
                    border: '2px solid rgba(0,0,0,0.2)',
                    borderTop: '2px solid #000',
                    animation: 'spin 1s linear infinite',
                  }} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
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
