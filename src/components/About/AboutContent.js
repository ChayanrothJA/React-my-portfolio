import { useMemo } from "react";
import "./AboutContent.css";

const AboutContent = ({
  image12,
  contentWidth,
  contentHeight,
  contentPosition,
  contentTop,
  contentRight,
  contentBottom,
  contentLeft,
  contentOverflow,
}) => {
  const contentStyle = useMemo(() => {
    return {
      width: contentWidth,
      height: contentHeight,
      position: contentPosition,
      top: contentTop,
      right: contentRight,
      bottom: contentBottom,
      left: contentLeft,
      overflow: contentOverflow,
    };
  }, [
    contentWidth,
    contentHeight,
    contentPosition,
    contentTop,
    contentRight,
    contentBottom,
    contentLeft,
    contentOverflow,
  ]);

  return (
    <div  id="about-me" className="content" style={contentStyle}>
      <img className="image-12-icon" alt="" src={image12} />
      <div className="im-currently-working-on-parent">
        <div className="im-currently-working-container">
          <ul className="im-currently-working">I'm Currently Working On</ul>
        </div>
        <b className="about-me">About me</b>
        <div className="currently-studying-computer-container">
          <ul className="im-currently-working">
            <li className="currently-studying-computer">
              Currently: Studying Computer Engineering at King Mongkut's
              University of Technology North Bangkok.
            </li>
            <li className="currently-studying-computer">{`Goal: Becoming a Web&Mobile Application Developer & UX/UI Designer.`}</li>
            <li>I'm Currently Interested In</li>
          </ul>
        </div>
        <div className="flutter-framework-react-container">
          <ul className="im-currently-working">
            <li className="currently-studying-computer">Flutter Framework</li>
            <li className="currently-studying-computer">React Framework</li>
            <li className="currently-studying-computer">Dart Programming</li>
            <li className="currently-studying-computer">Java Programming</li>
            <li className="currently-studying-computer">GitHub Desktop</li>
            <li>UX/UI Design</li>
          </ul>
        </div>
        <div className="mobile-application-project-container">
          <ul className="im-currently-working">
            <li className="currently-studying-computer">
              Mobile Application Project
            </li>
            <li>React Web Application</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
