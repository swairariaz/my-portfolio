import { Calendar, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          AI Engineer with 2+ years of experience developing ML solutions for computer vision, NLP, and predictive analytics.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div data-aos="fade-right">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-400">Professional Bio</h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
              Passionate about transforming complex problems into elegant AI solutions that make a real-world impact. 
              Constantly exploring the frontiers of artificial intelligence to create innovative technologies.
            </p>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
              Built scalable AI systems for healthcare, recommendation engines, and IoT applications. 
              Specialized in developing end-to-end machine learning pipelines from data collection to deployment.
              Demonstrated expertise in neural networks, deep learning architectures, and production deployment.
            </p>
            
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="bg-gray-900/70 border border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:border-blue-500/30 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">10+</div>
                <div className="text-sm md:text-base text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-gray-900/70 border border-gray-800 rounded-lg md:rounded-xl p-3 md:p-4 text-center hover:border-blue-500/30 transition-colors">
                <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1 md:mb-2">2+</div>
                <div className="text-sm md:text-base text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-400">Education & Experience</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="bg-gray-900/70 border border-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-blue-400/20 p-2 rounded-full mr-3 md:mr-4">
                    <Briefcase className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="text-blue-400 text-xs md:text-sm">2025</span>
                    </div>
                    <h4 className="font-bold text-gray-300 text-base md:text-lg">AI Engineer Intern</h4>
                    <p className="text-gray-400 text-sm md:text-base">Code Generation</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  As an AI Engineer Intern at a software development company, I collaborated with experienced engineers and data scientists to design and implement AI models, leveraging advanced machine learning techniques to process and analyze large datasets and extract actionable insights
                </p>
              </div>

              <div className="bg-gray-900/70 border border-gray-800 rounded-lg md:rounded-xl p-4 md:p-6 hover:border-blue-500/30 transition-colors">
                <div className="flex items-start mb-3 md:mb-4">
                  <div className="bg-blue-400/20 p-2 rounded-full mr-3 md:mr-4">
                    <BookOpen className="text-blue-400" size={18} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar size={16} className="text-blue-400" />
                      <span className="text-blue-400 text-xs md:text-sm">2022-2026</span>
                    </div>
                    <h4 className="font-bold text-gray-300 text-base md:text-lg">B.Sc. Computer Systems Engineering</h4>
                    <p className="text-gray-400 text-sm md:text-base">The Islamia University of Bahawalpur, Pakistan</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  Final Year Student (Expected Graduation: 2026)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;