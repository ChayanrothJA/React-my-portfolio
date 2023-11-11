import Content from "./AboutContent";
import Nav from "../Nav/Nav";
import Tool from "../Tool/Tool";
import "./About.css";

const About = () => {
  return (
    <div className="about4">
      <Content
        image12="/image-12@2x.png"
        contentWidth="92.4%"
        contentHeight="39.14%"
        contentPosition="absolute"
        contentTop="9.66%"
        contentRight="6.64%"
        contentBottom="51.21%"
        contentLeft="0.96%"
        contentOverflow="hidden"
      />
      <Nav
        aBOUT="ABOUT"
        line2="/line-2.svg"
        showGroupDiv={false}
        showBack
        showLineIcon
        navWidth="34.44%"
        navHeight="9.36%"
        navPosition="absolute"
        navTop="2.12%"
        navRight="64.51%"
        navBottom="88.51%"
        navLeft="1.05%"
        groupDivHeight="21.88%"
        groupDivWidth="18.02%"
        groupDivRight="81.47%"
        groupDivBottom="0%"
        backWidth="63.42%"
        backTop="0%"
        backLeft="36.58%"
        lineIconTop="15px"
        lineIconHeight="0px"
      />
      <Tool
        image13="/image-13@2x.png"
        image14="/image-14@2x.png"
        image15="/image-15@2x.png"
        toolHeight="562px"
        toolPosition="absolute"
        toolTop="calc(50% + 77.5px)"
        toolLeft="calc(50% - 561px)"
        groupDivHeight="79.59%"
        groupDivBottom="3.91%"
        visualStudioCodeHeight="12.85%"
        visualStudioCodeTop="69.04%"
        image13IconHeight="69.04%"
        image13IconBottom="30.96%"
        iCanUseTop="87.7%"
        groupDivHeight1="84.57%"
        groupDivBottom1="-1.07%"
        figmaHeight="12.1%"
        figmaTop="64.98%"
        image14IconHeight="64.98%"
        image14IconBottom="35.02%"
        everyOfMockupTop="82.54%"
        groupDivHeight2="84.57%"
        groupDivBottom2="-1.07%"
        image15IconHeight="64.98%"
        image15IconBottom="35.02%"
        inMyProjectTop="82.54%"
        gitGithubHeight="12.1%"
        gitGithubTop="64.98%"
      />
      <img className="about-inner" alt="" src="/line-3.svg" />
    </div>
  );
};

export default About;
