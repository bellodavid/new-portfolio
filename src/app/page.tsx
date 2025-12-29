import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero-section fade-in-up">
        <div className="hero-content">
          <h1>Hi, I'm David Bello.</h1>
          <p className="intro-text">
            I'm a Full-stack Software Engineer and Fintech Founder. I build intelligent infrastructure for the future of finance.
          </p>
          <p className="intro-subtext">
            Founder at <a href="https://dbmansion.com" target="_blank" rel="noopener noreferrer">DBMansion</a>. Lead Mobile Developer at <a href="https://bananacrystal.com" target="_blank" rel="noopener noreferrer">BananaCrystal</a>.
          </p>
          <div className="cta-buttons" style={{ marginTop: '2rem' }}>
            <Link href="/experience" className="btn-primary">View Experience</Link>
            <Link href="/projects" className="btn-secondary" style={{ marginLeft: '1rem' }}>See Projects</Link>
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
          <h2>What I Do</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <Image
                src="/fintech-icon.png"
                alt="Fintech"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>Fintech Infrastructure</h3>
              <p>Building secure, scalable systems for crypto payments, stablecoins, and multi-currency wallets.</p>
            </div>
            <div className="feature-item">
              <Image
                src="/mobile-icon.png"
                alt="Mobile Engineering"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>Mobile Engineering</h3>
              <p>Leading end-to-end development of cross-platform mobile apps using React Native and Kotlin.</p>
            </div>
            <div className="feature-item">
              <Image
                src="/blockchain-icon.png"
                alt="Blockchain"
                width={64}
                height={64}
                className="feature-icon"
              />
              <h3>Blockchain Solutions</h3>
              <p>Specialized in Hedera network integrations, smart contracts, and AMM systems.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
