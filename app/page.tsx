'use client';

import { Sparkles, ArrowUpRight, Mail, Send, MessageCircle, Dribbble, Linkedin, Twitter, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Fireworks } from '@/components/ui/fireworks';
import { Vortex } from '@/components/ui/vortex';
import { ColourfulText } from '@/components/ui/colourful-text';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
  const [displayedName, setDisplayedName] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  // Typing animation for name - continuous loop
  useEffect(() => {
    const name = 'Jonathan Lopez';
    let currentIndex = 0;
    let isDeleting = false;
    let pauseCount = 0;
    const pauseAfterTyping = 20; // Pause for 2 seconds (20 * 100ms)
    const pauseAfterDeleting = 5; // Pause for 0.5 seconds (5 * 100ms)
    
    const animate = () => {
      if (!isDeleting && currentIndex < name.length) {
        // Typing forward
        setDisplayedName(name.substring(0, currentIndex + 1));
        currentIndex++;
        setIsTyping(true);
        pauseCount = 0;
        setTimeout(animate, 100); // Typing speed: 100ms
      } else if (!isDeleting && currentIndex === name.length) {
        // Finished typing, pause before deleting
        pauseCount++;
        if (pauseCount >= pauseAfterTyping) {
          isDeleting = true;
          pauseCount = 0;
          setTimeout(animate, 50); // Start deleting
        } else {
          setTimeout(animate, 100);
        }
      } else if (isDeleting && currentIndex > 0) {
        // Deleting backward
        currentIndex--;
        setDisplayedName(name.substring(0, currentIndex));
        setIsTyping(true);
        pauseCount = 0;
        setTimeout(animate, 50); // Deleting speed: 50ms (faster)
      } else if (isDeleting && currentIndex === 0) {
        // Finished deleting, pause before typing again
        pauseCount++;
        if (pauseCount >= pauseAfterDeleting) {
          isDeleting = false;
          pauseCount = 0;
          setTimeout(animate, 100); // Start typing again
        } else {
          setTimeout(animate, 100);
        }
      }
    };

    animate();

    // Cleanup is handled by the recursive setTimeout pattern
    return () => {};
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const serviceCards = [
    {
      title: "AI Model Development & Optimization",
      items: [
        { label: "Machine Learning Models:", desc: "Create and develop capable and proficient machine learning models to analyze intricate business issues and to gain new opportunities." },
        { label: "Deep Learning Solutions:", desc: "Improve prediction and automate with the best neural network libraries and techniques." },
        { label: "AI Algorithm Optimization:", desc: "Optimally balance encoded performances and efficient performance with regard to algorithms." },
        { label: "Reinforcement Learning:", desc: "Design effective decision-making processes where the decision maker is not the final decision-maker." }
      ]
    },
    {
      title: "Advanced AI Techniques",
      items: [
        { label: "Custom Model Training:", desc: "Create tailored AI models designed specifically for your unique business requirements." },
        { label: "Transfer Learning:", desc: "Use models developed by someone else to build and complete models faster at a lower price." },
        { label: "Model Fine-Tuning:", desc: "Incorporation of alteration in existing models to yield better outputs." },
        { label: "Hyperparameter Optimization:", desc: "Facilitate high levels of model accuracy through fine and rigorous systematic hyperparameter tuning." }
      ]
    },
    {
      title: "Data-Centric AI Solutions",
      items: [
        { label: "Data Preprocessing:", desc: "Data preprocessing for making data ready for intelligent learning and to obtain insights from them." },
        { label: "Predictive Analytics:", desc: "The following are obtained for analytical forecasting and decision-making." },
        { label: "Model Evaluation & Testing:", desc: "To be precise, you need to conduct your tests at the highest levels of precision." }
      ]
    },
    {
      title: "Intelligent Applications",
      items: [
        { label: "Natural Language Processing (NLP):", desc: "Power chatbots, sentiment analysis, and text summarization for enhanced customer engagement." },
        { label: "Computer Vision Systems:", desc: "Implement advanced image recognition and video analysis to automate workflows and improve safety." },
        { label: "AI-Powered Analytics:", desc: "Unlock new insights through intelligent, data-driven analytics." },
        { label: "Intelligent Decision Systems:", desc: "Enable smarter strategic planning with AI-driven decision support systems." }
      ]
    },
    {
      title: "Agile Development & Prototyping",
      items: [
        { label: "Quick Prototype Development:", desc: "Rapidly create prototypes to test and refine AI solutions." },
        { label: "Proof of Concept Development:", desc: "Validate ideas with demonstrable proof-of-concept projects." },
        { label: "Iterative Development Cycles:", desc: "Ensure continuous improvement with adaptive development processes." },
        { label: "Minimum Viable AI Products (MVPs):", desc: "Test market readiness with scalable MVPs." },
        { label: "Fast Time-to-Market Solutions:", desc: "Deliver impactful AI solutions on accelerated timelines." }
      ]
    },
    {
      title: "Deployment & Scalability",
      items: [
        { label: "Scalable AI Infrastructure:", desc: "Design robust frameworks for growth-ready AI systems." },
        { label: "Enterprise Integration:", desc: "Seamlessly integrate AI solutions with existing systems and processes." },
        { label: "Model Deployment Strategies:", desc: "Implement deployment strategies for efficient and effective use." },
        { label: "AI Workflow Automation:", desc: "Automate routine workflows to enhance productivity and reduce costs." }
      ]
    },
    {
      title: "Ongoing Support & Maintenance",
      items: [
        { label: "Performance Optimization:", desc: "Continuously enhance model performance for real-world applications." },
        { label: "AI Solution Maintenance:", desc: "Provide dedicated support to ensure sustained effectiveness and reliability." },
        { label: "Business Process Optimization:", desc: "Leverage AI to streamline and improve organizational processes." }
      ]
    }
  ];

  const portfolioProjects = [
    {
      title: "FreeCast",
      description: "Personalized streaming experience. Watch local TV channels for free.",
      image: "/asset/portfolio/FreeCast.png",
      alt: "FreeCast - Streaming Platform",
      link: "https://freecast.com/",
      tags: ['Streaming Platform', 'React', 'AWS'],
      extraTagsCount: 7,
      bgColor: "bg-slate-900",
      overview: "FreeCast is a revolutionary streaming platform that provides personalized viewing experiences and free access to local TV channels. The platform combines modern web technologies with cloud infrastructure to deliver seamless streaming services.",
      process: [
        {
          title: "Platform Development",
          description: "Built a scalable streaming platform using React and AWS infrastructure, implementing real-time video delivery and user personalization features."
        },
        {
          title: "Content Management",
          description: "Developed a comprehensive content management system for organizing and delivering local TV channels with advanced search and recommendation capabilities."
        },
        {
          title: "User Experience",
          description: "Created an intuitive interface with personalized recommendations, watch history, and seamless playback across multiple devices."
        }
      ],
      success: "FreeCast has successfully launched as a leading streaming platform, providing users with free access to local TV channels while maintaining high-quality streaming performance and user satisfaction.",
      client: "FreeCast Inc.",
      location: "United States",
      projectType: "Streaming Platform, Full Stack Development",
      duration: "8 months",
      allTechnologies: ['Streaming Platform', 'React', 'AWS', 'Video Streaming', 'Content Delivery', 'User Authentication', 'Real-time Updates']
    },
    {
      title: "Sphynx Labs - Blockchain Development",
      description: "Advanced blockchain solutions and DeFi platforms",
      image: "/asset/portfolio/Sphynx Labs.png",
      alt: "Sphynx Labs - Blockchain Development",
      link: "https://sphynxlabs.co/",
      tags: ['DeFi', 'Blockchain', 'Cross-chain'],
      extraTagsCount: 7,
      bgColor: "bg-black",
      overview: "Sphynx Labs is a cutting-edge blockchain development platform specializing in DeFi solutions and cross-chain interoperability. The platform provides advanced tools and infrastructure for building decentralized applications.",
      process: [
        {
          title: "Blockchain Architecture",
          description: "Designed and implemented a robust blockchain architecture supporting multiple chains with seamless cross-chain functionality."
        },
        {
          title: "DeFi Solutions",
          description: "Developed comprehensive DeFi protocols including smart contracts, liquidity pools, and yield farming mechanisms."
        },
        {
          title: "Platform Integration",
          description: "Built user-friendly interfaces and APIs for seamless integration with existing financial systems and applications."
        }
      ],
      success: "Sphynx Labs has successfully launched as a leading blockchain development platform, enabling developers to build sophisticated DeFi applications with cross-chain capabilities.",
      client: "Sphynx Labs",
      location: "Global",
      projectType: "Blockchain, DeFi Development",
      duration: "10 months",
      allTechnologies: ['DeFi', 'Blockchain', 'Cross-chain', 'Smart Contracts', 'Web3', 'Solidity', 'Ethereum']
    },
    {
      title: "Vengo AI - Digital Companion Platform",
      description: "AI-powered digital companion with natural language processing",
      image: "/asset/portfolio/Vengo AI.png",
      alt: "Vengo AI - Digital Companion Platform",
      link: "https://vengoai.com/",
      tags: ['AI', 'Natural Language Processing'],
      extraTagsCount: 5,
      bgColor: "bg-slate-900",
      overview: "Vengo AI is a cutting-edge digital companion platform combating loneliness and supporting mental well-being. It offers empathetic, judgment-free AI personas that users can create and monetize. The platform features sophisticated natural language processing, real-time conversation capabilities, and an innovative creator economy system.",
      process: [
        {
          title: "AI Development",
          description: "Implemented advanced natural language processing systems using transformer models for human-like conversations. Developed sophisticated personality modeling algorithms to create unique and engaging AI personas."
        },
        {
          title: "Platform Architecture",
          description: "Built a scalable platform architecture supporting real-time conversations, user authentication, and secure data handling. Implemented creator tools for AI persona development and monetization features."
        },
        {
          title: "User Experience",
          description: "Created an intuitive interface for both AI persona creators and users, with emphasis on accessibility and engagement. Implemented analytics and feedback systems to continuously improve conversation quality."
        }
      ],
      success: "Vengo AI has successfully launched as a pioneering platform in the digital companion space, enabling creators to monetize their AI personas while providing meaningful support to users seeking connection. The platform has shown significant impact in mental well-being support, with high user engagement rates and positive feedback from both creators and users.",
      client: "Spinnr AI",
      location: "United States",
      projectType: "AI, Full Stack Development",
      duration: "12 months",
      allTechnologies: ['Natural Language Processing', 'Full Stack', 'Creator Economy', 'Machine Learning', 'Real-time Communication', 'Digital Companions']
    },
    {
      title: "Kronix - SaaS Web Application",
      description: "Modern SaaS platform built with Next.js",
      image: "/asset/portfolio/Kronix.png",
      alt: "Kronix - SaaS Web Application",
      link: "https://kronix.com/",
      tags: ['Next.js', 'Figma'],
      extraTagsCount: 1,
      bgColor: "bg-green-900",
      overview: "Kronix is a modern SaaS web application designed to bring your dreams into reality. Built with Next.js, it provides a comprehensive platform for businesses to manage their operations efficiently.",
      process: [
        {
          title: "Frontend Development",
          description: "Developed a modern, responsive frontend using Next.js with optimized performance and user experience."
        },
        {
          title: "Backend Architecture",
          description: "Built a scalable backend infrastructure supporting real-time data processing and secure user management."
        },
        {
          title: "Design & UX",
          description: "Created intuitive user interfaces using Figma, focusing on accessibility and modern design principles."
        }
      ],
      success: "Kronix has successfully launched as a comprehensive SaaS platform, helping businesses streamline their operations and achieve their goals.",
      client: "Kronix Inc.",
      location: "United States",
      projectType: "SaaS, Web Application",
      duration: "6 months",
      allTechnologies: ['Next.js', 'Figma', 'TypeScript', 'React', 'Node.js']
    },
    {
      title: "Blue Game - Blockchain Casino Crash Game",
      description: "Blockchain-powered crash game with real-time betting",
      image: "/asset/portfolio/Blue Game.png",
      alt: "Blue Game - Blockchain Casino Crash Game",
      link: "https://bluegame.com/",
      tags: ['Casino Game', 'Blockchain', 'Vue3'],
      extraTagsCount: 7,
      bgColor: "bg-blue-900",
      overview: "Blue Game is a blockchain-powered casino crash game featuring real-time betting and transparent blockchain transactions. The platform provides an engaging gaming experience with fair play guarantees.",
      process: [
        {
          title: "Game Development",
          description: "Developed the crash game mechanics with real-time multiplier calculations and instant payout systems."
        },
        {
          title: "Blockchain Integration",
          description: "Integrated blockchain technology for transparent transactions, provably fair gaming, and secure wallet management."
        },
        {
          title: "Platform Development",
          description: "Built a responsive platform using Vue3 with real-time updates, player statistics, and betting history."
        }
      ],
      success: "Blue Game has successfully launched as a trusted blockchain casino platform, providing users with fair and transparent gaming experiences.",
      client: "Blue Game",
      location: "Global",
      projectType: "Casino Game, Blockchain",
      duration: "9 months",
      allTechnologies: ['Casino Game', 'Blockchain', 'Vue3', 'Web3', 'Real-time Updates', 'Smart Contracts', 'Cryptocurrency']
    },
    {
      title: "Stoody AI - AI-Powered Meeting Platform",
      description: "AI-powered video conferencing with intelligent features",
      image: "/asset/portfolio/Stoody Ai.png",
      alt: "Stoody AI - AI-Powered Meeting Platform",
      link: "https://stoody.ai/",
      tags: ['Video Conferencing', 'LiveKit'],
      extraTagsCount: 7,
      bgColor: "bg-black",
      overview: "Stoody AI is an innovative AI-powered meeting platform that enhances video conferencing with intelligent features. The platform uses LiveKit for real-time communication and AI to improve meeting experiences.",
      process: [
        {
          title: "AI Development",
          description: "Developed an innovative AI-powered meeting platform using LiveKit and advanced AI technologies for enhanced video conferencing."
        },
        {
          title: "Real-time Communication",
          description: "Implemented real-time video and audio streaming with low latency using LiveKit infrastructure."
        },
        {
          title: "User Experience",
          description: "Created an intuitive interface with AI-powered features including meeting summaries, transcription, and intelligent scheduling."
        }
      ],
      success: "Stoody AI has successfully launched as a cutting-edge meeting platform, revolutionizing how teams communicate and collaborate.",
      client: "Stoody AI",
      location: "United States",
      projectType: "Video Conferencing, AI",
      duration: "11 months",
      allTechnologies: ['Video Conferencing', 'LiveKit', 'AI', 'Real-time Communication', 'WebRTC', 'Machine Learning', 'Natural Language Processing']
    },
    {
      title: "Unboxing AI - Object Tracking Tool",
      description: "Automated Product Identification. Tracking and pricing products from unboxing videos. Identifies the products featured.",
      image: "/asset/portfolio/Unboxing Ai.png",
      alt: "Unboxing AI - Object Tracking Tool",
      link: "https://unboxingtaxai.com/",
      tags: ['Object Tracking', 'Video Analysis'],
      extraTagsCount: 7,
      bgColor: "bg-teal-900",
      overview: "Unboxing AI is a sophisticated object tracking tool that leverages Google's advanced AI to automatically identify and track products from unboxing videos. The platform provides automated product identification and pricing information.",
      process: [
        {
          title: "AI Development",
          description: "Developed a sophisticated object tracking tool leveraging Google's advanced AI and computer vision technologies for product identification."
        },
        {
          title: "Video Processing",
          description: "Implemented video analysis algorithms to extract and identify products from unboxing videos in real-time."
        },
        {
          title: "Data Integration",
          description: "Integrated product databases and pricing APIs to provide comprehensive product information and market insights."
        }
      ],
      success: "Unboxing AI has successfully launched as a powerful tool for content creators and marketers, automating product identification and tracking from video content.",
      client: "Unboxing AI",
      location: "United States",
      projectType: "AI, Video Analysis",
      duration: "7 months",
      allTechnologies: ['Object Tracking', 'Video Analysis', 'Computer Vision', 'Machine Learning', 'Google AI', 'Image Processing', 'Product Recognition']
    },
    {
      title: "Monday.com Integration - CRM Automation",
      description: "All datas in those three platforms will be synced automatically based on the webhook from Hubspot.",
      image: "/asset/portfolio/Monday Integration.png",
      alt: "Monday.com Integration - CRM Automation",
      link: null,
      tags: ['Hubspot', 'Monday.com Integration'],
      extraTagsCount: 7,
      bgColor: "bg-slate-900",
      overview: "Monday.com Integration is a CRM automation solution that synchronizes data across multiple platforms automatically using webhooks from Hubspot. The system ensures seamless data flow between Hubspot, Monday.com, and other integrated platforms.",
      process: [
        {
          title: "Integration Development",
          description: "Developed automated data synchronization between Hubspot, Monday.com, and MySQL database using webhook technology."
        },
        {
          title: "Data Pipeline",
          description: "Built a robust data pipeline that processes webhook events and updates data across platforms in real-time."
        },
        {
          title: "System Architecture",
          description: "Designed a scalable architecture supporting multiple platform integrations with error handling and data validation."
        }
      ],
      success: "The Monday.com integration has successfully automated data synchronization across platforms, significantly reducing manual work and improving data accuracy.",
      client: "Confidential",
      location: "United States",
      projectType: "CRM Automation, Integration",
      duration: "5 months",
      allTechnologies: ['Hubspot', 'Monday.com Integration', 'Webhooks', 'API Integration', 'MySQL', 'Data Sync', 'Automation']
    },
    {
      title: "English Learning Chat Bot - AI-Powered Platform",
      description: "Inviting a friend to join a hiking trip in the mountains. Extend the invitation. Task-based learning with interactive modules.",
      image: "/asset/portfolio/English Learning Chatbot.png",
      alt: "English Learning Chat Bot - AI-Powered Platform",
      link: null,
      tags: ['English Learning Chat Bot', 'Rasa'],
      extraTagsCount: 5,
      bgColor: "bg-slate-800",
      overview: "English Learning Chat Bot is an AI-powered platform designed for task-based language learning. The platform uses Rasa for natural language understanding and provides interactive learning modules for English language acquisition.",
      process: [
        {
          title: "AI Development",
          description: "Developed an AI-powered chatbot using Rasa framework for natural language understanding and conversation management."
        },
        {
          title: "Learning Modules",
          description: "Created interactive learning modules with task-based activities, progress tracking, and personalized learning paths."
        },
        {
          title: "Platform Development",
          description: "Built a comprehensive platform supporting multiple learning scenarios, user progress tracking, and adaptive content delivery."
        }
      ],
      success: "The English Learning Chat Bot has successfully launched, providing users with an engaging and effective way to learn English through interactive conversations and task-based activities.",
      client: "Language Learning Inc.",
      location: "Global",
      projectType: "AI, Education",
      duration: "8 months",
      allTechnologies: ['English Learning Chat Bot', 'Rasa', 'Natural Language Processing', 'Machine Learning', 'Conversational AI', 'Education Technology']
    },
    {
      title: "Wazifame - MENA Region Job Platform",
      description: "Best Jobs in MENA Region. Gateway to Exciting Opportunities!",
      image: "/asset/portfolio/Wazifame Job Platform.png",
      alt: "Wazifame - MENA Region Job Platform",
      link: "https://www.wazifame.com/",
      tags: ['Next.js', 'Prisma', 'Web Development'],
      extraTagsCount: 5,
      bgColor: "bg-slate-900",
      overview: "Wazifame is a comprehensive job platform serving the MENA region, connecting job seekers with exciting career opportunities. The platform provides a gateway to the best jobs across various industries in the Middle East and North Africa.",
      process: [
        {
          title: "Platform Development",
          description: "Built a modern job platform using Next.js and Prisma, featuring advanced search, filtering, and matching capabilities."
        },
        {
          title: "Database Design",
          description: "Designed a scalable database schema supporting job listings, company profiles, user applications, and analytics."
        },
        {
          title: "User Experience",
          description: "Created an intuitive interface for both job seekers and employers with streamlined application processes and company branding."
        }
      ],
      success: "Wazifame has successfully launched as the leading job platform in the MENA region, connecting thousands of job seekers with quality career opportunities.",
      client: "Wazifame",
      location: "MENA Region",
      projectType: "Job Platform, Web Development",
      duration: "10 months",
      allTechnologies: ['Next.js', 'Prisma', 'Web Development', 'PostgreSQL', 'TypeScript', 'React', 'Job Matching']
    },
    {
      title: "RoofEstimate - SaaS Estimation Tool",
      description: "Create and quickly send quotes, manage customer contacts, and measure addresses efficiently",
      image: "/asset/portfolio/Roof Estimate.png",
      alt: "RoofEstimate - SaaS Estimation Tool",
      link: "https://roofestimate.com/",
      tags: ['SaaS', 'Bubble.io'],
      extraTagsCount: 5,
      bgColor: "bg-slate-900",
      overview: "RoofEstimate is a SaaS estimation tool designed for roofing contractors to create and quickly send quotes, manage customer contacts, and measure addresses efficiently. Built on Bubble.io, it provides a no-code solution for business management.",
      process: [
        {
          title: "SaaS Development",
          description: "Developed a comprehensive SaaS platform using Bubble.io for rapid development and deployment of business management tools."
        },
        {
          title: "Quote Management",
          description: "Built an intuitive quote creation system with templates, pricing calculations, and automated quote delivery."
        },
        {
          title: "Customer Management",
          description: "Implemented a complete CRM system for managing customer contacts, project history, and communication tracking."
        }
      ],
      success: "RoofEstimate has successfully launched as a comprehensive SaaS tool, helping roofing contractors streamline their operations and improve customer service.",
      client: "RoofEstimate",
      location: "United States",
      projectType: "SaaS, Business Tool",
      duration: "6 months",
      allTechnologies: ['SaaS', 'Bubble.io', 'No-code Development', 'CRM', 'Quote Management', 'Business Automation']
    },
    {
      title: "WATI - WhatsApp Business API Platform",
      description: "Grow your business on WhatsApp. Personalize communication and sell more with the WhatsApp Business API platform",
      image: "/asset/portfolio/Wati Whatsapp Platform.png",
      alt: "WATI - WhatsApp Business API Platform",
      link: "https://www.wati.io/",
      tags: ['WhatsApp Business API', 'React'],
      extraTagsCount: 6,
      bgColor: "bg-slate-900",
      overview: "WATI is a WhatsApp Business API platform that helps businesses grow by personalizing communication and increasing sales. The platform enables businesses to automate marketing, sales, service, and support through WhatsApp.",
      process: [
        {
          title: "API Integration",
          description: "Integrated WhatsApp Business API to enable businesses to communicate with customers at scale through WhatsApp."
        },
        {
          title: "Platform Development",
          description: "Built a comprehensive platform using React with features for messaging automation, campaign management, and analytics."
        },
        {
          title: "Business Tools",
          description: "Developed tools for marketing automation, customer support, sales pipelines, and team collaboration."
        }
      ],
      success: "WATI has successfully launched as a trusted WhatsApp Business API platform, trusted by the fastest growing brands in rapidly developing economies, delivering real results and real stories.",
      client: "WATI",
      location: "Global",
      projectType: "WhatsApp Business API, Communication Platform",
      duration: "14 months",
      allTechnologies: ['WhatsApp Business API', 'React', 'Message Automation', 'CRM Integration', 'Marketing Automation', 'Customer Support', 'Analytics']
    }
  ];

  const totalSlides = serviceCards.length + 1; // +1 for bot image
  const autoSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const serviceSlideIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Service data from the service file
  const services = [
    {
      heading: "Web & Mobile Development",
      title: "Elevating Digital Experiences with High-Performance, Future-Ready Solutions",
      description: "I build fast, scalable, and visually engaging web and mobile applications designed to deliver a seamless user journey and long-term reliability. With years of full-stack expertise, I combine modern technologies, optimized architectures, and industry best practices to ensure your digital product not only performs exceptionally today but evolves effortlessly with your business tomorrow.\n\nWhether you need an MVP, a complex SaaS platform, or a cross-platform mobile app, I focus on clean architecture, intuitive UI/UX, and maintainable code that sets the foundation for sustainable growth."
    },
    {
      heading: "CRM Automation & Integration",
      title: "Transforming Operations Through Intelligent Workflows",
      description: "I help businesses eliminate inefficiencies and unlock operational clarity by implementing smart CRM automations that work for you—day and night. From HubSpot and GoHighLevel to custom CRM solutions, I design automated workflows, pipelines, integrations, and data systems that streamline your sales, marketing, and support processes.\n\nMy goal is simple: reduce manual work, increase conversion rates, and give you real-time visibility across your business, empowering your team to focus on what matters most - your clients."
    },
    {
      heading: "Blockchain & Web3 Solutions",
      title: "Secure, Scalable, and Innovation-Driven Blockchain Development",
      description: "I work with enterprises and startups looking to build trustless, secure, and scalable blockchain solutions from smart contracts and decentralized applications (dApps) to token ecosystems and private blockchain networks.\n\nMy approach focuses on security, transparency, and long-term feasibility, ensuring that your Web3 product aligns perfectly with your business goals while meeting the highest standards of reliability and compliance.\n\nWhether you're exploring blockchain for the first time or expanding an existing ecosystem, I provide clear guidance and full-cycle development."
    },
    {
      heading: "AI & Machine Learning Engineering",
      title: "Future-Proof Your Business with Practical, Impact-Driven AI Solutions",
      description: "I help organizations harness the power of artificial intelligence to automate processes, enhance decision-making, and unlock new business opportunities. From predictive models and NLP agents to custom AI-powered workflows, I deliver solutions that are not only cutting-edge but practical, efficient, and aligned with your real business needs.\n\nMy focus is on delivering AI systems that integrate seamlessly into your operations while bringing measurable ROI helping you stay ahead in a rapidly evolving digital landscape."
    },
    {
      heading: "DevOps, Cloud Architecture & Automation",
      title: "Faster Releases, Higher Reliability, and Stronger Infrastructure",
      description: "I implement modern DevOps practices that help teams ship faster, reduce downtime, and maintain highly scalable systems. With expertise in AWS, CI/CD pipelines, containerization, and automated deployments, I ensure your product runs on a secure, optimized, and cost-efficient cloud environment.\n\nFrom infrastructure design to monitoring, scaling, and automation, I bring the tools and processes that support consistent performance and effortless growth."
    }
  ];

  const totalServiceSlides = services.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto-sliding functionality
  useEffect(() => {
    autoSlideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => {
      if (autoSlideIntervalRef.current) {
        clearInterval(autoSlideIntervalRef.current);
      }
    };
  }, [totalSlides]);

  // Auto-sliding functionality for service banner
  useEffect(() => {
    serviceSlideIntervalRef.current = setInterval(() => {
      setCurrentServiceSlide((prev) => (prev + 1) % totalServiceSlides);
    }, 6000); // Change slide every 6 seconds

    return () => {
      if (serviceSlideIntervalRef.current) {
        clearInterval(serviceSlideIntervalRef.current);
      }
    };
  }, [totalServiceSlides]);

  const nextServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev + 1) % totalServiceSlides);
  };

  const prevServiceSlide = () => {
    setCurrentServiceSlide((prev) => (prev - 1 + totalServiceSlides) % totalServiceSlides);
  };

  const openProjectModal = (index: number) => {
    setSelectedProject(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeProjectModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#0a0b1a] via-[#141529] to-[#1a1b3a] relative overflow-x-hidden">
      {/* Vortex Background - Full Site */}
    <Vortex className="w-full h-full" particleCount={150} baseHue={120} />
      
    <div className="relative z-10">
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <button onClick={() => scrollToSection('hero')} className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden transform group-hover:scale-105 transition-transform">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />
                <div className="relative w-full h-full">
                  <Image src="/asset/man.png" alt="Logo" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-white font-semibold text-lg">Creative</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Projects
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors text-sm">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors text-sm">
                Contact
              </button>
            </nav>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-white focus:outline-none"
                aria-label="Open menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>

            <Button
              onClick={() => scrollToSection('contact')}
              className="hidden sm:flex bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Mobile Menu Modal */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[999] bg-black/80 flex flex-col items-center justify-center md:hidden animate-fade-in" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="absolute top-6 right-6 text-white" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
              <X className="w-8 h-8" />
            </button>
            <nav className="flex flex-col gap-8 text-center">
              <button onClick={() => { scrollToSection('services'); setIsMobileMenuOpen(false); }} className="text-white text-2xl font-semibold">Services</button>
              <button onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }} className="text-white text-2xl font-semibold">Projects</button>
              <button onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }} className="text-white text-2xl font-semibold">About</button>
              <button onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }} className="text-white text-2xl font-semibold">Contact</button>
            </nav>
          </div>
        )}
      </header>

      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 overflow-hidden">
        {/* Fireworks Background - Full Hero Section */}
        {/* <div className="absolute inset-0 w-full h-full">
          <Fireworks className="w-full h-full" particleCount={90} interval={1600} />
        </div> */}
        
        {/* Decorative Landing Shapes - Dynamic */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* Large floating orbs with blur - Dynamic movement */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-large" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-large-reverse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-float-large" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-amber-500/25 to-orange-500/25 rounded-full blur-3xl animate-float-large-reverse" style={{ animationDelay: '0.5s' }} />
          
          {/* Center large orb - Pulsing and glowing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-500/15 via-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse-glow" />
          
          {/* Geometric shapes - Rotating and floating */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-cyan-400/40 rounded-lg animate-rotate-and-float shadow-lg shadow-cyan-400/30" />
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-purple-400/40 rounded-full animate-float-large shadow-lg shadow-purple-400/30" style={{ animationDelay: '2.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-lg animate-float-large-reverse shadow-lg shadow-cyan-400/30" style={{ animationDelay: '3s' }} />
          
          {/* Additional decorative elements - Dynamic */}
          <div className="absolute top-1/4 left-1/2 w-16 h-16 border-2 border-cyan-400/35 rounded-full animate-float-large shadow-md shadow-cyan-400/25" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/4 right-1/2 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg animate-rotate-and-float shadow-md shadow-purple-400/25" style={{ animationDelay: '2s', animationDuration: '12s' }} />
          
          {/* More dynamic shapes */}
          <div className="absolute top-1/5 right-1/5 w-28 h-28 border border-cyan-400/25 rounded-lg rotate-45 animate-float-large" style={{ animationDelay: '0.8s' }} />
          <div className="absolute bottom-1/5 left-1/5 w-18 h-18 bg-gradient-to-br from-blue-400/25 to-purple-400/25 rounded-full animate-float-large-reverse" style={{ animationDelay: '1.2s' }} />
          
          {/* Grid pattern overlay - Subtle */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto w-full grid gap-8 lg:grid-cols-2 lg:gap-12 items-center relative z-10">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 rounded-full bg-cyan-400" />
              <ColourfulText>Seasoned AI Full-Stack Developer</ColourfulText>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span>
                  {displayedName}
                  {isTyping && <span className="animate-pulse"></span>}
                </span>
                {/* <span className="inline-flex items-center ml-4">
                  <ArrowUpRight className="w-12 h-12 text-cyan-400" />
                </span> */}
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I help businesses build scalable, production-ready applications from SaaS platforms to AI-powered workflows and automations. Let's bring your idea to life!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() => scrollToSection('projects')}
                size="lg"
                className="bg-white hover:bg-gray-100 text-black font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
              >
                See All Projects
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="bg-gradient-to-r from-slate-800 to-slate-900 text-cyan-400 border border-cyan-400/30 hover:from-slate-700 hover:to-slate-800 hover:border-cyan-400/50 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/20"
              >
                Contact Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-auto max-w-sm transform hover:scale-105 transition-transform">
                <p className="text-gray-300 italic mb-2">"Super talented and easy to work with. Highly recommend!"</p>
                <p className="text-cyan-400 text-sm">- Moran</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 ml-auto max-w-sm transform hover:scale-105 transition-transform">
                <p className="text-gray-300 italic mb-2">"Super helpful and appreciable work"</p>
                <p className="text-cyan-400 text-sm">- Michael</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Jonathan Lopez, <span className="text-gray-400">Full-Stack Developer | SaaS & AI Specialist</span>
            </h2>
            <p className="text-gray-400">Over 11 years of experience delivering scalable, production-ready solutions</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-12">
            <div className="relative aspect-square w-full lg:w-1/2 lg:aspect-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl animate-pulse" />

              {/* Carousel wrapper */}
              <div className="relative bg-gradient-to-br from-[#1a1b3a] to-[#0a0b1a] rounded-2xl overflow-hidden aspect-square border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20" />

                <div className="relative w-full h-full overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* Bot Image - Item 0 */}
                    <div className="min-w-full h-full flex-shrink-0">
                      <div className="relative w-full h-full flex items-center justify-center p-8">
                        <Image src="/asset/bot.png" alt="AI Bot" width={400} height={400} className="w-full h-full object-contain" />
                      </div>
                    </div>

                    {/* Service Cards - Items 1-7 */}
                    {serviceCards.map((card, index) => (
                      <div key={index} className="w-full h-full flex-shrink-0">
                        <div className="w-full h-full p-8 flex flex-col">
                          <div className="w-full h-full backdrop-blur-sm rounded-xl p-6 space-y-4 flex flex-col">
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center border border-cyan-500/30 flex-shrink-0">
                              <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect x="3" y="3" width="7" height="7" strokeWidth="2"/>
                                <rect x="14" y="3" width="7" height="7" strokeWidth="2"/>
                                <rect x="14" y="14" width="7" height="7" strokeWidth="2"/>
                                <rect x="3" y="14" width="7" height="7" strokeWidth="2"/>
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-white flex-shrink-0">{card.title}</h3>
                            <ul className="space-y-2 text-gray-300 flex-1 overflow-y-auto w-full">
                              {card.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex gap-2 text-sm w-full">
                                  <span className="font-semibold text-cyan-400 mt-0.5 flex-shrink-0">•</span>
                                  <div className="flex-1 min-w-0">
                                    <span className="font-semibold text-cyan-400">{item.label}</span>
                                    <span className="ml-1 break-words">{item.desc}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Slider indicators */}
              <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-2">
                {[...Array(serviceCards.length + 1)].map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-cyan-500 w-8' : 'bg-gray-500/50'
                    }`}
                    aria-label={`Slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                onClick={prevSlide}
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                  <ChevronLeft className="w-5 h-5 text-cyan-400" />
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                onClick={nextSlide}
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>

            <div className="space-y-6 w-full lg:w-1/2">
              <p className="text-gray-300 leading-relaxed">
                I help businesses build scalable, production-ready applications from SaaS platforms to AI-powered workflows and automations. With over 11 years of experience and 30+ successful projects, I deliver solutions that are both technically solid and business-driven.
              </p>

              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Next.js', 'Node.js', 'Python', 'Django', 'FastAPI', 'Prisma', 'Supabase', 'PostgreSQL', 'MongoDB', 'LangChain', 'CrewAI', 'React Native', 'Flutter', 'AWS', 'Docker'].map((skill) => (
                    <span key={skill} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">11+</div>
                  <div className="text-sm text-gray-400">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">30+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">Portfolio Projects</h2>
            <p className="text-gray-400">Showcasing my best work across various domains</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <div 
                key={index} 
                onClick={() => openProjectModal(index)}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className={`aspect-video relative overflow-hidden ${project.bgColor}`}>
                  <Image 
                    src={project.image} 
                    alt={project.alt} 
                    fill
                    className="object-cover transition-all duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">
                        {tag}
                      </span>
                    ))}
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-gray-300">+{project.extraTagsCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">About Me</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              With over 11 years of experience in full-stack development, I've helped businesses transform their ideas into scalable, production-ready applications. From SaaS platforms to AI-powered workflows, I deliver solutions that drive real business value.
            </p>
          </div>

          {/* Service Slide Banner */}
          <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-4 sm:p-8 lg:p-12 overflow-hidden">
            <div className="relative">
              {/* Carousel wrapper */}
              <div className="relative overflow-hidden">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentServiceSlide * 100}%)` }}
                >
                  {services.map((service, index) => (
                    <div key={index} className="min-w-full flex-shrink-0">
                      <div className="max-w-4xl mx-auto">
                        {/* Content Section */}
                        <div className="space-y-6 rounded-2xl p-8 lg:p-12">
                          {/* Heading with decorative lines */}
                          <div className="flex items-center gap-4 mb-6">
                            <div className="h-0.5 w-8 bg-cyan-400"></div>
                            <h3 className="text-xl lg:text-2xl font-semibold text-cyan-400">
                              {service.heading}
                            </h3>
                            <div className="h-0.5 flex-1 bg-cyan-400"></div>
                          </div>

                          {/* Main Title */}
                          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-6">
                            {service.title}
                          </h2>

                          {/* Description */}
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line text-base lg:text-lg">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentServiceSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentServiceSlide === index ? 'bg-cyan-500 w-8' : 'bg-gray-500/50 w-2'
                    }`}
                    aria-label={`Service slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slider controls */}
              <button
                type="button"
                onClick={prevServiceSlide}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                  <ChevronLeft className="w-5 h-5 text-cyan-400" />
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                onClick={nextServiceSlide}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-30 flex items-center justify-center px-4 cursor-pointer group focus:outline-none"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 group-hover:border-cyan-500/50 transition-all">
                  <ChevronRight className="w-5 h-5 text-cyan-400" />
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>

            {/* Why Clients Choose Me Section */}
            <div className="mt-16 pt-12 border-t border-white/10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8 text-center">
                Why Clients Choose Me
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "End-to-end development from concept to deployment",
                  "Clear communication and complete technical transparency",
                  "Business-first approach that I build with ROI and scalability in mind",
                  "Long-term partnership mindset, not just project delivery",
                  "Flexible engagement models to fit your needs"
                ].map((point, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-cyan-400" />
                      </div>
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 text-center">
                <p className="text-gray-400 text-lg mb-6">
                  If you're looking for someone who can not only build powerful technology but also understand your business vision and scale with you.
                </p>
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                >
                  I'd love to collaborate
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black/40 border-t border-white/5 px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 animate-pulse" />
                  <div className="relative w-full h-full">
                    <Image src="/asset/man.png" alt="Logo" width={40} height={40} className="w-full h-full object-cover" />
                  </div>
                </div>
                <span className="text-white font-semibold text-lg">Jonathan L.</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building scalable, production-ready applications with clean code and business-focused solutions.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Dribbble, href: '#' },
                  { icon: Send, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Twitter, href: '#' }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center transition-colors"
                  >
                    <social.icon className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Navigation</h3>
              <ul className="space-y-3">
                {['Home', 'Services', 'Projects', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Services</h3>
              <ul className="space-y-3">
                {['Full-Stack Development', 'SaaS & CRM Systems', 'AI Workflows & Chatbots', 'API Integrations', 'Mobile Apps', 'DevOps & Cloud'].map((service) => (
                  <li key={service} className="text-gray-400 text-sm">{service}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4 border-b border-cyan-500 pb-2 inline-block">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a 
                    href="mailto:lopez.jonathan0401@gmail.com" 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    lopez.jonathan0401@gmail.com
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <Send className="w-4 h-4 text-cyan-400" />
                  <a 
                    href="https://t.me/ven_god_dev" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    @ven_god_dev
                  </a>
                </li>
                <li className="flex items-center gap-2 text-gray-400 text-sm">
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  <a 
                    href="https://wa.me/13037106548" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    +1 (303) 710-6548
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-white font-medium">Ready to start your project?</p>
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                  Get in touch →
                </Button>
              </div>
              <div className="text-center md:text-right space-y-2">
                <p className="text-gray-400 text-sm">© 2025 Jonathan L. All rights reserved.</p>
                <div className="flex gap-4 text-xs text-gray-500">
                  <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
                  <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Details Modal */}
      {isModalOpen && selectedProject !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={closeProjectModal}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[90vh] bg-gradient-to-br from-[#0a0b1a] via-[#141529] to-[#1a1b3a] rounded-2xl border border-white/10 overflow-hidden animate-fade-in-scale"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeProjectModal}
              className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]" data-modal-content>
              {(() => {
                const project = portfolioProjects[selectedProject];
                const projectDetails = project as any;
                
                return (
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Left Column - Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                      {/* Hero Image */}
                      <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.alt}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <h2 className="text-4xl lg:text-5xl font-bold text-white">{project.title}</h2>
                        </div>
                      </div>

                      {/* Project Overview */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-4">PROJECT OVERVIEW</h3>
                        <p className="text-gray-300 leading-relaxed">
                          {projectDetails.overview || project.description}
                        </p>
                      </div>

                      {/* Process */}
                      {projectDetails.process && projectDetails.process.length > 0 && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-6">PROCESS</h3>
                          <div className="space-y-6">
                            {projectDetails.process.map((item: any, idx: number) => (
                              <div key={idx} className="flex gap-4">
                                <div className="w-12 h-12 rounded-full bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                                  <div className="w-3 h-3 rounded-full bg-cyan-400" />
                                </div>
                                <div>
                                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Outstanding Success */}
                      {projectDetails.success && (
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-4">OUTSTANDING SUCCESS</h3>
                          <p className="text-gray-300 leading-relaxed">
                            {projectDetails.success}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-8">
                      {/* Project Details */}
                      <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-6">Project Details</h3>
                        <div className="space-y-4">
                          {projectDetails.client && (
                            <div>
                              <span className="text-gray-400 text-sm">Client</span>
                              <p className="text-white font-medium">{projectDetails.client}</p>
                            </div>
                          )}
                          {projectDetails.location && (
                            <div>
                              <span className="text-gray-400 text-sm">Location</span>
                              <p className="text-white font-medium">{projectDetails.location}</p>
                            </div>
                          )}
                          {projectDetails.projectType && (
                            <div>
                              <span className="text-gray-400 text-sm">Project Type</span>
                              <p className="text-white font-medium">{projectDetails.projectType}</p>
                            </div>
                          )}
                          <div>
                            <span className="text-gray-400 text-sm">Technologies</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {(projectDetails.allTechnologies || project.tags).map((tech: string, idx: number) => (
                                <span key={idx} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-lg text-xs text-gray-300 hover:bg-white/20 transition-colors cursor-pointer">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          {projectDetails.duration && (
                            <div>
                              <span className="text-gray-400 text-sm">Duration</span>
                              <p className="text-white font-medium">{projectDetails.duration}</p>
                            </div>
                          )}
                          {project.link && (
                            <div>
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all"
                              >
                                <span>Visit Website</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Related Projects */}
                      <div>
                        <h3 className="text-xl font-bold text-white mb-6">Related Projects</h3>
                        <div className="space-y-4">
                          {portfolioProjects
                            .map((proj, idx) => ({ project: proj, index: idx }))
                            .filter(({ index }) => index !== selectedProject)
                            .slice(0, 3)
                            .map(({ project: relatedProject, index: relatedIndex }) => (
                              <div
                                key={relatedIndex}
                                className="flex gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/30 transition-colors cursor-pointer"
                                onClick={() => {
                                  setSelectedProject(relatedIndex);
                                  // Scroll to top of modal
                                  const modalContent = document.querySelector('[data-modal-content]');
                                  if (modalContent) {
                                    modalContent.scrollTop = 0;
                                  }
                                }}
                              >
                                <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                  <Image
                                    src={relatedProject.image}
                                    alt={relatedProject.alt}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                                    {relatedProject.title}
                                  </h4>
                                  <p className="text-gray-400 text-xs line-clamp-2">
                                    {relatedProject.description}
                                  </p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
