import GithubIcon from "../../assets/img/github.svg";
import "./style.scss";

export default function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a href="https://github.com/mateushenriquedasilva">
            <div className="dsmoive-contact-contaner">
              <img src={GithubIcon} alt="icon for gitbub" />
              <p className="dsmovie-contact-link">/mateushenriquedasilva</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
