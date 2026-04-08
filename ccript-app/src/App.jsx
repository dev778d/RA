import React, { useEffect, useState } from 'react';
import { ArrowRight, Code2, BrainCircuit, Cloud, Target, ChevronRight, Activity, Smartphone } from 'lucide-react';
import './index.css';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e) => {
    for (const card of document.querySelectorAll('.service-card')) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    }
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`} style={{
        padding: scrollY > 50 ? '15px 0' : '25px 0',
        boxShadow: scrollY > 50 ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
      }}>
        <div className="container">
          <div className="logo">
            RAGRATIVE<span>.</span>
          </div>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#advisory">Advisory</a>
            <a href="#models">Engagement Models</a>
            <a href="#company">Company</a>
          </div>
          <a href="#contact" className="btn-outline-red" style={{ padding: '10px 24px', fontSize: '0.9rem' }}>
            Let's Talk Growth
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <div className="badge animate-fade-in">
              <Activity size={16} /> AI-Powered Innovation
            </div>
            <h1 className="animate-fade-in delay-100">
              Transform your business with <span>AI-driven</span> software development
            </h1>
            <p className="animate-fade-in delay-200">
              Deliver complex projects on time and on budget. Harness the power of intelligent digital solutions to accelerate your growth and outpace the competition.
            </p>
            <div className="hero-btns animate-fade-in delay-300">
              <a href="#contact" className="btn-ripple">
                Explore Services <ArrowRight size={20} style={{ marginLeft: 8 }} />
              </a>
              <a href="#about" className="btn-outline-red">
                Discovery Workshop
              </a>
            </div>

            <div className="stats-grid animate-fade-in delay-300">
              <div className="stat-item">
                <h3>20<span>+</span></h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>500<span>+</span></h3>
                <p>Clients Empowered</p>
              </div>
              <div className="stat-item">
                <h3>3K<span>+</span></h3>
                <p>Engineers Worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services">
        <div className="container">
          <div className="section-header">
            <h2>Our Core Offerings</h2>
            <p>From strategic advisory to cutting-edge artificial intelligence, we engineer solutions that scale and perform.</p>
          </div>
          
          <div className="services-grid" onMouseMove={handleMouseMove}>
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">
                <BrainCircuit size={32} />
              </div>
              <h3>Artificial Intelligence</h3>
              <p>Generative AI, MLOps, AI Agents, and custom models to automate and optimize your workflows.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
                <Code2 size={32} />
              </div>
              <h3>Engineering Product</h3>
              <p>Applications, Cloud Migration, and full-cycle engineering from PoC to enterprise scale.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">
                <Smartphone size={32} />
              </div>
              <h3>Design Services</h3>
              <p>UI/UX Design, Prototyping, and Design Systems built for clarity, control, and efficiency.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
                <Cloud size={32} />
              </div>
              <h3>Cloud Integration</h3>
              <p>ERP & CRM integrations, Third-Party connections, and highly available Cloud architectures.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-icon">
                <Target size={32} />
              </div>
              <h3>Advisory & Strategy</h3>
              <p>Discovery workshops and technical feasibility studies to map your digital transformation.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>

            {/* Service 6 */}
            <div className="service-card">
              <div className="service-icon">
                <Activity size={32} />
              </div>
              <h3>Optimization</h3>
              <p>Support, maintenance, Software Audits, and rigorous Quality Assurance testing.</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section portfolio">
        <div className="container">
          <div className="section-header">
            <h2>Production Work</h2>
            <p>A look at our highest impact AI and digital transformations. Driving millions in value.</p>
          </div>
          
          <div className="portfolio-grid" onMouseMove={handleMouseMove}>
            {/* Portfolio Item 1 */}
            <div className="portfolio-card service-card">
              <div className="portfolio-image-placeholder">
                <span className="portfolio-metric">100% Ticket Resolution</span>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span className="p-tag">SaaS</span>
                  <span className="p-tag">Automation</span>
                </div>
                <h3>Streamlined Operations With Salesforce & Azure</h3>
                <p>Complete integration driving significant team productivity increases for enterprise operations.</p>
                <a href="#" className="service-link">View Project <ArrowRight size={16} style={{ marginLeft: 6 }}/></a>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="portfolio-card service-card">
              <div className="portfolio-image-placeholder">
                <span className="portfolio-metric">Smarter Gameplay</span>
              </div>
              <div className="portfolio-content">
                <div className="portfolio-tags">
                  <span className="p-tag">AI/LLM</span>
                  <span className="p-tag">AR/VR</span>
                </div>
                <h3>AI in AR/VR Game Development Services</h3>
                <p>Scaling intelligent, responsive behaviors into massive virtual reality environments.</p>
                <a href="#" className="service-link">View Project <ArrowRight size={16} style={{ marginLeft: 6 }}/></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process/How we work */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>A proven methodology focused on quality, usability, and measurable business outcomes.</p>
          </div>
          
          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }} onMouseMove={handleMouseMove}>
            <div className="service-card" style={{ boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-red)' }}>01. Discovery</h3>
              <p>We start with your vision: What do you want to build? How can we accelerate your company's growth?</p>
            </div>
            <div className="service-card" style={{ boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-red)' }}>02. Kickoff</h3>
              <p>We align on strategy and set clear goals. Our team plans every step, ensuring clear timelines.</p>
            </div>
            <div className="service-card" style={{ boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-red)' }}>03. Execute</h3>
              <p>We bring your vision to life with precision and creativity, leveraging the best tools available.</p>
            </div>
            <div className="service-card" style={{ boxShadow: 'none' }}>
              <h3 style={{ color: 'var(--primary-red)' }}>04. Deliver</h3>
              <p>We present the final product, polished and ready for impact, ensuring your business achieves growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="cta-pattern"></div>
        <div className="container">
          <h2>Wondering how well we know your industry?</h2>
          <p>On average, RAGRATIVE clients benefit by $600,000+ from annual savings as a result of our collaboration.</p>
          <a href="#contact" className="btn-ripple">Let's Talk Growth</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <h2>RAGRATIVE<span>.</span></h2>
              <p>Sit, Relax & Envision. Let RAGRATIVE handle the rest with our premium AI-driven engineering and design services.</p>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Services</h4>
              <ul>
                <li><a href="#">Engineering</a></li>
                <li><a href="#">Artificial Intelligence</a></li>
                <li><a href="#">Design Services</a></li>
                <li><a href="#">Optimization</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Connect</h4>
              <ul>
                <li><a href="mailto:admin@ragrative.com">admin@ragrative.com</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} RAGRATIVE Agency. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <a href="#">Terms of Use</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
