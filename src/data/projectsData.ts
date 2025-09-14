export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  achievements: string[];
  githubUrl: string;
  youtubeUrl?: string;
  status: 'completed' | 'in-progress' | 'archived';
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "SkinGenius AI",
    category: "Kitchen-Based Dermatologist",
    description: "SkinGenius AI delivers personalized, kitchen-based skincare solutions using AI-driven text and image analysis for a wide range of skin concerns.",
    detailedDescription: "SkinGenius AI is an AI-powered skincare assistant that helps you address a wide range of skin concerns using affordable, kitchen-friendly ingredients. Whether you're dealing with simple dryness or complex conditions like Alopecia Areata, Atopic Dermatitis, or Rosacea, SkinGenius crafts personalized DIY remedies, no expensive products required. Simply describe your concern or upload an image (optional), we respect your privacy and receive scientifically backed, user-friendly solutions.",
    technologies: ["ChromaDB", "JSON", "CSV", "HAM10000", "Hugging Face Transformers", "PyTorch", "MobileNetV3", "Sentence Transformers", "NumPy", "PIL", "Regex", "FastAPI", "Uvicorn", "Pydantic", "Python-multipart", "Logging", "MLflow", "Prometheus", "Streamlit", "Docker", "Docker Compose", "Bash"],
    achievements: [
      "Achieved high-precision skin condition detection using MobileNetV3 and HAM10000 dataset for accurate image-based analysis.",
      "Delivered personalized DIY skincare recipes for 100+ skin conditions using NLP and vector-based ingredient matching.",
      "Enabled privacy-first image processing with immediate deletion of uploaded images after analysis.",
      "Streamlined deployment with Docker and FastAPI, achieving scalable and secure API performance."
    ],
    githubUrl: "https://github.com/swairariaz/SkinGenius-AI",
    youtubeUrl: "https://www.youtube.com/watch?v=KmuFZcWJJjY&t=20s",
    status: "completed",
    featured: true
  },
  {
    id: 2,
    title: "Medicine Recommendation System",
    category: "Smart Healthcare AI",
    description: "An intelligent web application that predicts diseases from user-input symptoms and provides personalized medical insights using machine learning.",
    detailedDescription: "The Medicine Recommendation System is a Flask-based web application using a Support Vector Classifier (SVC) to predict diseases from user-selected symptoms. Built with Python, Flask, Pandas, and scikit-learn for the backend, and HTML5, CSS3, and JavaScript for the frontend, it delivers disease predictions, descriptions, medications, precautions, workouts, and diet advice. Trained on Training.csv and supported by additional datasets, it showcases AI-driven healthcare solutions with a user-friendly interface and robust data integration.",
    technologies: ["Python", "Flask", "HTML5", "CSS3", "JavaScript", "Pandas", "scikit-learn", "joblib", "numpy", "Kaggle", "Support Vector Machine (SVC)"],
    achievements: [
      "Built a machine learning model for accurate disease prediction using SVC on the Training.csv dataset.",
      "Integrated six datasets to provide disease descriptions, medications, precautions, workouts, and diets.",
      "Developed a responsive Flask-based web app with a dynamic HTML/CSS/JavaScript frontend.",
      "Enabled scalable deployment using joblib for model persistence and Flask for efficient APIs."
    ],
    githubUrl: "https://github.com/swairariaz/Medicine-Recommendation-System-",
    youtubeUrl: "https://www.youtube.com/watch?v=4rA8b2Zjwsk",
    status: "completed",
    featured: true
  },
  {
    id: 3,
    title: "Real-Time Face Emotion Detection",
    category: "Computer Vision AI",
    description: "A real-time facial emotion detection system using a CNN model to classify emotions into seven categories via webcam feed.",
    detailedDescription: "A deep learning-based computer vision system that classifies human emotions in real-time from a webcam feed. Built a Convolutional Neural Network (CNN) with TensorFlow/Keras, trained on a Kaggle dataset of facial expressions. Integrated the model with OpenCV for live face detection and emotion categorization into seven classes, creating an efficient and responsive user experience.",
    technologies: ["Python", "TensorFlow", "Keras", "OpenCV", "Convolutional Neural Network (CNN)", "NumPy", "Pandas", "scikit-learn", "Deep Learning", "Computer Vision", "Webcam Integration", "Real-time Processing", "kaggle"],
    achievements: [
      "Designed and trained a high-accuracy CNN model for facial emotion classification.",
      "Engineered a real-time processing pipeline by integrating the model with OpenCV.",
      "Optimized performance for smooth, low-latency emotion detection on live video feed."
    ],
    githubUrl: "https://github.com/swairariaz/face_Emotion_Detection_Model",
    youtubeUrl: "https://www.youtube.com/watch?v=wnokiMWzCJk",
    status: "completed",
    featured: true
  },
  {
    id: 4,
    title: "Advanced House Price Prediction",
    category: "Predictive Analytics",
    description: "An XGBoost-powered house price prediction system achieving 91% accuracy, optimized with Optuna and deployed via a Gradio interface.",
    detailedDescription: "Designed and implemented a robust machine learning solution for real estate price valuation using an XGBoost regression model. The pipeline encompassed extensive data preprocessing and feature engineering on a multidimensional dataset, incorporating structural, temporal, and locational attributes. Model performance was rigorously optimized through automated hyperparameter tuning with Optuna, achieving state-of-the-art predictive accuracy. The finalized model was containerized and deployed as an interactive web application via Gradio, demonstrating an end-to-end workflow from data analysis to production-level deployment.",
    technologies: ["Python", "XGBoost", "Optuna", "Scikit-learn", "Pandas", "Gradio", "Machine Learning", "Hyperparameter Tuning", "Feature Engineering", "Model Deployment"],
    achievements: [
      "Achieved a 91% accuracy (R² score) by implementing and fine-tuning an XGBoost model with Optuna.",
      "Engineered a robust feature set from raw data, significantly improving model performance and prediction reliability.",
      "Deployed the model as an interactive web application for real-time price estimation."
    ],
    githubUrl: "https://github.com/swairariaz/House_price_prediction",
    status: "completed",
    featured: false
  },
  {
    id: 5,
    title: "SkillSwapGPT",
    category: "IT Skill Recommender",
    description: "An AI-powered IT skill recommendation system that suggests relevant technologies to learn next based on a user's current skillset.",
    detailedDescription: "Engineered an AI-driven IT skill recommendation system that leverages machine learning to analyze user-input skills and suggest highly relevant technologies. Utilizing a Nearest Neighbors algorithm with cosine similarity, the system processes a structured skill dataset to generate accurate, confidence-scored recommendations. Developed a streamlined data preprocessing pipeline to handle input variations and built an interactive web interface using Streamlit for seamless user experience.",
    technologies: ["Python", "GPT", "Recommendation Systems", "Next.js", "Node.js", "MongoDB"],
    achievements: [
      "Engineered a machine learning recommendation system using cosine similarity to deliver accurate, relevance-based IT skill suggestions.",
      "Developed a robust data preprocessing pipeline to normalize and process diverse skill inputs, ensuring reliable matching.",
      "Designed and deployed an interactive Streamlit web application, enabling intuitive user interaction and real-time recommendations."
    ],
    githubUrl: "https://github.com/swairariaz/IT_Skill_Recommender_System",
    youtubeUrl: "https://www.youtube.com/watch?v=Ap_Q9KL5HEo",
    status: "completed",
    featured: true
  },
  {
    id: 6,
    title: "World Bank Indicators Dashboard",
    category: "Data Analytics & Visualization",
    description: "An interactive Streamlit dashboard for exploring and analyzing World Bank development indicators, featuring data cleaning, EDA, visualizations, and forecasting.",
    detailedDescription: "Developed a comprehensive Streamlit-based dashboard for analyzing World Bank development indicators such as GDP per capita, income growth, life expectancy, and population. The system includes robust data cleaning, wide-to-long reshaping, ISO3 standardization, and feature engineering for rankings and aggregates. It offers interactive visualizations like KPI cards, bubble charts, and heatmaps using Plotly, alongside forecasting with linear regression and exponential smoothing, and supports exports in CSV, JSON, Excel, and PDF formats.",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "Statsmodels", "Matplotlib", "Seaborn", "Data Cleaning", "Feature Engineering", "Time Series Forecasting"],
    achievements: [
      "Built an end-to-end data pipeline for cleaning and reshaping World Bank datasets into a standardized, analysis-ready format.",
      "Created interactive visualizations including KPI cards, trend charts, bubble charts, and correlation heatmaps for insightful EDA.",
      "Implemented forecasting models using linear regression and exponential smoothing for predictive insights.",
      "Enabled multi-format data exports (CSV, JSON, Excel, PDF) for seamless reporting and stakeholder use."
    ],
    githubUrl: "https://github.com/swairariaz/Worldbank-dashboard",
    youtubeUrl: "https://www.youtube.com/watch?v=RqYpfMbiT-g",
    status: "completed",
    featured: true
  }
];