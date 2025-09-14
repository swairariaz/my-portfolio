export interface Service {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  idealUseCases: string[];
}

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Data Analytics & Visualization Solutions",
    description: "Custom interactive dashboards for data cleaning, exploratory analysis, feature engineering, stunning visualizations, forecasting, and report generation to transform raw data into actionable business insights and strategies.",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "Statsmodels","Matplotlib", "Seaborn"],
    idealUseCases: [
      "Economic development indicator analysis and tracking",
      "Business KPI monitoring and trend forecasting",
      "Interactive data exploration with charts and heatmaps",
      "Data-driven decision support for organizations",
    ]
  },
  {
    id: 2,
    title: "Predictive Analytics Solutions",
    description: "End-to-end machine learning systems for data-driven forecasting, pattern recognition, and predictive modeling to drive business intelligence and automated decision-making.",
    technologies:["Python", "TensorFlow", "Scikit-learn", "XGBoost", "Pandas", "MLflow"],
    idealUseCases: [
      "Demand forecasting for retail and e-commerce",
      "Customer churn prediction and retention",
      "Financial risk assessment and credit scoring",
      "Predictive maintenance in manufacturing"
    ]
  },
  {
    id: 3,
    title: "Natural Language Processing",
    description: "Intelligent text and speech processing solutions including sentiment analysis, chatbots, document processing, and language translation for enhanced customer experiences.",
    technologies: ["Hugging Face", "GPT", "spaCy", "NLTK", "Transformer Models", "Sentence Transformers"],
    idealUseCases: [
      "Customer service automation and chatbots",
      "Document analysis and knowledge management",
      "Social media sentiment monitoring",
      "Multilingual content processing and translation"
    ]
  },
  {
    id: 4,
    title: "Recommendation Engines",
    description: "Personalized recommendation systems that analyze user behavior to deliver tailored content, product suggestions, and customized experiences across platforms.",
    technologies: ["Neural Networks", "Collaborative Filtering", "Matrix Factorization", "Real-time APIs", "Vector Embeddings", "Semantic Search"],
    idealUseCases: [
      "E-commerce product recommendations",
      "Content streaming platform suggestions",
      "Personalized learning path systems",
      "Customized news and content delivery"
    ]
  },
  {
    id: 5,
    title: "MLOps & Production Deployment",
    description: "Complete machine learning lifecycle management including model deployment, monitoring, scaling, and maintenance for production-ready AI systems.",
    technologies: ["Docker", "Kubernetes", "FastAPI", "MLflow", "Git", "CI/CD Pipelines"],
    idealUseCases: [
      "Enterprise AI system deployment and scaling",
      "Model performance monitoring and maintenance",
      "Automated retraining pipelines",
      "Cloud-based ML infrastructure setup"
    ]
  },
  {
    id: 6,
    title: "AI-Powered Applications",
    description: "Full-stack web and mobile applications integrated with machine learning capabilities for seamless user experiences and intelligent functionality.",
    technologies: ["React", "FastAPI", "Streamlit", "Docker", "REST APIs", "flask"],
    idealUseCases: [
      "AI-powered SaaS product development",
      "Internal business intelligence dashboards",
      "Customer-facing AI applications",
      "Proof-of-concept and MVP development"
    ]
  }
];