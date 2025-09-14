import { useState } from 'react';
import { ExternalLink, Github, Youtube, X, Code2, Cpu, Brain, Database } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.status === filter);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'completed', label: 'Completed' },
    { id: 'in-progress', label: 'In Progress' },
  ];

  const projectColors = [
    'from-blue-500/10 to-blue-600/10 border-blue-500/20',
    'from-green-500/10 to-green-600/10 border-green-500/20',
    'from-purple-500/10 to-purple-600/10 border-purple-500/20',
    'from-orange-500/10 to-orange-600/10 border-orange-500/20',
    'from-red-500/10 to-red-600/10 border-red-500/20',
    'from-cyan-500/10 to-cyan-600/10 border-cyan-500/20',
  ];

  const projectIcons = [
    <Cpu key="cpu" className="text-blue-400" size={18} />,
    <Brain key="brain" className="text-green-400" size={18} />,
    <Code2 key="code" className="text-purple-400" size={18} />,
    <Database key="database" className="text-orange-400" size={18} />,
    <Cpu key="cpu2" className="text-red-400" size={18} />,
    <Brain key="brain2" className="text-cyan-400" size={18} />,
  ];

  const handleProjectClick = (id: number) => {
    console.log('Clicked project ID:', id);
    setSelectedProject(id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-16 md:py-20 relative bg-gradient-to-br from-gray-900 via-gray-950 to-black">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 gradient-text" data-aos="fade-up">
          Portfolio & Projects
        </h2>
        <p className="text-base md:text-lg text-center text-gray-300 mb-10 md:mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Innovative AI solutions that solve real-world problems and drive technological advancement
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-10 md:mb-12" data-aos="fade-up">
          <div className="bg-gray-800/50 border border-gray-700 rounded-full p-1 inline-flex flex-wrap justify-center gap-1 md:gap-0">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {filteredProjects.map((project, index) => {
            const colorIndex = index % projectColors.length;
            const bgColor = projectColors[colorIndex];
            const ProjectIcon = projectIcons[colorIndex];

            return (
              <div
                key={project.id}
                className={`group bg-gradient-to-br ${bgColor} border rounded-xl p-4 md:p-6 hover:shadow-lg transition-all duration-300 h-full flex flex-col`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Project Header */}
                <div className="mb-3 md:mb-4 flex items-start justify-between">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-800/50 rounded-lg flex items-center justify-center">
                    {ProjectIcon}
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-xs md:text-sm mb-2 md:mb-3">{project.category}</p>
                  
                  <p className="text-gray-300 mb-3 md:mb-4 text-xs md:text-sm line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 md:px-2 md:py-1 bg-gray-800/50 rounded text-xs text-gray-300 border border-gray-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-1.5 py-0.5 md:px-2 md:py-1 bg-blue-500/20 rounded text-xs text-blue-400">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-700/50">
                  <span className={`px-2 py-0.5 md:px-2 md:py-1 rounded-full text-xs ${
                    project.status === 'completed' 
                      ? 'bg-green-500/20 text-green-400' 
                      : project.status === 'in-progress'
                      ? 'bg-blue-500/20 text-blue-400'
                      : 'bg-gray-500/20 text-gray-400'
                  }`}>
                    {project.status}
                  </span>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProjectClick(project.id);
                    }}
                    className="text-blue-500 hover:text-blue-400 flex items-center text-xs md:text-sm group-hover:translate-x-1 transition-transform duration-300"
                  >
                    View Details
                    <ExternalLink size={12} className="ml-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Background Elements */}
        <div className="absolute top-16 left-4 md:top-20 md:left-10 w-16 h-16 md:w-24 md:h-24 bg-blue-500/10 rounded-full blur-2xl md:blur-3xl animate-pulse-slow pointer-events-none"></div>
        <div className="absolute bottom-16 right-4 md:bottom-20 md:right-10 w-20 h-20 md:w-32 md:h-32 bg-blue-600/10 rounded-full blur-2xl md:blur-3xl animate-pulse-slow delay-1000 pointer-events-none"></div>
      </div>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto"
          onClick={handleCloseModal}
        >
          {(() => {
            const project = projectsData.find(p => p.id === selectedProject);
            if (!project) {
              console.error(`Project with id ${selectedProject} not found`);
              setSelectedProject(null);
              return null;
            }
            return (
              <div
                className="bg-gray-800 border border-gray-700 rounded-xl p-4 md:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-4 md:mb-6">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
                    {project.title}
                  </h3>
                  <button 
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-white p-1 md:p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4">
                      {project.category}
                    </p>
                    <p className="text-gray-300 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {project.detailedDescription}
                    </p>
                    
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-blue-500 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                        <Code2 size={16} className="mr-2" />
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-1.5 md:gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2 py-1 bg-gray-700/50 rounded text-xs md:text-sm text-gray-300 border border-gray-600">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-4 md:mb-6">
                      <h4 className="font-semibold text-blue-600 mb-2 md:mb-3 flex items-center text-sm md:text-base">
                        <Brain size={16} className="mr-2" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1.5 md:space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start text-sm md:text-base">
                            <span className="text-blue-500 mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-gray-600 transition-colors text-xs md:text-sm"
                      >
                        <Github size={16} className="mr-1.5 md:mr-2" />
                        View Code
                      </a>
                      {project.youtubeUrl && (
                        <a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-gray-700 rounded-lg text-gray-300 hover:bg-red-600 transition-colors text-xs md:text-sm"
                        >
                          <Youtube size={16} className="mr-1.5 md:mr-2" />
                          Watch Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </section>
  );
};

export default Projects;