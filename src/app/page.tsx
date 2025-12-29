import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section fade-in-up">
        <div className="hero-content">
          <h1>Hi, I'm David Bello.</h1>
          <p className="intro-text">
            Full-stack engineer and entrepreneur building the future of digital finance. Founder of DBMansion, building AI-powered compliance tools for financial institutions. At BananaCrystal, I built P2P trading platforms and payment infrastructure serving 150+ countries.
          </p>
          <p className="intro-subtext">
            Founder & CEO at <a href="https://dbmansion.com" target="_blank" rel="noopener noreferrer">DBMansion</a>. Software Engineer at <a href="https://bananacrystal.com" target="_blank" rel="noopener noreferrer">BananaCrystal</a>.
          </p>
          <div className="cta-buttons" style={{ marginTop: '2rem' }}>
            <Link href="/projects" className="btn-primary">View Projects</Link>
            <Link href="/experience" className="btn-secondary" style={{ marginLeft: '1rem' }}>Experience</Link>
          </div>
        </div>
        <div className="hero-image">
          <Image
            src="/profile.png"
            alt="David Bello"
            width={200}
            height={200}
            priority
          />
        </div>
      </section>

      <section className="featured-section fade-in-up delay-200">
        <div className="container">
          <h2>What I Build</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Image
                src="/fintech-icon.png"
                alt="Fintech"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>P2P Trading Platforms</h3>
              <p>Built mobile apps for peer-to-peer currency trading, cutting out banks entirely. Users trade USD with local currencies directly - now serving 150+ countries with instant settlements.</p>
            </div>
            <div className="feature-item">
              <Image
                src="/blockchain-icon.png"
                alt="Blockchain"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>Blockchain Infrastructure</h3>
              <p>Developed a CEX with 150+ stablecoin pairs, prediction marketplace with leverage trading, and multi-chain USDC offramp. Reduced slippage from 2.1% to 0.4% through automated rebalancing.</p>
            </div>
            <div className="feature-item">
              <Image
                src="/mobile-icon.png"
                alt="AI & Compliance"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>AI-Powered Compliance</h3>
              <p>Building intelligent fintech infrastructure at DBMansion. Our AI tools cut manual compliance review time by 60% and flag transaction anomalies in real-time for financial institutions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
