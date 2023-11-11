import { useMemo } from "react";
import "./Contact.css";

const Contact = ({
  line2,
  image16,
  line5,
  ContactWidth,
  ContactHeight,
  ContactPosition,
  ContactTop,
  ContactRight,
  ContactBottom,
  ContactLeft,
  showGroupDiv,
  showBack,
  showLineIcon,
}) => {
  const ContactStyle = useMemo(() => {
    return {
      width: ContactWidth,
      height: ContactHeight,
      position: ContactPosition,
      top: ContactTop,
      right: ContactRight,
      bottom: ContactBottom,
      left: ContactLeft,
    };
  }, [
    ContactWidth,
    ContactHeight,
    ContactPosition,
    ContactTop,
    ContactRight,
    ContactBottom,
    ContactLeft,
  ]);

  return (
    <div id="contact-section" className="component-1" style={ContactStyle}>
      <div className="nav">
        <b className="about">CONTACT</b>
        <div className="back-parent">
          <div className="back">Back</div>
          <img className="group-child" alt="" src={line2} />
        </div>
      </div>
      <div className="contact-content">
        <img className="image-16-icon" alt="" src={image16} />
        <div className="input-field">
          <div className="facebook">{`Facebook  : `}</div>
          <a
            className="httpswwwfacebookcomjazec"
            href="https://www.facebook.com/jazechayanrot?mibextid=LQQJ4d"
            target="_blank"
          >
            https://www.facebook.com/jazechayanrot?mibextid=LQQJ4d
          </a>
          <div className="facebook">{`Instragram  : `}</div>
          <a
            className="httpswwwfacebookcomjazec"
            href="https://www.instagram.com/jar_chn/"
            target="_blank"
          >
            https://www.instagram.com/jar_chn/
          </a>
          <div className="email">{`Email  : `}</div>
          <a
            className="httpswwwfacebookcomjazec"
            href="mailto:s6303051613084@email.kmutnb.ac.th"
            target="_blank"
          >
            s6303051613084@email.kmutnb.ac.th
          </a>
          <a
            className="github-link1"
            target="_blank"
          >{`Github Link : `}</a>
          <a
            className="httpswwwfacebookcomjazec"
            href="https://github.com/ChayanrothJA"
            target="_blank"
          >
            https://github.com/ChayanrothJA
          </a>
          <div className="line-095-723-4389">Line : 095-723-4389</div>
          <div className="line-095-723-4389">Phone : 092-768-9948</div>
        </div>
      </div>
      <img className="component-1-child" alt="" src={line5} />
    </div>
  );
};

export default Contact;
