import { useCallback } from "react";
import "./Hero.css";

const Hero = () => {
  const onAboutButtonClick1 = useCallback(() => {
    const aboutElement = document.getElementById("about-me"); // ระบุ ID ของส่วน "About" ใน Content.js
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onContactButtonClick2 = useCallback(() => {
    const aboutElement = document.getElementById("contact-section"); // ระบุ ID ของส่วน "contact" ใน Content.js
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="hero">
      <img className="image-10-icon" alt="" src="/image-10@2x.png" />
      <div className="chayanroht-pongsathapon-parent">
        <b className="chayanroht-pongsathapon">CHAYANROHT PONGSATHAPON</b>
        <div className="im-studying-computer">
          I’m Studying Computer Engineering at KMUTNB . I am passionate about
          creating design that are a usable app and Meets to the user's
          requirements.
        </div>
      </div>
      <div className="buttonlink">
        <div className="about2" onClick={onAboutButtonClick1}>
          <div className="about-child" />
          <div className="about3">ABOUT</div>
          <div className="about-item" />
        </div>
        <div className="contact1" onClick={onContactButtonClick2}>
          <div className="contact-child" />
          <div className="contact2">CONTACT</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
