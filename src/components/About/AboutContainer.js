import "./AboutContainer.css";

const AboutContainer = () => {
  return (
    <div className="im-currently-working-on-group">
      <div className="im-currently-working-AboutContainer1">
        <ul className="im-currently-working1">I'm Currently Working On</ul>
      </div>
      <b className="about-me1">About me</b>
      <div className="currently-studying-computer-container1">
        <ul className="im-currently-working1">
          <li className="currently-studying-computer1">
            Currently: Studying Computer Engineering at King Mongkut's
            University of Technology North Bangkok.
          </li>
          <li className="currently-studying-computer1">{`Goal: Becoming a Web&Mobile Application Developer & UX/UI Designer.`}</li>
          <li>I'm Currently Interested In</li>
        </ul>
      </div>
      <div className="flutter-framework-react-container1">
        <ul className="im-currently-working1">
          <li className="currently-studying-computer1">Flutter Framework</li>
          <li className="currently-studying-computer1">React Framework</li>
          <li className="currently-studying-computer1">Dart Programming</li>
          <li className="currently-studying-computer1">Java Programming</li>
          <li className="currently-studying-computer1">GitHub Desktop</li>
          <li>UX/UI Design</li>
        </ul>
      </div>
      <div className="mobile-application-project-container1">
        <ul className="im-currently-working1">
          <li className="currently-studying-computer1">
            Mobile Application Project
          </li>
          <li>React Web Application</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutContainer;
