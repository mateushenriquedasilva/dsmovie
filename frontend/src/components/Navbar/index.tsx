import GithubIcon from "../../assets/img/github.svg";
import "./style.css";

export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/mateushenriquedasilva"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <img src={GithubIcon} alt="github icon" />
              <p className="dsmovie-contact-link">/mateushenriquedasilva</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
