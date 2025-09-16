// src/components/Footer.js
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container row space">
        <p>© {year} Dubular. All rights reserved.</p>
        <nav className="row gap small">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
          <a href="mailto:hello@dubular.live">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
