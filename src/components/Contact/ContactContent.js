import { useMemo } from "react";
import "./ContactContent.css";

const ContactContent = ({
  image16,
  contactContentPosition,
  contactContentHeight,
  contactContentWidth,
  contactContentTop,
  contactContentRight,
  contactContentBottom,
  contactContentLeft,
}) => {
  const contactContentStyle = useMemo(() => {
    return {
      position: contactContentPosition,
      height: contactContentHeight,
      width: contactContentWidth,
      top: contactContentTop,
      right: contactContentRight,
      bottom: contactContentBottom,
      left: contactContentLeft,
    };
  }, [
    contactContentPosition,
    contactContentHeight,
    contactContentWidth,
    contactContentTop,
    contactContentRight,
    contactContentBottom,
    contactContentLeft,
  ]);

  return (
    <div className="contact-content1" style={contactContentStyle}>
      <img className="image-16-icon1" alt="" src={image16} />
      <div className="input-field1">
        <div className="facebook1">{`Facebook  : `}</div>
        <a
          className="httpswwwfacebookcomjazec1"
          href="https://www.facebook.com/jazechayanrot?mibextid=LQQJ4d"
          target="_blank"
        >
          https://www.facebook.com/jazechayanrot?mibextid=LQQJ4d
        </a>
        <div className="facebook1">{`Instragram  : `}</div>
        <a
          className="httpswwwfacebookcomjazec1"
          href="https://www.instagram.com/jar_chn/"
          target="_blank"
        >
          https://www.instagram.com/jar_chn/
        </a>
        <div className="email1">{`Email  : `}</div>
        <a
          className="httpswwwfacebookcomjazec1"
          href="mailto:s6303051613084@email.kmutnb.ac.th"
          target="_blank"
        >
          s6303051613084@email.kmutnb.ac.th
        </a>
        <a
          className="github-link2"
        >{`Github Link : `}</a>
        <a
          className="httpswwwfacebookcomjazec1"
          href="https://github.com/ChayanrothJA"
          target="_blank"
        >
          https://github.com/ChayanrothJA
        </a>
        <div className="line-095-723-43891">Line : 095-723-4389</div>
        <div className="line-095-723-43891">Phone : 092-768-9948</div>
      </div>
    </div>
  );
};

export default ContactContent;
