export default function About() {
    return (
        <div className="about-page">
            <h1 className="fade-in-up">About</h1>

            <div className="about-content fade-in-up delay-100">
                <p>
                    I'm a full-stack software engineer and entrepreneur building the future of digital finance. My work spans P2P currency trading platforms, decentralized exchanges, payment infrastructure, and AI-powered compliance tools, all focused on making financial services more accessible and efficient.
                </p>

                <h2>What I'm Building</h2>
                <p>
                    As <strong>Founder & CEO of DBMansion</strong>, I'm building intelligent fintech infrastructure for financial institutions. We deliver enterprise-grade data security, regulatory compliance automation, and AI-driven financial intelligence. Our platform cuts manual review time by about 60% and processes transaction data in real-time to flag anomalies within seconds.
                </p>

                <p>
                    At <strong>BananaCrystal</strong>, I built the mobile app from scratch as part of the team. The platform is a P2P currency trading ecosystem where users can trade USD with their local currencies directly, cutting out banks and exchange bureaus entirely. Features include instant P2P payments worldwide (almost free using blockchain rails), a Virtual Terminal for businesses, dual interest investment accounts, and Visa-compatible crypto debit cards, now serving 150+ countries.
                </p>

                <h2>Technical Highlights</h2>
                <p>
                    I built the <strong>BananaCrystal Liquidity Pool</strong> solo, a complete trading platform featuring a CEX with 150+ stablecoin pairs, prediction marketplace where users create long/short offers with leverage, and multi-chain USDC offramp to bank accounts in 150+ countries. Reduced slippage from 2.1% to 0.4% through automated rebalancing algorithms.
                </p>

                <p>
                    Created a <strong>crypto payment SDK</strong> that's published on NPM, enabling merchants to accept cryptocurrency payments seamlessly. Built for both web and mobile platforms with comprehensive documentation. Also developed the complete mobile app infrastructure using React Native, took it from designs to production in 4 months.
                </p>

                <p>
                    At <strong>AwaCash</strong>, I contributed to building a cross-border money transfer and digital banking app serving 15+ countries. Streamlined the loan application flow from 8 steps down to 4 (35% completion increase), cut app load time from 4.2s to 1.8s, and reduced API errors by 40%.
                </p>

                <h2>Technical Stack</h2>
                <p>
                    I work across the full stack: React Native and TypeScript for mobile, React and Node.js for web, Hedera Hashgraph for blockchain infrastructure, AWS for cloud deployment, and Ruby on Rails for backend systems. I'm particularly focused on the intersection of traditional finance and Web3, working with partners like the Hedera Foundation, Folks Finance, and Brale.
                </p>

                <p>
                    I thrive in challenging environments where I can solve complex problems, whether it's optimizing performance for varying network conditions, designing secure P2P payment systems, or building AI-powered compliance tools that actually work in production.
                </p>
            </div>

            <div className="about-cta fade-in-up delay-200">
                <h2>Let's Connect</h2>
                <p>Interested in collaborating or learning more about my work?</p>
                <div className="about-links">
                    <a href="https://linkedin.com/in/davidbello5" target="_blank" rel="noopener noreferrer" className="btn-primary">
                        LinkedIn
                    </a>
                    <a href="mailto:davidbello998@gmail.com" className="btn-secondary">
                        Email Me
                    </a>
                </div>
            </div>
        </div>
    );
}
