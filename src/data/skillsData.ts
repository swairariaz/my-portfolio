export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'ML & AI Frameworks' | 'Data Processing & Visualization' | 'DevOps & Deployment' | 'Frontend & Web' | 'NLP & AI Techniques' | 'Tools & Platforms';
}

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Python", level: 95, category: "Programming" },
  { name: "C++", level: 80, category: "Programming" },
  { name: "JavaScript", level: 65, category: "Programming" },
  { name: "HTML5/CSS3", level: 90, category: "Programming" },
  { name: "Bash/Shell Scripting", level: 70, category: "Programming" },
  { name: "SQL", level: 70, category: "Programming" },
  
  // ML & AI Frameworks
  { name: "TensorFlow", level: 85, category: "ML & AI Frameworks" },
  { name: "Keras", level: 85, category: "ML & AI Frameworks" },
  { name: "PyTorch", level: 80, category: "ML & AI Frameworks" },
  { name: "Scikit-learn", level: 90, category: "ML & AI Frameworks" },
  { name: "XGBoost", level: 85, category: "ML & AI Frameworks" },
  { name: "LightGBM", level: 80, category: "ML & AI Frameworks" },
  { name: "Hugging Face Transformers", level: 80, category: "ML & AI Frameworks" },
  
  // Data Processing & Visualization
  { name: "Pandas", level: 90, category: "Data Processing & Visualization" },
  { name: "NumPy", level: 88, category: "Data Processing & Visualization" },
  { name: "Matplotlib", level: 85, category: "Data Processing & Visualization" },
  { name: "Seaborn", level: 80, category: "Data Processing & Visualization" },
  { name: "Plotly", level: 75, category: "Data Processing & Visualization" },
  { name: "OpenCV", level: 85, category: "Data Processing & Visualization" },
  { name: "PIL/Pillow", level: 80, category: "Data Processing & Visualization" },
  
  // DevOps & Deployment
  { name: "Docker", level: 80, category: "DevOps & Deployment" },
  { name: "Docker Compose", level: 75, category: "DevOps & Deployment" },
  { name: "FastAPI", level: 85, category: "DevOps & Deployment" },
  { name: "Flask", level: 85, category: "DevOps & Deployment" },
  { name: "Streamlit", level: 85, category: "DevOps & Deployment" },
  { name: "Gradio", level: 75, category: "DevOps & Deployment" },
  { name: "MLflow", level: 80, category: "DevOps & Deployment" },
  { name: "Git", level: 90, category: "DevOps & Deployment" },
  { name: "GitHub", level: 95, category: "DevOps & Deployment" },
  { name: "Kubernetes", level: 70, category: "DevOps & Deployment" },
  { name: "Prometheus", level: 70, category: "DevOps & Deployment" },
  
  // Frontend & Web
  { name: "React", level: 70, category: "Frontend & Web" },
  { name: "TypeScript", level: 70, category: "Frontend & Web" },
  { name: "Tailwind CSS", level: 80, category: "Frontend & Web" },
  { name: "RESTful APIs", level: 80, category: "Frontend & Web" },
  { name: "Responsive Design", level: 90, category: "Frontend & Web" },
  { name: "UI/UX Design Principles", level: 70, category: "Frontend & Web" },
  { name: "Vite", level: 65, category: "Frontend & Web" },

  
  // NLP & AI Techniques
  { name: "spaCy", level: 80, category: "NLP & AI Techniques" },
  { name: "NLTK", level: 75, category: "NLP & AI Techniques" },
  { name: "Sentence Transformers", level: 80, category: "NLP & AI Techniques" },
  { name: "Recommendation Systems", level: 90, category: "NLP & AI Techniques" },
  { name: "Computer Vision", level: 75, category: "NLP & AI Techniques" },
  { name: "CNN Architectures", level: 85, category: "NLP & AI Techniques" },
  { name: "Transfer Learning", level: 80, category: "NLP & AI Techniques" },
  { name: "Genetic Algorithms", level: 75, category: "NLP & AI Techniques" },
  { name: "Hyperparameter Optimization", level: 85, category: "NLP & AI Techniques" },
  
  // Tools & Platforms
  { name: "Jupyter Notebook", level: 95, category: "Tools & Platforms" },
  { name: "Google Colab", level: 85, category: "Tools & Platforms" },
  { name: "PyCharm", level: 95, category: "Tools & Platforms" },
  { name: "VS Code", level: 95, category: "Tools & Platforms" },
  { name: "Kaggle", level: 80, category: "Tools & Platforms" },
  { name: "Hugging Face", level: 80, category: "Tools & Platforms" },
  { name: "ChromaDB", level: 80, category: "Tools & Platforms" },
  { name: "Postman", level: 80, category: "Tools & Platforms" },
  { name: "MongoDB", level: 75, category: "Tools & Platforms" },
];