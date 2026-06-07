import { useEffect, useRef } from 'react'
import AOS from 'aos'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const experiences = [
  {
    id: 1,
    role: 'Senior QA Engineer',
    company: 'LTIMindtree',
    period: 'October 2024 - Present',
    highlights: [
      'Drive automation roadmap maintaining 95% test coverage with continuous framework optimization',
      'Lead technical mentorship of 3 junior QA engineers, improving team productivity by 30%',
      'Collaborate with 15+ stakeholders to define test strategy and quality gates in Agile delivery',
      'Generate actionable reports via ExtentReports and Azure DevOps for leadership visibility',
    ],
    tech: 'Selenium WebDriver, Tosca, Cucumber, Java, TestNG, Maven, Git, Azure DevOps',
  },
  {
    id: 2,
    role: 'QA Engineer',
    company: 'LTIMindtree',
    period: 'October 2021 - September 2024',
    highlights: [
      'Designed Hybrid Automation Framework (Selenium, Java, Cucumber), automating 500+ test cases and reducing regression time by 60% (5 days → 2 days)',
      'Integrated Tosca for end-to-end testing, achieving 95% coverage and cutting manual effort by 50%',
      'Identified and managed 300+ critical defects, improving stability by 40% and reducing defect leakage by 35%',
      'Built reusable automation utilities, reducing script development time by 45%',
      'Integrated automation with Jenkins CI/CD, enabling daily smoke tests with 98% success rate',
      'Developed 200+ Java automation scripts applying OOPs, exception handling, and design patterns',
    ],
    tech: 'Selenium WebDriver, Tosca, Cucumber, Java, TestNG, Maven, Git, Azure DevOps, Jenkins',
  },
]

function Experience() {
  const containerRef = useRef(null)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true })
  }, [])

  return (
    <section id="experience" ref={containerRef} className="bg-[#0a0a0a] py-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <p data-aos="fade-up" className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">Experience</p>
        <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl md:text-5xl font-black text-white mb-4">
          Where I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Worked</span>
        </h2>
        <p data-aos="fade-up" data-aos-delay="100" className="text-gray-500 mb-16 max-w-2xl">
          My professional journey in quality engineering and test automation at LTIMindtree.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-400/20 to-transparent transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              className={`relative mb-16 md:mb-24 flex flex-col md:flex-row ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 top-2 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a0a0a] transform -translate-x-1/2 z-10 shadow-lg shadow-blue-500/50"></div>

              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-blue-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <p className="text-blue-400 font-semibold mb-4">{exp.company}</p>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <svg className="w-4 h-4 mt-1 shrink-0 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.split(', ').map((t) => (
                      <span key={t} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
