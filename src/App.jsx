import React, { useState, useEffect } from 'react';
import Laptop3D from './components/LapTop3d.jsx';
import BibliotecaLogo from "../Images/BibliotecaLogo.JPG";
const experiences = [
  {
    company: 'BINSA SOFTWARE',
    role: 'Developer',
    period: '04/2024 — 10/2024',
    summary: 'Desarrollo full-stack empresarial con C# (.NET), Ext JS, SQL Server y Crystal Reports, participando hasta el pase a producción.',
    tools: ['C# (.NET)', 'SQL Server', 'Ext JS', 'Crystal Reports']
  }
];

const education = [
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad San Ignacio de Loyola (USIL)',
    period: '2025 — Actualidad',
  },
  {
    degree: 'Desarrollo de Software (Técnico)',
    institution: 'Instituto San Ignacio de Loyola (ISIL)',
    period: '2022 — 2025',
  }
];

const projects = [
  {
    title: 'Sistema Transaccional Empresarial',
    year: '2026',
    description: 'Arquitectura backend robusta con gestión de transacciones, persistencia relacional y panel administrativo.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Tailwind'],
    github: 'https://github.com/jose200321',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'E-Commerce Librería Full-Stack',
    year: '2026',
    description: 'Plataforma de comercio electrónico con pasarela de pagos integrada, carrito persistente y gestión de catálogo.',
    tags: ['React', 'Node.js', 'SQL Server', 'Mercado Pago',"HTML5", "CSS3" , "Tailwind CSS" ],
    github: 'https://github.com/jose200321/Biblioteca',
    demo: 'https://biblioteca-ten-lilac.vercel.app/',
    image: BibliotecaLogo,
  },
  {
    title: 'Analytics Dashboard',
    year: '2025',
    description: 'Visualización de métricas y rendimiento en tiempo real con enfoque en velocidad de respuesta y diseño limpio.',
    tags: ['React', 'Tailwind CSS', 'REST API'],
    github: 'https://github.com/jose200321',
    demo: '#',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="2" />
            <ellipse cx="12" cy="12" rx="3.5" ry="9" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" />
            <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
          </svg>
        )
      },
      {
        name: 'JavaScript (ES6+)',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
          </svg>
        )
      },
      {
        name: 'Tailwind CSS',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1-1 1-4 1-5-2-8-2-4 1-4 1zM4 9s1-1 4-1 5 2 8 2 4-1 4-1-1 1-4 1-5-2-8-2-4 1-4 1z" />
          </svg>
        )
      },
      {
        name: 'HTML5 & CSS3',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Java / Spring Boot',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 10h-1.26A8 8 0 109 20h9a1 1 0 001-1v-8a1 1 0 00-1-1z" />
          </svg>
        )
      },
      {
        name: 'Node.js / Express',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        )
      },
      {
        name: 'C# / .NET',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Bases de Datos',
    skills: [
      {
        name: 'SQL Server',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
          </svg>
        )
      },
      {
        name: 'Oracle PL/SQL',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        )
      },
      {
        name: 'MySQL',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 12c0 2.21 3.58 4 8 4s8-1.79 8-4" />
          </svg>
        )
      },
      {
        name: 'PostgreSQL',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )
      }
    ]
  },
  {
    title: 'Control de Versiones',
    skills: [
      {
        name: 'Git',
        icon: (
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <circle cx="18" cy="6" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v6M6 9v3a3 3 0 003 3h3" />
          </svg>
        )
      }
    ]
  }
];

export default function App() {
  // Estado para Modo Oscuro (persiste en localStorage)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Efecto de tipeo rápido
  const fullText = "Desarrollador de Software Full-Stack";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(55);

  useEffect(() => {
    const handleType = () => {
      const updatedText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2200);
        setTypingSpeed(30);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(55);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-950 dark:text-neutral-50 font-sans transition-colors duration-300">
      {/* Navegación */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          <a href="#" className="font-semibold tracking-tight text-lg">
            JH<span className="text-neutral-400 dark:text-neutral-600">.</span>
          </a>

          <div className="flex items-center gap-6 md:gap-8">
            <nav className="hidden md:flex gap-6 md:gap-8 text-sm text-neutral-600 dark:text-neutral-400">
  <a href="#trayectoria" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Trayectoria</a>
  <a href="#proyectos" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Proyectos</a>
  <a href="#stack" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Stack</a>
  <a href="#contacto" className="hover:text-neutral-950 dark:hover:text-white transition-colors">Contacto</a>
</nav>

            {/* Botón Modo Oscuro */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Alternar modo oscuro"
              className="p-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white transition-colors cursor-pointer"
            >
              {darkMode ? (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 md:px-10">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-neutral-200 dark:border-neutral-800 grid grid-cols-1 lg:grid-cols-12 items-center gap-10 transition-colors duration-300">
          <div className="lg:col-span-7 text-left">
            <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 dark:text-neutral-400 mb-4">
              José Axel Hinostroza Peña
            </p>

            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.3] mb-6 max-w-xl">
  <span className="block min-h-[2.6em]">
    <span>{displayText}</span>
    <span className="inline-block w-[3px] h-[0.85em] bg-neutral-950 dark:bg-white ml-1 animate-pulse align-middle"></span>
  </span>
</h1>

            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg font-light max-w-xl leading-relaxed mb-10">
              Apasionado por la creación de soluciones digitales eficientes y escalables, con experiencia en desarrollo web y aplicaciones empresariales. Siempre en busca de nuevos desafíos y oportunidades para aprender y crecer profesionalmente.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="px-7 py-3.5 bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
              >
                Ver proyectos
              </a>
              <a
                href="/Jose_Hinostroza_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 border border-neutral-300 dark:border-neutral-700 text-neutral-950 dark:text-white text-sm font-medium rounded-full hover:border-neutral-950 dark:hover:border-white transition-colors inline-flex items-center gap-2"
              >
                <span>CV</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <Laptop3D darkMode={darkMode} />
            
          </div>
        </section>

        {/* Trayectoria (Experiencia + Educación unificadas) */}
<section id="trayectoria" className="py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
  <div className="flex items-baseline justify-between mb-12">
    <h2 className="text-2xl font-semibold tracking-tight">Trayectoria</h2>
    <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Experiencia & Formación</span>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Columna Izquierda: Experiencia */}
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-6">
        Experiencia
      </h3>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="text-base font-medium">
                {exp.company} <span className="text-neutral-400 font-light">— {exp.role}</span>
              </h4>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{exp.period}</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-4">
              {exp.summary}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {exp.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] px-2.5 py-0.5 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Columna Derecha: Educación */}
    <div>
      <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 mb-6">
        Educación
      </h3>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index}>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h4 className="text-base font-medium">{edu.degree}</h4>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{edu.period}</span>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 font-light">
              {edu.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Proyectos */}
<section id="proyectos" className="py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
  <div className="flex items-baseline justify-between mb-12">
    <h2 className="text-2xl font-semibold tracking-tight">Proyectos</h2>
    <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Selección 2025—2026</span>
  </div>

  <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
    {projects.map((project, index) => (
      <article
        key={index}
        className="py-12 first:pt-0 last:pb-0 group"
      >
        {/* Fila superior: Información a la izquierda y 2 iconos a la derecha */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-lg font-medium">
                {project.title}
              </h3>
              <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">{project.year}</span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Iconos de GitHub y Enlace del Proyecto */}
          <div className="flex items-center gap-3 self-start shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Código de ${project.title} en GitHub`}
                title="Ver código en GitHub"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver proyecto ${project.title}`}
                title="Visitar proyecto en vivo"
                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Imagen del proyecto debajo */}
        {project.image && (
          <div className="mt-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
            <img
              src={project.image}
              alt={`Vista previa de ${project.title}`}
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        )}
      </article>
    ))}
  </div>
</section>

        {/* Stack Técnico Desglosado con Iconos */}
        <section id="stack" className="py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors duration-300">
          <div className="flex items-baseline justify-between mb-12">
            <h2 className="text-2xl font-semibold tracking-tight">Tecnologías</h2>
            <span className="text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">Stack Técnico</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((item) => (
                    <span
                      key={item.name}
                      className="px-3.5 py-1.5 text-sm border border-neutral-200 dark:border-neutral-800 rounded-full text-neutral-800 dark:text-neutral-200 hover:border-neutral-950 dark:hover:border-white transition-colors inline-flex items-center gap-2"
                    >
                      <span className="text-neutral-500 dark:text-neutral-400">{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contacto */}
       
<section id="contacto" className="py-24">
  <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
    Contacto
  </h2>
  <p className="text-neutral-600 dark:text-neutral-400 font-light max-w-lg mb-8">
    Disponible para oportunidades de desarrollo, proyectos freelance o colaboraciones técnicas.
  </p>
  
  {/* Iconos de contacto minimalistas */}
  <div className="flex items-center gap-4">
    {/* Email */}
    <a
      href="mailto:joseaxel293@gmail.com"
      aria-label="Enviar Email"
      title="Enviar Email"
      className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    </a>

    {/* GitHub */}
    <a
      href="https://github.com/jose200321"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="Ver perfil de GitHub"
      className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    </a>

    {/* LinkedIn */}
    <a
      href="https://linkedin.com/in/josehinostroza29"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="Ver perfil de LinkedIn"
      className="p-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:border-neutral-950 dark:hover:border-white hover:text-neutral-950 dark:hover:text-white transition-colors"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    </a>
  </div>
</section>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 text-center text-xs text-neutral-400 dark:text-neutral-500 transition-colors duration-300">
        © {new Date().getFullYear()} — Diseñado y desarrollado por José Axel Hinostroza Peña.
      </footer>
    </div>
  );
}