import { useEffect } from 'react'
import AOS from 'aos'

const skillCategories = [
  {
    title: 'Automation Tools',
    skills: ['Selenium WebDriver', 'Tosca Automation', 'TestNG', 'Cucumber BDD'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    title: 'Programming Languages',
    skills: ['Core Java', 'Collections', 'OOPs', 'Exception Handling', 'File I/O'],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Frameworks',
    skills: ['Hybrid Framework', 'Data-Driven Framework', 'Page Object Model', 'Cucumber BDD'],
    color: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Test Management',
    skills: ['Azure DevOps', 'ServiceNow', 'JIRA'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'CI/CD & Build Tools',
    skills: ['Jenkins', 'Maven', 'Git', 'Eclipse IDE'],
    color: 'from-orange-400 to-red-500',
  },
  {
    title: 'Databases & Libraries',
    skills: ['MySQL Server', 'Apache POI', 'Log4j', 'ExtentReports'],
    color: 'from-green-400 to-green-600',
  },
]

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section id="skills" className="bg-gradient-to-b from-[#111] to-[#0a0a0a] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p data-aos="fade-up" className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">Skills</p>
        <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl md:text-5xl font-black text-white mb-4">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Expertise</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 mb-16 max-w-2xl">
          Tools and technologies I work with daily to deliver quality software.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, index) => (
            <div
              key={cat.title}
              data-aos="fade-up"
              data-aos-delay={100 + index * 50}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-500 group"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-3">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-blue-500/20 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" className="mt-16 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
          <p className="text-blue-300 text-lg font-semibold mb-2">Methodologies</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Agile/Scrum', 'Test-Driven Development (TDD)', 'Hybrid Testing', 'Continuous Integration'].map((m) => (
              <span key={m} className="text-white bg-blue-500/20 px-4 py-2 rounded-full text-sm font-medium">{m}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
