export default function Projects() {
    return (
        <div className="projects-page">
            <h1 className="fade-in-up">Projects</h1>
            <p className="projects-intro">
                Building the future of digital finance - from currency digitization and prediction markets to multi-chain crypto offramps and payment infrastructure. These production systems process real transactions for users across 150+ countries.
            </p>

            <div className="projects-grid">
                {/* DBMansion - Founder's Company */}
                <div className="project-card fade-in-up delay-100">
                    <div className="project-header">
                        <h2>DBMansion</h2>
                        <span className="project-badge founder">Founder & CEO</span>
                    </div>
                    <p className="project-description">
                        Building intelligent fintech infrastructure as Founder & CEO. DBMansion delivers enterprise-grade data security, regulatory compliance, and AI-driven financial intelligence for financial institutions. Our platform provides robust backend systems with advanced data management, real-time analytics, and automated compliance solutions.
                    </p>
                    <div className="tech-stack">
                        <span>Fintech Infrastructure</span>
                        <span>AI/ML</span>
                        <span>Data Security</span>
                        <span>Compliance</span>

                    </div>
                    <a href="https://dbmansion.com" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Company Site &rarr;
                    </a>
                </div>

                {/* BananaCrystal Mobile App */}
                <div className="project-card fade-in-up delay-200">
                    <div className="project-header">
                        <h2>BananaCrystal Mobile App</h2>
                        <span className="project-badge live">Live Product</span>
                    </div>
                    <p className="project-description">
                        P2P currency trading platform that lets users trade USD with their local currencies directly with other traders - no banks or bureau de change needed. Built features for instant P2P payments worldwide, Virtual Terminal (POS) for businesses, dual interest investment accounts, and crypto debit cards usable at any Visa-accepting location. Registered as a VASP with FINCEN (U.S.) and FINTRAC (Canada). Took it from designs to production, now serving 150+ countries.
                    </p>
                    <div className="tech-stack">
                        <span>React Native</span>
                        <span>TypeScript</span>
                        <span>Hedera Hashgraph</span>
                        <span>Node.js</span>
                        <span>AWS</span>
                    </div>
                    <a href="https://bananacrystal.com" target="_blank" rel="noopener noreferrer" className="project-link">
                        Visit Platform &rarr;
                    </a>
                </div>

                {/* Hedera Liquidity Pool & CEX */}
                <div className="project-card fade-in-up delay-300">
                    <div className="project-header">
                        <h2>Hedera Liquidity Pool & CEX</h2>
                        <span className="project-badge live">Live Product</span>
                    </div>
                    <p className="project-description">
                        Built a complete trading platform as solo developer featuring: (1) CEX with 150+ stablecoin pairs and AMM liquidity pools, (2) Prediction marketplace where users create long/short offers on currency pairs with leverage, (3) Real-time rate tracking showing locked vs current rates, (4) Multi-chain USDC offramp to bank accounts in 150+ countries with 1-3 day settlement. Reduced slippage from 2.1% to 0.4% through automated rebalancing.
                    </p>
                    <div className="tech-stack">
                        <span>Hedera Hashgraph</span>
                        <span>React</span>
                        <span>TypeScript</span>
                        <span>Smart Contracts</span>
                        <span>AMM Algorithms</span>
                        <span>Predictive Analytics</span>
                    </div>
                    <a href="https://liquidity.bananacrystal.com" target="_blank" rel="noopener noreferrer" className="project-link">
                        Launch DEX &rarr;
                    </a>
                </div>

                {/* eCommerce Payment SDK */}
                <div className="project-card fade-in-up delay-400">
                    <div className="project-header">
                        <h2>Crypto Payment SDK</h2>
                        <span className="project-badge live">Live Product</span>
                    </div>
                    <p className="project-description">
                        A developer-friendly payment SDK enabling merchants to accept cryptocurrency payments seamlessly. Features include easy integration, secure transaction processing, real-time payment notifications, and support for multiple stablecoins. Designed for both web and mobile platforms with comprehensive documentation.
                    </p>
                    <div className="tech-stack">
                        <span>SDK Design</span>
                        <span>TypeScript</span>
                        <span>Crypto Payments</span>
                        <span>REST API</span>
                        <span>Webhooks</span>
                    </div>
                    <div className="project-links">
                        <a href="https://payment.bananacrystal.com" target="_blank" rel="noopener noreferrer" className="project-link">
                            View Demo &rarr;
                        </a>
                        <a href="https://www.npmjs.com/package/banana-crystal-payment" target="_blank" rel="noopener noreferrer" className="project-link npm-link">
                            NPM Package &rarr;
                        </a>
                        <a href="https://payment.bananacrystal.com/pay?store_id=80db794c-b80b-40e2-a44e-b2aa40c6dc1f&amount=620.0&currency=USD&description=Metal%20Black%20USD%20Debit%20Card%20&product_name=Metal%20Black%20Card&redirect_url=https%3A%2F%2Fwww.bananacrystal.com%2Fmetal-black-success%2F&usd_amount=620.0&gohighlevel_enabled=true&gohighlevel_api_key=U2FsdGVkX1%2FNjol%2FsO3frH9mPe5RRw7RtNc02bUl4mxXu58XcfjNPpLR4Gmew%2B099K3D9atMFN3xZsLyNIOZPLv4WVjVGcuICCBO2%2FE%2FsmoEzPFapR4hqLmSggey%2FQdlIQsKgAepK6i3NztRxid%2FmAo8fM%2BQWkdR12kM3Abj3uy1yy3KZlgv9jetyKksxRtkz3RLZAsI6YKbsrPU5nK5zkF%2FBZ3Hy6CMxLkej8B%2F89g4uLqdIhgNuUryNjeA2Eh%2Be4T1vtyEiQ77rC8wHJonOMYmLUcI%2Ft%2FQ7VpKYL1bX0x1PmkC0vOEvLk5B6NveRT0&gohighlevel_tags=not_paid%2Cpaid%2Cmetal-black-card%2Cmonthly-cap-30000" target="_blank" rel="noopener noreferrer" className="project-link">
                            Live Use Case &rarr;
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
