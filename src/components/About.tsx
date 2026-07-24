import { Calendar, BookOpen, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-20 relative bg-gradient-to-b from-gray-950 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-center text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          AI Engineer with 2+ years of experience building RAG-powered chatbots, deep learning models, and real-time ML pipelines.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div data-aos="fade-right">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-blue-400">Professional Bio</h3>
            <p className="text-gray-300 mb-4 md:mb-6 text-base md:text-lg">
              AI Engineer with a strong foundation in machine learning, deep learning, and applied artificial
              intelligence, focused on designing systems that are technically sound and genuinely useful in
              production. My work spans conversational AI and RAG-powered systems, computer vision, predictive
              modeling, and real-time data pipelines, with an emphasis on turning research-grade models into
              reliable, scalable solutions.
            </p>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
              I've built and deployed intelligent chatbots, deep learning classifiers, and network security
              systems using tools like TensorFlow, Azure OpenAI, and FastAPI, taking projects from data collection
              and model development through to cloud deployment. I care about clean architecture, measurable
              performance, and AI that solves real problems rather than just demonstrating a concept.
            </p>
            <p className="text-gray-300 mb-6 md:mb-8 text-base md:text-lg">
              I'm currently open to new opportunities in AI/ML engineering, and always glad to connect on
              interesting problems in the field.
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
                      <span className="text-blue-400 text-xs md:text-sm">2026 - Present</span>
                    </div>
                    <h4 className="font-bold text-gray-300 text-base md:text-lg">AI Engineer</h4>
                    <p className="text-gray-400 text-sm md:text-base">France-based Private Company</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm md:text-base">
                  Developed, deployed, and maintained a production-grade AI chatbot using RAG architecture and
                  Azure OpenAI. Automated business workflows using Zapier, Google Sheets, and Google Apps Script
                  for data processing and system integrations. Deployed and maintained chatbot infrastructure on
                  Railway, Vercel, and Firebase, ensuring scalable and reliable production performance.
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
                  Graduated in 2026. Final year project: Cyber Twin — an AI-powered network intrusion
                  detection system using LSTM neural networks, achieving 91.7% accuracy on the CICIDS-2017
                  dataset.
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