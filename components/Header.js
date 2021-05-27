function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="/images/logo.svg" alt="Sites logo" />
          <span className="logo-text">Next Movies</span>
        </div>
      </div>
      <style jsx>{`
        header {
          background: #efefef;
          padding: 20px;
        }

        .logo {
          display: flex;
          align-items: center;
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
