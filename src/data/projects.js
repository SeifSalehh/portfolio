export const projects = [
  {
    id: 'kickcrew',
    name: 'KickCrew',
    description: [
      'Full-stack web app for booking football pitches with authentication and admin approval.',
      'Includes availability checks, wallet logic, and booking status management via REST APIs.',
    ],
    tags: ['Spring Boot', 'React', 'MySQL', 'JWT', 'REST'],
    github: 'https://github.com/SeifSalehh/KickCrew.git',
    modal: {
      overview:
        'KickCrew streamlines pitch bookings with gated approvals, wallet-backed payments, and clear status flows for players and admins.',
      whatItDoes: [
        'JWT auth with role-based access (user/admin)',
        'Booking lifecycle with statuses (pending/approved/rejected)',
        'Wallet top-ups and controlled deductions/refunds',
      ],
      keyDecisions: [
        'Layered backend (controller/service/repository) for maintainability',
        'DTO-based REST boundary between frontend and backend',
      ],
    },
  },
  {
    id: 'rag-chatbot',
    name: 'RAG Chatbot',
    description: [
      'Collaborative RAG-based chatbot for answering questions from uploaded one-pagers.',
      'Built to return responses grounded in the most relevant extracted context.',
    ],
    tags: ['Python', 'RAG', 'Embeddings', 'Vector search'],
    github: 'https://github.com/SeifSalehh/RAG-Chatbot-for-One-Pagers.git',
    modal: {
      overview:
        'A focused retrieval-augmented chatbot that ingests short documents, ranks context, and responds with grounded answers.',
      whatItDoes: [
        'Ingest → chunk → embed → retrieve → answer pipeline',
        'Retrieval-first prompting to reduce hallucinations',
        'Fast lookup designed for short documents',
      ],
      keyDecisions: [
        'Retrieval-first flow to keep answers grounded in source text',
        'Modular pipeline so components can be swapped later',
      ],
    },
  },
  {
    id: 'fittrack',
    name: 'FitTrack',
    description: [
      'Mobile app focused on organizing trainer–client workflows in one place.',
      'Designed around scheduling, progress tracking, and structured data management.',
    ],
    tags: ['React Native', 'Expo Router', 'Supabase', 'Realtime'],
    badge: 'Private • In development',
    modal: {
      overview:
        'FitTrack gives trainers and clients a shared space for structured plans, progress visibility, and realtime-ready updates.',
      whatItDoes: [
        'Role-based trainer/client experience',
        'Structured workflows with realtime-ready data syncing',
        'Designed for scheduling and progress organization',
      ],
      keyDecisions: [
        'Supabase for Postgres + auth + realtime to move fast',
        'Shared UI components for consistency and maintainability',
      ],
    },
  },
  {
    id: 'ethfetch',
    name: 'EthFetch',
    description: [
      'Backend tool for fetching and processing Ethereum transaction data from blockchain APIs.',
      'Extracts and formats transaction details for analysis or integration into other systems.',
    ],
    tags: ['Node.js', 'JavaScript', 'APIs', 'Data processing'],
    github: 'https://github.com/SeifSalehh/EthFetch.git',
    modal: {
      overview:
        'EthFetch pulls blockchain transaction data, normalizes it, and keeps outputs ready for downstream integrations.',
      whatItDoes: [
        'Fetches wallet/block transaction data via API',
        'Normalizes and formats outputs for downstream use',
        'Simple logic suitable for integration',
      ],
      keyDecisions: [
        'Normalized output shape for predictable downstream processing',
        'Kept API access and processing separated for clarity',
      ],
    },
  },
];
