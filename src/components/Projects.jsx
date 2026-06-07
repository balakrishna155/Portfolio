import { useEffect } from 'react'
import AOS from 'aos'

const projects = [
  {
    title: 'TestingAssistant',
    description: 'AI-powered QA tools suite — Prompt Assistant, Test Case Generator, and Bug Formatter. Built for QA engineers to transform ideas into polished outputs.',
    url: 'https://testing-assistant-psi.vercel.app/',
    tags: ['AI', 'QA Tools', 'Prompt Engineering'],
  },
  {
    title: 'Hybrid Automation Framework',
    description: 'Designed Hybrid Automation Framework (Selenium, Java, Cucumber) automating 500+ test cases, reducing regression time by 60% (5 days to 2 days).',
    tags: ['Selenium', 'Java', 'Cucumber', 'TestNG'],
  },
  {
    title: 'CIS Enterprise Application',
    description: 'Enterprise suite (Leave, Exit, Whistle Blower, Travel) supporting 10,000+ employees. Led QA strategy with 95% test coverage.',
    tags: ['Selenium', 'Tosca', 'Azure DevOps'],
  },
]

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="projects" className="bg-white pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-16">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-sm text-gray-600 font-bold mb-6 shadow-sm bg-white">
            Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Things I've <span className="text-[#ff2a2a]">Built</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="group rounded-[2rem] bg-white border border-gray-200 shadow-[0_15px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(255,42,42,0.15)] hover:border-red-200 transition-all duration-500 overflow-hidden"
            >
              <div className="p-8 flex flex-col h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#ff2a2a] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>

                <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-500 font-medium leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">{tag}</span>
                  ))}
                </div>

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ff2a2a] font-bold text-sm group/link"
                  >
                    Visit Site
                    <svg className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
