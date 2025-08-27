import { useState } from 'react';
import { Code2, Cpu, Database, Cloud, Brain, Settings, Sparkles } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>(skillsData[0].category);
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming': return <Code2 size={18} />;
      case 'ML & AI Frameworks': return <Brain size={18} />;
      case 'Data Processing & Visualization': return <Database size={18} />;
      case 'DevOps & Deployment': return <Cloud size={18} />;
      case 'Frontend & Web': return <Settings size={18} />;
      case 'NLP & AI Techniques': return <Sparkles size={18} />;
      case 'Tools & Platforms': return <Cpu size={18} />;
      default: return <Code2 size={18} />;
    }
  };

  const filteredSkills = skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 md:py-20 relative bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          Technical Expertise
        </h2>
        <p className="text-base md:text-lg text-center text-gray-300 mb-10 md:mb-12 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Mastering the tools and technologies that power modern AI solutions and drive innovation
        </p>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12" data-aos="fade-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 py-2 md:px-4 md:py-3 rounded-lg flex items-center gap-1.5 md:gap-2 transition-all duration-300 text-xs md:text-sm font-medium ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700'
              }`}
            >
              {getCategoryIcon(category)}
              <span className="hidden xs:inline">{category.split(' ')[0]}</span>
              <span className="xs:hidden">{category.split(' ')[0].substring(0, 3)}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6" data-aos="fade-up" data-aos-delay="200">
          {filteredSkills.map((skill,) => (
            <div
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 md:p-5 border border-gray-700 hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-blue-400 text-xs font-bold bg-blue-400/10 px-2 py-1 rounded">
                  {skill.level}%
                </span>
              </div>
              
              {/* Advanced Proficiency Indicator */}
              <div className="mb-3">
                <div className="w-full bg-gray-700 rounded-full h-1.5 md:h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-1.5 md:h-2 rounded-full transition-all duration-1000 group-hover:shadow-lg group-hover:shadow-blue-500/20"
                    style={{ width: `${skill.level}%` }}
                  >
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full float-right mr-0.5 mt-0 md:mr-1 md:mt-1 opacity-80 group-hover:animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Skill Level Indicator */}
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full mr-1.5 md:mr-2 ${
                    skill.level >= 90 ? 'bg-green-400 animate-pulse' :
                    skill.level >= 75 ? 'bg-blue-500' :
                    skill.level >= 60 ? 'bg-yellow-400' : 'bg-gray-500'
                  }`}></div>
                  <span className="text-xs text-gray-400">
                    {skill.level >= 90 ? 'Expert' :
                     skill.level >= 75 ? 'Advanced' :
                     skill.level >= 60 ? 'Proficient' : 'Intermediate'}
                  </span>
                </div>
                <div className="text-xs text-gray-500 font-mono">{skill.level}/100</div>
              </div>
            </div>
          ))}
        </div>

        {/* Advanced Technologies Cloud */}
        <div className="mt-12 md:mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 gradient-text">Technologies Mastery</h3>
          
          {/* Interactive Tech Cloud */}
          <div className="relative max-w-6xl mx-auto p-4 md:p-6 rounded-xl md:rounded-2xl glass-effect border border-gray-700/30">
            {/* Animated background elements */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 w-2.5 h-2.5 md:w-4 md:h-4 bg-blue-600 rounded-full animate-pulse opacity-40 delay-1000"></div>
            <div className="absolute top-6 right-8 md:top-8 md:right-12 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full animate-pulse opacity-70 delay-2000"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap justify-center gap-2 md:gap-3 mx-auto">
                {skillsData.map((skill) => {
                  // Calculate size based on proficiency level
                  const sizeClass = 
                    skill.level >= 90 ? 'px-3 py-2 text-sm md:px-4 md:py-3 md:text-base md:scale-110' :
                    skill.level >= 75 ? 'px-2.5 py-1.5 text-xs md:px-3 md:py-2 md:text-sm' :
                    skill.level >= 60 ? 'px-2 py-1 text-xs md:px-2.5 md:py-1.5 md:text-xs' : 'px-1.5 py-1 text-xs md:px-2 md:py-1 md:text-xs';
                  
                  // Calculate glow intensity based on level
                  const glowClass = 
                    skill.level >= 90 ? 'shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50' :
                    skill.level >= 75 ? 'shadow-md shadow-blue-600/25 hover:shadow-blue-600/40' :
                    skill.level >= 60 ? 'shadow-sm shadow-blue-400/20 hover:shadow-blue-400/30' : '';
                  
                  return (
                    <span 
                      key={skill.name}
                      className={`${sizeClass} ${glowClass}
                        rounded-full font-medium border transition-all duration-300 transform hover:scale-105
                        bg-gradient-to-b from-gray-800 to-gray-900 backdrop-blur-sm
                        group relative cursor-pointer
                        ${
                          skill.level >= 90 ? 'border-blue-500/40 text-white hover:border-blue-500' :
                          skill.level >= 75 ? 'border-blue-600/30 text-gray-200 hover:border-blue-600' :
                          skill.level >= 60 ? 'border-blue-400/20 text-gray-300 hover:border-blue-400' :
                          'border-gray-600/20 text-gray-400 hover:border-gray-500'
                        }
                      `}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15) translateY(-2px)';
                        e.currentTarget.style.zIndex = '10';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = '';
                        e.currentTarget.style.zIndex = '';
                      }}
                    >
                      <span className="hidden xs:inline">{skill.name}</span>
                      <span className="xs:hidden">{skill.name.length > 8 ? skill.name.substring(0, 7) + '...' : skill.name}</span>
                      
                      {/* Proficiency badge on hover */}
                      <div className="absolute -top-7 -left-2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 
                                    transition-opacity duration-300 pointer-events-none hidden md:block">
                        <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md border border-gray-700 
                                      whitespace-nowrap shadow-lg">
                          <div className="flex items-center">
                            <div className={`w-2 h-2 rounded-full mr-1 ${
                              skill.level >= 90 ? 'bg-green-400' :
                              skill.level >= 75 ? 'bg-blue-500' :
                              skill.level >= 60 ? 'bg-yellow-400' : 'bg-gray-500'
                            }`}></div>
                            {skill.level}% Mastery
                          </div>
                        </div>
                      </div>
                    </span>
                  );
                })}
              </div>
            </div>
            
            {/* Section footer */}
            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-700/30">
              <p className="text-xs md:text-sm text-gray-400">
                <span className="text-blue-500 font-semibold">{skillsData.filter(s => s.level >= 80).length}+</span> technologies 
                mastered at expert level • 
                <span className="text-blue-600 font-semibold"> {skillsData.length}</span> total technologies
              </p>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-4 md:mt-6 flex flex-wrap justify-center items-center gap-3 md:gap-4 text-xs text-gray-400">
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full mr-1.5 md:mr-2 animate-pulse"></div>
              <span className="text-xs">Expert (90-100%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-blue-600 rounded-full mr-1.5 md:mr-2"></div>
              <span className="text-xs">Advanced (75-89%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full mr-1.5 md:mr-2"></div>
              <span className="text-xs">Proficient (60-74%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 md:w-3 md:h-3 bg-gray-500 rounded-full mr-1.5 md:mr-2"></div>
              <span className="text-xs">Intermediate (Below 60%)</span>
            </div>
          </div>
        </div>

        {/* AI Vibe Elements */}
        <div className="absolute top-16 right-4 md:top-20 md:right-10 opacity-20">
          <Sparkles size={30} className="text-blue-500 animate-pulse" />
        </div>
        <div className="absolute bottom-16 left-4 md:bottom-20 md:left-10 opacity-20">
          <Cpu size={30} className="text-blue-600 animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};

export default Skills;