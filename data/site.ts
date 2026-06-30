export const site = {
  name: "Santosh Kulkarni",
  location: "Columbus, OH",
  email: "santosh.sk2005@gmail.com",
  linkedin: "https://www.linkedin.com/in/santoshkulkarnicmh/",
  github: "https://github.com/santoshsk2005",
  resume: "/Santosh-Kulkarni-Resume.pdf",
  // Drop your real photo at public/santosh.jpg and change this to "/santosh.jpg"
  photo: "/placeholder-photo.svg",
  tagline: "Data & AI executive turning enterprise complexity into measurable impact.",
  subTagline:
    "20+ years leading data engineering, AI, and cloud modernization across financial services and insurance.",
  quickFacts: ["20+ years experience", "Data & AI", "Cloud modernization", "Columbus, OH"],

  about: [
    "I'm a data and AI leader with more than two decades of helping large organizations turn messy, sprawling data into trusted insight — and trusted insight into real business outcomes. I've spent my career at the intersection of technology and strategy: modernizing analytics, scaling cloud platforms, and building the kind of governed, reliable data foundations that executives can actually make decisions on.",
    "What I care about most is impact. Whether it's standing up AI-driven budgeting and forecasting, migrating dozens of mission-critical applications to the cloud, or restructuring teams to remove key-person risk, I measure success in dollars saved, time-to-insight gained, and the confidence people have in their numbers.",
    "I lead large engineering organizations, but I stay close to the craft — I still love experimenting with GenAI tooling, data pipelines, and new ways to make data work harder. If you're looking to modernize how your business uses data and AI, I'd love to talk.",
  ],

  experience: [
    {
      company: "Travelers Insurance",
      title: "Sr. Director, Data Engineering — Corp Tech (Finance, HR & Legal)",
      dates: "2022 — Present",
      location: "Columbus, OH",
      bullets: [
        "Established the centralized “front door” for enterprise data and reporting demand — standardizing intake, prioritization, and delivery across Finance and Operations value streams.",
        "Built AI-driven budgeting, forecasting, and what-if scenario modeling for OCFOs, delivering faster, more reliable analysis and saving over $200K.",
        "Scaled and led a 75+ person data engineering organization, restructuring to eliminate key-person risk and build a high-accountability delivery culture.",
        "Drove a 15% reduction in total application spend and a 20% reduction in cloud spend through enterprise FinOps and modernized data workflows.",
      ],
    },
    {
      company: "Nationwide Insurance",
      title: "Sr. Consultant / Director, IT Applications",
      dates: "2020 — 2022",
      location: "Columbus, OH",
      bullets: [
        "Architected and delivered a modern enterprise data Lakehouse on AWS, enabling real-time analytics and standardized insights across P&C business units.",
        "Designed enterprise KPI frameworks (profitability, loss ratio, expense ratio, growth) ensuring consistent metric definitions across BI layers.",
        "Delivered profitability modeling via Oracle PCMCS, empowering finance executives to optimize investment strategies by product and region.",
      ],
    },
    {
      company: "Nationwide Insurance",
      title: "Senior Manager",
      dates: "2018 — 2020",
      location: "Columbus, OH",
      bullets: [
        "Modernized financial data infrastructure with Oracle ADW + Oracle Analytics Cloud, accelerating time-to-insight for enterprise FP&A.",
        "Enabled dynamic scenario planning and real-time financial insights for business users.",
      ],
    },
    {
      company: "Nationwide Insurance",
      title: "Senior Technology Lead",
      dates: "2012 — 2018",
      location: "Columbus, OH",
      bullets: [
        "Guided the team in adopting an API-first approach, transforming batch data into real-time, API-driven solutions.",
        "Developed automation strategies for recurring tasks to accelerate business value realization.",
      ],
    },
  ],

  earlierExperience:
    "Earlier: Nationwide Insurance (Lead Developer) · Toyota Motor Manufacturing (Applications Developer) · State Farm Insurance (Applications Developer)",

  strengths: [
    "Enterprise Data Strategy",
    "AI & Advanced Analytics",
    "Cloud Modernization",
    "Executive Performance & KPIs",
    "Digital Transformation Leadership",
    "C-Suite Data Storytelling",
    "High-Performing Team Leadership",
    "Responsible AI",
    "Cost-to-Serve Optimization",
    "Agile Delivery",
  ],

  techSkills: [
    { group: "Cloud", items: ["AWS", "OCI", "Azure", "IBM"] },
    { group: "GenAI", items: ["Claude", "ChatGPT", "AWS Bedrock", "Watson X", "Windsurf"] },
    { group: "Programming", items: ["Java", "Spring Boot", "Python", "SQL", "Perl"] },
    { group: "Data / ELT", items: ["Glue", "dbt", "Azure Data Factory", "Databricks", "Informatica", "OCI DI"] },
    { group: "Warehouse / BI", items: ["Snowflake", "Teradata", "Oracle", "MDM", "Tableau", "Looker", "Qlik"] },
    { group: "APIs", items: ["REST", "GraphQL"] },
    { group: "SaaS", items: ["Workday HCM", "Ariba", "Oracle FCM", "PeopleSoft", "Concur", "Fieldglass"] },
  ],

  certifications: [
    "Databricks Certified Data Engineer Associate",
    "AWS Certified",
    "Snowflake SnowPro Advanced Architect",
  ],

  education: [
    "M.S., Data Analytics — Southern New Hampshire University",
    "B.E., Computer Science — Karnataka University",
  ],

  projects: [
    {
      name: "GenAI Experiments",
      description: "Hands-on GenAI tooling and experiments — prompts, agents, and LLM workflows.",
      lang: "Python",
      url: "https://github.com/santoshsk2005/GenAI_Experiments",
    },
    {
      name: "Data Engineering",
      description: "Data engineering practice: pipelines, patterns, and transformations.",
      lang: "Python",
      url: "https://github.com/santoshsk2005/dataEngineering",
    },
    {
      name: "PySpark Experiments",
      description: "Distributed data processing notebooks exploring Apache Spark.",
      lang: "Jupyter",
      url: "https://github.com/santoshsk2005/pythony_sparky",
    },
    {
      name: "Copilot Demo",
      description: "GenAI / Copilot-assisted development demo.",
      lang: "Python",
      url: "https://github.com/santoshsk2005/CoPilotDemo",
    },
  ],
};

export type Site = typeof site;
