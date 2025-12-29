export default function About() {
    return (
        <div className="about-page">
            <div className="about-header fade-in-up">
                <h1>About Me</h1>
                <p className="about-intro">Building the future of finance, one line of code at a time.</p>
            </div>

            <div className="about-content fade-in-up delay-100">
                <p>
                    I am a Full-stack Software Engineer and Entrepreneur with a deep passion for building robust fintech infrastructure.
                    My journey has taken me from developing music applications for African DJs to architecting complex multi-currency stablecoin systems on the Hedera network.
                </p>
                <p>
                    Currently, I serve as the Lead Mobile Developer at <strong>BananaCrystal</strong>, where I've led the development of mobile apps used by thousands globally.
                    I am also the Founder of <strong>DBMansion</strong>, where we specialize in building intelligent data systems and financial infrastructure.
                </p>
                <p>
                    My expertise spans the entire stack, from mobile development with React Native and Kotlin to backend systems in Node.js and AWS.
                    I am particularly focused on the intersection of Web3 and traditional finance, working with partners like the Hedera Foundation, Folks Finance, and Brale to drive adoption.
                </p>
                <p>
                    I thrive in challenging environments where I can solve complex problems—whether it's optimizing app performance for varying network conditions or designing secure escrow systems for P2P payments.
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
