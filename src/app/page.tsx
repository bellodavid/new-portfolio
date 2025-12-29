import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section with Gradient */}
      <section className="hero-section-modern fade-in-up">
        <div className="hero-gradient-bg"></div>
        <div className="hero-content-modern">
          <div className="hero-text">
            <p className="hero-label">Full-Stack Engineer & Entrepreneur</p>
            <h1 className="hero-title">
              Building the Future of <span className="gradient-text">Digital Finance</span>
            </h1>
            <p className="hero-description">
              Founder of DBMansion, building AI-powered compliance tools for financial institutions.
              At BananaCrystal, I built P2P trading platforms and payment infrastructure serving 150+ countries.
            </p>

            <div className="hero-cta">
              <Link href="/projects" className="btn-primary-modern">
                View My Work
                <span className="arrow">→</span>
              </Link>
              <Link href="/about" className="btn-secondary-modern">
                About Me
              </Link>
            </div>
          </div>

          <div className="hero-image-modern">
            <div className="image-wrapper">
              <Image
                src="/profile.png"
                alt="David Bello"
                width={300}
                height={300}
                priority
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured-work-section fade-in-up delay-100">
        <div className="section-header">
          <h2>Featured Work</h2>
          <p className="section-subtitle">Building production systems that serve thousands of users globally</p>
        </div>

        <div className="featured-grid">
          <div className="featured-card">
            <div className="card-badge founder">Founder & CEO</div>
            <h3>DBMansion</h3>
            <p>AI-powered compliance and data security platform for financial institutions. Cut manual review time by 60% with real-time anomaly detection.</p>
            <div className="card-tech">
              <span>AI/ML</span>
              <span>Compliance</span>
              <span>Data Security</span>
            </div>
            <Link href="/projects" className="card-link">
              Learn more →
            </Link>
          </div>

          <div className="featured-card">
            <div className="card-badge live">Live Product</div>
            <h3>Liquidity Pool & CEX</h3>
            <p>Complete trading platform with 150+ stablecoin pairs, prediction marketplace, and multi-chain offramp. Reduced slippage from 2.1% to 0.4%.</p>
            <div className="card-tech">
              <span>Blockchain</span>
              <span>AMM</span>
              <span>Smart Contracts</span>
            </div>
            <Link href="/projects" className="card-link">
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="tech-stack-section fade-in-up delay-200">
        <h2>Technical Expertise</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h4>Mobile & Web</h4>
            <div className="tech-tags">
              <span>React Native</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>Next.js</span>
            </div>
          </div>
          <div className="tech-category">
            <h4>Backend & Infrastructure</h4>
            <div className="tech-tags">
              <span>Node.js</span>
              <span>Ruby on Rails</span>
              <span>AWS</span>
              <span>PostgreSQL</span>
            </div>
          </div>
          <div className="tech-category">
            <h4>Blockchain & AI</h4>
            <div className="tech-tags">
              <span>Hedera Hashgraph</span>
              <span>Smart Contracts</span>
              <span>AI/ML</span>
              <span>Solidity</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
