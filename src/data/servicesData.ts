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
    title: "AI Chatbots & Conversational Systems",
    description: "Production-grade conversational AI built on RAG architecture and Azure OpenAI, with persistent context retention, behavioral personalization, and real-time database integration for intelligent, context-aware interactions at scale.",
    technologies: ["Azure OpenAI", "RAG Architecture", "FastAPI", "Firebase", "ChromaDB", "Vector Embeddings", "Prompt Engineering"],
    idealUseCases: [
      "Product or in-app assistants with persistent user context",
      "Customer support automation with knowledge-base grounding",
      "Personalized, behavior-aware conversational experiences",
      "Chatbots integrated into existing platforms or game ecosystems"
    ]
  },
  {
    id: 2,
    title: "AI Voice Agents",
    description: "Automated voice systems for inbound and outbound calls, built with production-ready voice AI platforms and workflow orchestration for natural, low-latency conversations that integrate directly into existing business systems.",
    technologies: ["Vapi", "Retell AI", "n8n", "GoHighLevel", "REST APIs"],
    idealUseCases: [
      "Automated appointment scheduling and call handling",
      "Lead qualification and follow-up calls",
      "Customer support voice lines with live handoff",
      "Outbound sales and reminder call automation"
    ]
  },
  {
    id: 3,
    title: "AI Workflow Automation",
    description: "End-to-end automation pipelines that connect forms, databases, and third-party tools, removing manual data handling and letting AI systems act on incoming data the moment it arrives.",
    technologies: ["n8n", "Zapier", "Google Apps Script", "FastAPI", "Firebase", "Webhooks"],
    idealUseCases: [
      "Automated data pipelines between forms, sheets, and databases",
      "Lead capture and CRM synchronization",
      "Trigger-based AI processing on new data submissions",
      "Business workflow automation to replace manual processes"
    ]
  },
  {
    id: 4,
    title: "Data Analytics & Visualization",
    description: "Custom interactive dashboards for data cleaning, exploratory analysis, feature engineering, and report generation to transform raw data into actionable business insights.",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn"],
    idealUseCases: [
      "Exploratory data analysis and data cleaning",
      "Business KPI monitoring and trend forecasting",
      "Interactive data exploration with charts and heatmaps",
      "Data-driven decision support for organizations"
    ]
  },
  {
    id: 5,
    title: "Predictive Analytics & Deep Learning",
    description: "End-to-end machine learning and deep learning systems, from classical models to LSTM and CNN architectures, for forecasting, classification, and pattern recognition in production settings.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "XGBoost", "LSTM", "CNN", "Pandas"],
    idealUseCases: [
      "Real-time anomaly and intrusion detection",
      "Image-based classification systems",
      "Diagnostic and recommendation models from structured data",
      "Demand forecasting and risk scoring"
    ]
  },
  {
    id: 6,
    title: "MLOps & Production Deployment",
    description: "Complete machine learning lifecycle management, including containerized deployment, monitoring, and scaling, to take models from notebook to reliable production infrastructure.",
    technologies: ["Docker", "Kubernetes", "FastAPI", "MLflow", "Railway", "Git", "CI/CD"],
    idealUseCases: [
      "Containerized model deployment and scaling",
      "Model performance monitoring and maintenance",
      "Cloud-based ML infrastructure setup",
      "Taking prototypes from proof-of-concept to production"
    ]
  }
];