import { useCallback } from "react";
import "./Navigation.css";

const Navigation = () => {
  const onAboutButtonClick1 = useCallback(() => {
    const aboutElement = document.getElementById("about-me"); // ระบุ ID ของส่วน "About" ใน AboutContent.js
    if (aboutElement) {
      aboutElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onContactButtonClick2 = useCallback(() => {
    const contactElement = document.getElementById("contact-section"); // ระบุ ID ของส่วน "Contact" ใน Contact.js
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const onGetInTouchButtonClick3 = useCallback(() => {
    const contactElement = document.getElementById("getintouch-section");  // ระบุ ID ของส่วน "Getintouch" ใน GetInTouchContainer.js
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="nav2">
      <b className="portfolio">Portfolio</b>
      <div className="about-parent">
  <b className="about5" onClick={onAboutButtonClick1}>
    about
  </b>
  <b className="contact4"  onClick={onContactButtonClick2}>
    contact
  </b>
  <b className="get-in-touch1" onClick={onGetInTouchButtonClick3} >
    get in touch
  </b>
      </div>
    </div>
  );
};

export default Navigation;
