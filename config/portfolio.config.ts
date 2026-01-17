// Portfolio Configuration File
// Customize your portfolio easily by updating these values

export const portfolioConfig = {
  // Personal Information
  personal: {
    name: 'Naeem Rehman',
    profileImage: "/profile.jpg",
    title: 'MERN Stack Developer',
    bio: 'Crafting beautiful and functional web applications with MongoDB, Express, React, and Node.js',
    email: 'naeemshar127@gmail.com',
    phone: '+92 3043444434',
    location: 'Available remotely Worldwide',
  },

  // Social Links
  social: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    email: 'mailto:naeemshar127@gmail.com',
  },

  // About Section
  about: {
    description: [
      "I'm Naeem Rehman, a dedicated MERN Stack Developer with a passion for building scalable web applications. I specialize in creating seamless user experiences through clean code and modern design principles.",
      "With expertise in MongoDB, Express.js, React, and Node.js, I bring ideas to life by combining robust backend architecture with intuitive frontend interfaces. My goal is to deliver high-quality solutions that not only meet but exceed client expectations.",
      "When I'm not coding, I'm constantly learning new technologies and staying updated with the latest trends in web development to ensure I'm always delivering cutting-edge solutions.",
    ],
    stats: [
      { label: 'Projects Completed', value: '50+' },
      { label: 'Years Experience', value: '3+' },
      { label: 'Happy Clients', value: '30+' },
      { label: 'Technologies', value: '15+' },
    ],
    services: [
      {
        title: 'Frontend Development',
        description: 'Building responsive and interactive user interfaces with React',
      },
      {
        title: 'Backend Development',
        description: 'Creating robust APIs and server-side logic with Node.js & Express',
      },
      {
        title: 'Database Design',
        description: 'Designing and managing MongoDB databases for optimal performance',
      },
      {
        title: 'Full Stack Solutions',
        description: 'End-to-end web application development with MERN stack',
      },
    ],
  },

  // Skills Configuration
  skills: {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Redux', level: 75 },
    ],
    backend: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 90 },
      { name: 'MongoDB', level: 85 },
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'Postman', level: 80 },
    ],
  },

  // Projects Configuration
  projects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
      image: '/project-ecommerce.jpg',
      gradient: 'gradient-bg-1',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates, team collaboration, and project tracking features.',
      image: '/project-task.jpg',
      gradient: 'gradient-bg-2',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true,
    },
    {
      title: 'Social Media Dashboard',
      description:
        'A comprehensive social media analytics dashboard with data visualization, user insights, and engagement metrics.',
      image: '/project-dashboard.jpg',
      gradient: 'gradient-bg-3',
      technologies: ['React', 'Node.js', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Blog Platform',
      description:
        'A modern blog platform with rich text editor, comment system, and admin panel for content management.',
      image: '/project-blog.jpg',
      gradient: 'gradient-bg-4',
      technologies: ['React', 'Express', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Real-time Chat Application',
      description:
        'A real-time messaging application with Socket.io integration, multiple chat rooms, and file sharing capabilities.',
      image: '/project-chat.jpg',
      gradient: 'gradient-bg-5',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
    {
      title: 'Weather App',
      description:
        'A weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: '/project-weather.jpg',
      gradient: 'gradient-bg-6',
      technologies: ['React', 'Node.js', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false,
    },
  ],

  // Theme Configuration
  theme: {
    // Color scheme can be customized in tailwind.config.js
    // Sections with white background: About, Skills, Contact
    // Sections with dark background: Hero, Projects
    alternatingBackgrounds: true,
  },
}
