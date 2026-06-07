import { useEffect } from 'react'
import AOS from 'aos'

const items = {
  certifications: [
    { title: 'Selenium Automation Testing with Java', issuer: '' },
    { title: 'Generative AI: A Primer for Beginners', issuer: '' },
  ],
  awards: [
    { title: 'Significant Contribution Award', description: 'Recognized for exceptional performance in ServiceNow Compass 2.0 implementation, improving incident resolution time by 25%' },
    { title: 'Super Crew Award', description: 'Honored for outstanding team collaboration and exceeding quality metrics for 3 consecutive quarters' },
    { title: 'Hi-Five Award', description: 'Acknowledged for providing critical support during production releases, ensuring zero-defect deployments' },
  ],
}

function Certifications() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <section id="certifications" className="bg-gradient-to-b from-[#0a0a0a] to-[#111] py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <p data-aos="fade-up" className="text-blue-400 font-semibold text-sm tracking-widest uppercase mb-4">Recognition</p>
        <h2 data-aos="fade-up" data-aos-delay="50" className="text-4xl md:text-5xl font-black text-white mb-16">
          Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Awards</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>
              Certifications
            </h3>
            <div className="space-y-4">
              {items.certifications.map((cert) => (
                <div key={cert.title} className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-blue-500/30 transition-all duration-300">
                  <h4 className="text-white font-semibold">{cert.title}</h4>
                  {cert.issuer && <p className="text-gray-500 text-sm mt-1">{cert.issuer}</p>}
                </div>
              ))}
            </div>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Awards
            </h3>
            <div className="space-y-4">
              {items.awards.map((award) => (
                <div key={award.title} className="bg-white/[0.02] border border-white/10 rounded-xl p-5 hover:border-yellow-500/30 transition-all duration-300">
                  <h4 className="text-white font-semibold">{award.title}</h4>
                  <p className="text-gray-400 text-sm mt-2 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications
