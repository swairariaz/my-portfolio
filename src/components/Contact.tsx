import { useState } from 'react';
import { Mail, MapPin, Clock, Send, Github, Linkedin, MessageCircle, Cpu } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_u32woea', // EmailJS service ID
        'template_f9rg6z9', // EmailJS template ID
        formData,
        '2ScH7yL73izULN6KX' // EmailJS public key
      );
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          Get In Touch
        </h2>
        <p className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Ready to bring your AI vision to life? Let's discuss your project and explore how we can innovate together.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-6 text-ai-accent flex items-center">
              <MessageCircle className="mr-3" size={24} />
              Let's Connect
            </h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or simply chat about the future of AI. Don't hesitate to reach out!
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="bg-ai-accent/20 p-3 rounded-lg mr-4 group-hover:bg-ai-accent/30 transition-colors">
                  <Mail className="text-ai-accent" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:svnametra@f@gmail.com" className="text-gray-400 hover:text-ai-accent transition-colors">
                    swairariaz101@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-blue-600/20 p-3 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                  <Linkedin className="text-blue-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/swaira-riaz-4b946330a/" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Swaira Riaz
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-gray-700/50 p-3 rounded-lg mr-4 group-hover:bg-gray-600/50 transition-colors">
                  <Github className="text-gray-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">GitHub</h4>
                  <a href="https://github.com/swairariaz" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                    @swairariaz
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-green-600/20 p-3 rounded-lg mr-4 group-hover:bg-green-600/30 transition-colors">
                  <MapPin className="text-green-400" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Bahawalpur, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="bg-ai-primary/20 p-3 rounded-lg mr-4 group-hover:bg-ai-primary/30 transition-colors">
                  <Clock className="text-ai-primary" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Response Time</h4>
                  <p className="text-gray-400">
                    Typically within 24 hours. For urgent inquiries, feel free to reach out via email directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-gray-700/30">
              <h4 className="font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/swairariaz"
                  target="_blank"
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all group"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-gray-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/swaira-riaz-4b946330a/"
                  target="_blank"
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-blue-600/20 transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} className="text-gray-400 group-hover:text-blue-400" />
                </a>
                <a
  href="mailto:swairariaz101@gmail.com"
  className="p-3 bg-gray-800/50 rounded-lg hover:bg-green-600/20 transition-all group relative"
  aria-label="Email"
  onMouseEnter={() => setHoveredIcon('email')}
  onMouseLeave={() => setHoveredIcon(null)}
>
  <Mail size={20} className="text-gray-400 group-hover:text-green-400" />
  {hoveredIcon === 'email' && (
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-xs text-white rounded whitespace-nowrap border border-gray-700">
      swairariaz101@gmail.com
    </span>
  )}
</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-delay="200">
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBzdHJva2U9IiMwNmI2ZDQiIHN0cm9rZS13aWR0aD0iMC4xIiBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0zMCAwaDMwVjMwSDBWMHoiLz48cGF0aCBkPSJNNTAgMzBoMTB2MzBoLTEwVjMweiIvPjxwYXRoIGQ9Ik0xMCA0MGgxMHYyMEgxMFY0MHoiLz48L2c+PC9zdmc+')]"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                  <Cpu className="mr-3" size={24} />
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2 font-medium text-sm">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2 font-medium text-sm">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-300 mb-2 font-medium text-sm">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project discussion or collaboration"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-accent transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 mb-2 font-medium text-sm">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Tell me about your project, goals, and how I can help you achieve them..."
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-ai-accent transition-colors resize-none"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-ai-accent to-ai-primary text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg hover:shadow-ai-accent/30 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-3 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      ❌ Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                </form>

                <div className="mt-6 p-4 bg-ai-accent/10 rounded-lg border border-ai-accent/20">
                  <div className="flex items-center text-ai-accent text-sm">
                    <Clock size={16} className="mr-2" />
                    <span>Usually responds within a few hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700/30 text-center">
          <p className="text-gray-400">
            <span className="gradient-text font-semibold">Swaira Riaz</span> | © {new Date().getFullYear()} All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            AI Engineer • Machine Learning Innovator • Futuristic Solutions Developer
          </p>
          <p className="text-gray-500 text-sm mt-1">
            💼 Open to: Remote Work • Contract Positions • Project Collaboration • Technical Advisory
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-ai-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-ai-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
    </section>
  );
};

export default Contact;