import { Code, Eye, MessageCircle, RefreshCw, Cloud, Cpu, BarChart } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const Services = () => {
  const serviceIcons = [
    <BarChart key="barchart" className="text-ai-accent" size={24} />,
    <Cpu key="cpu" className="text-ai-accent" size={24} />,
    <Eye key="eye" className="text-ai-accent" size={24} />,
    <MessageCircle key="message" className="text-ai-accent" size={24} />,
    <RefreshCw key="refresh" className="text-ai-accent" size={24} />,
    <Cloud key="cloud" className="text-ai-accent" size={24} />,
    <Code key="code" className="text-ai-accent" size={24} />
  ];

  return (
    <section id="services" className="py-20 relative bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          AI Services & Solutions
        </h2>
        <p className="text-lg text-center text-gray-300 mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          End-to-end AI development services to transform your business with cutting-edge machine learning solutions
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-ai-accent/30 hover:shadow-lg hover:shadow-ai-accent/10 transition-all duration-300 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-ai-accent/5 to-ai-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Service Icon */}
              <div className="relative z-10 mb-6">
                <div className="w-12 h-12 bg-ai-accent/10 rounded-lg flex items-center justify-center group-hover:bg-ai-accent/20 transition-colors duration-300">
                  {serviceIcons[index]}
                </div>
              </div>

              {/* Service Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-ai-accent mb-2 uppercase tracking-wide">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded text-xs text-gray-300 border border-gray-600">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-ai-accent/20 rounded text-xs text-ai-accent">
                        +{service.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Ideal Use Cases */}
                <div>
                  <h4 className="text-sm font-semibold text-ai-primary mb-2 uppercase tracking-wide">Ideal For</h4>
                  <ul className="space-y-1">
                    {service.idealUseCases.slice(0, 3).map((useCase, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start">
                        <span className="text-ai-accent mr-1">•</span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-ai-accent/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center" data-aos="fade-up">
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Implement AI Solutions?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's discuss how we can transform your business with custom AI solutions tailored to your specific needs.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-ai-accent to-ai-primary rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-ai-accent/30 transition-all duration-300 group"
            >
              Start AI Project Discussion
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-ai-accent/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-ai-primary/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
    </section>
  );
};

export default Services;