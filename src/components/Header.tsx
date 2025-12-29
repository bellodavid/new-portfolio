import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-container">
        <Link href="/" className="logo">
          David Bello
        </Link>
        <nav className="main-nav">
          <Link href="/experience">Experience</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
}
