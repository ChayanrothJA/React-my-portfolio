import Component1 from "./Contact";
import "./ContactContainer.css";

const ContactContainer = () => {
  return (
    <div className="contact3">
      <Component1
        line2="/line-2.svg"
        image16="/image-16@2x.png"
        line5="/line-5.svg"
        component1Width="100%"
        component1Height="100%"
        component1Position="absolute"
        component1Top="0%"
        component1Right="0%"
        component1Bottom="0%"
        component1Left="0%"
        showGroupDiv
        showBack={false}
        showLineIcon={false}
      />
    </div>
  );
};

export default ContactContainer;
