import Navigation from 'components/Navigation';
import Link from 'next/link';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link href="/">
            <a>
              <img src="/images/logo.svg" alt="Sites logo" />
              <span className="logo-text">Next Movies</span>
            </a>
          </Link>
        </div>

        <Navigation />
      </div>
      <style jsx>{`
        header {
          background: #efefef;
          padding: 20px;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo a {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-text {
          color: #333333;
          font-weight: bold;
          font-size: 2rem;
          margin-left: 20px;
        }
      `}</style>
    </header>
  );
}

export default Header;
