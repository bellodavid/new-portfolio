import BookCall from './BookCall';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-container">
                <div className="social-links">
                    <BookCall isLink={true}>Book a Call</BookCall>
                    <a href="mailto:david@dbmansion.com">Email</a>
                    <a href="https://dbmansion.com" target="_blank" rel="noopener noreferrer">DBMansion</a>
                </div>
                <p className="copyright">© {new Date().getFullYear()} David Bello. All rights reserved.</p>
            </div>
        </footer>
    );
}
