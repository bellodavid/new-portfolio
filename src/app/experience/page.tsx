export default function Experience() {
    return (
        <div className="experience-page">
            <h1>Experience</h1>

            <div className="timeline">
                <div className="timeline-item">
                    <div className="timeline-header">
                        <h2>DBMansion</h2>
                        <span className="role">Founder & CEO</span>
                        <span className="date">April 2025 - Present</span>
                    </div>
                    <ul className="timeline-details">
                        <li>Founded and currently building a fintech infrastructure platform focused on data security and compliance for financial institutions.</li>
                        <li>Developed AI-powered tools for regulatory compliance automation, cutting manual review time by about 60%.</li>
                        <li>Built real-time analytics dashboards that process transaction data and flag anomalies within seconds.</li>
                        <li>Working with 3 pilot clients to refine the platform based on real-world enterprise needs.</li>
                    </ul>
                </div>

                <div className="timeline-item">
                    <div className="timeline-header">
                        <h2>BananaCrystal</h2>
                        <span className="role">Software Engineer</span>
                        <span className="date">March 2024 - Present</span>
                    </div>
                    <ul className="timeline-details">
                        <li>Led the complete development of the BananaCrystal mobile app from idea to production, now used by thousands worldwide.</li>
                        <li>Built P2P currency trading platform where users trade USD with local currencies directly - cutting out banks and exchange bureaus.</li>
                        <li>Developed instant P2P payment system that lets users send money to anyone worldwide, almost for free using blockchain rails.</li>
                        <li>Created Virtual Terminal (POS) feature for businesses to accept crypto payments and send payouts - cheaper and faster than traditional payment rails.</li>
                        <li>Designed and launched a currency swap system on the Hedera network supporting 150+ stablecoins.</li>
                        <li>Implemented an AMM (Automated Market Maker) to keep exchange rates balanced and ensure smooth liquidity.</li>
                        <li>Built dual interest investment accounts where users earn returns in two places simultaneously.</li>
                        <li>Delivered the BananaCrystal USD Debit Card (BC Card), linked with offshore SWIFT accounts and usable at any Visa-accepting location.</li>
                        <li>Created a payment SDK for merchants to accept crypto. Published it on NPM.</li>
                        <li>Set up the transaction pipeline to handle Hedera operations. Added retry logic that recovered about 95% of initially failed transactions.</li>
                        <li>Provided US Dollar accounts in 150+ countries, helping users protect funds from local currency risks.</li>
                    </ul>
                </div>

                <div className="timeline-item">
                    <div className="timeline-header">
                        <h2>AwaCash</h2>
                        <span className="role">Software Engineer</span>
                        <span className="date">Aug 2023 - Dec 2023</span>
                    </div>
                    <ul className="timeline-details">
                        <li>Built features for cross-border money transfers. Users could send money to 15+ countries with pretty low fees.</li>
                        <li>Worked on the loan application flow - simplified it from 8 steps down to 4, which helped increase completion rate by around 35%.</li>
                        <li>Cut app load time from about 4.2 seconds to 1.8 seconds by optimizing how we fetched and cached data.</li>
                        <li>Worked closely with the backend team to fix integration issues. We reduced API errors by roughly 40% over 3 months.</li>
                    </ul>
                </div>

                <div className="timeline-item">
                    <div className="timeline-header">
                        <h2>VibingLive</h2>
                        <span className="role">Mobile Engineer</span>
                        <span className="date">Nov 2020 - July 2023</span>
                    </div>
                    <ul className="timeline-details">
                        <li>Built a music streaming app for African DJs to share their mixes and connect with fans.</li>
                        <li>Redesigned the UI with our design team. Saw user engagement go up by about 50% - people were spending more time in the app.</li>
                        <li>Fixed a bunch of backend issues that were causing crashes. Got the crash rate down from around 8% to under 2%.</li>
                        <li>Wrote detailed docs for the codebase. New developers could get up to speed in about 3 days instead of a week.</li>
                    </ul>
                </div>
            </div>

            <div className="skills-section" style={{ marginTop: '4rem' }}>
                <h2>Technical Skills</h2>
                <div className="skills-list">
                    <span className="skill-tag">Solidity</span>
                    <span className="skill-tag">React Native</span>
                    <span className="skill-tag">TypeScript</span>
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">Kotlin</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">Ruby on Rails</span>
                    <span className="skill-tag">Linux</span>
                </div>
            </div>
        </div>
    );
}
