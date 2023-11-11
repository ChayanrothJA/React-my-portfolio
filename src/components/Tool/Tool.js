import { useMemo } from "react";
import "./Tool.css";

const Tool = ({
  image13,
  image14,
  image15,
  toolHeight,
  toolPosition,
  toolTop,
  toolLeft,
  groupDivHeight,
  groupDivBottom,
  visualStudioCodeHeight,
  visualStudioCodeTop,
  image13IconHeight,
  image13IconBottom,
  iCanUseTop,
  groupDivHeight1,
  groupDivBottom1,
  figmaHeight,
  figmaTop,
  image14IconHeight,
  image14IconBottom,
  everyOfMockupTop,
  groupDivHeight2,
  groupDivBottom2,
  image15IconHeight,
  image15IconBottom,
  inMyProjectTop,
  gitGithubHeight,
  gitGithubTop,
}) => {
  const toolStyle = useMemo(() => {
    return {
      height: toolHeight,
      position: toolPosition,
      top: toolTop,
      left: toolLeft,
    };
  }, [toolHeight, toolPosition, toolTop, toolLeft]);

  const groupDiv1Style = useMemo(() => {
    return {
      height: groupDivHeight,
      bottom: groupDivBottom,
    };
  }, [groupDivHeight, groupDivBottom]);

  const visualStudioCodeStyle = useMemo(() => {
    return {
      height: visualStudioCodeHeight,
      top: visualStudioCodeTop,
    };
  }, [visualStudioCodeHeight, visualStudioCodeTop]);

  const image13IconStyle = useMemo(() => {
    return {
      height: image13IconHeight,
      bottom: image13IconBottom,
    };
  }, [image13IconHeight, image13IconBottom]);

  const iCanUseStyle = useMemo(() => {
    return {
      top: iCanUseTop,
    };
  }, [iCanUseTop]);

  const groupDiv2Style = useMemo(() => {
    return {
      height: groupDivHeight1,
      bottom: groupDivBottom1,
    };
  }, [groupDivHeight1, groupDivBottom1]);

  const figmaStyle = useMemo(() => {
    return {
      height: figmaHeight,
      top: figmaTop,
    };
  }, [figmaHeight, figmaTop]);

  const image14IconStyle = useMemo(() => {
    return {
      height: image14IconHeight,
      bottom: image14IconBottom,
    };
  }, [image14IconHeight, image14IconBottom]);

  const everyOfMockupStyle = useMemo(() => {
    return {
      top: everyOfMockupTop,
    };
  }, [everyOfMockupTop]);

  const groupDiv3Style = useMemo(() => {
    return {
      height: groupDivHeight2,
      bottom: groupDivBottom2,
    };
  }, [groupDivHeight2, groupDivBottom2]);

  const image15IconStyle = useMemo(() => {
    return {
      height: image15IconHeight,
      bottom: image15IconBottom,
    };
  }, [image15IconHeight, image15IconBottom]);

  const inMyProjectStyle = useMemo(() => {
    return {
      top: inMyProjectTop,
    };
  }, [inMyProjectTop]);

  const gitGithubStyle = useMemo(() => {
    return {
      height: gitGithubHeight,
      top: gitGithubTop,
    };
  }, [gitGithubHeight, gitGithubTop]);

  return (
    <div className="tool" style={toolStyle}>
      <b className="tools-in-work">Tools in Work</b>
      <div className="visual-studio-code-parent" style={groupDiv1Style}>
        <div className="visual-studio-code" style={visualStudioCodeStyle}>
          Visual Studio Code
        </div>
        <img
          className="image-13-icon"
          alt=""
          src={image13}
          style={image13IconStyle}
        />
        <div className="i-can-use" style={iCanUseStyle}>
          I can use this Tool are well, The most my write code I use this tool
          to write.
        </div>
      </div>
      <div className="figma-parent" style={groupDiv2Style}>
        <div className="figma" style={figmaStyle}>
          Figma
        </div>
        <img
          className="image-14-icon"
          alt=""
          src={image14}
          style={image14IconStyle}
        />
        <div className="every-of-mockup" style={everyOfMockupStyle}>
          Every of Mockup or Design Prototype i use Figma to create them, I can
          use this tool is fair.
        </div>
      </div>
      <div className="image-15-parent" style={groupDiv3Style}>
        <img
          className="image-15-icon"
          alt=""
          src={image15}
          style={image15IconStyle}
        />
        <div className="in-my-project" style={inMyProjectStyle}>
          In my project or working team of group i use Github to push my work
          part of code project.
        </div>
        <div
          className="git-github"
          style={gitGithubStyle}
        >{`Git & Github Desktop`}</div>
      </div>
    </div>
  );
};

export default Tool;
