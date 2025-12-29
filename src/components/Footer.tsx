export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="social-links">
                    <a href="https://linkedin.com/in/davidbello5" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:davidbello998@gmail.com">Email</a>
                    <a href="https://dbmansion.com" target="_blank" rel="noopener noreferrer">DBMansion</a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} David Bello. All rights reserved.</p>
            </div>
        </footer>
    );
}
