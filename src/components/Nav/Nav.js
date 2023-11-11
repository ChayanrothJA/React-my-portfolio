import { useMemo } from "react";
import "./Nav.css";

const Nav = ({
  aBOUT,
  line2,
  showGroupDiv,
  showBack,
  showLineIcon,
  navWidth,
  navHeight,
  navPosition,
  navTop,
  navRight,
  navBottom,
  navLeft,
  groupDivHeight,
  groupDivWidth,
  groupDivRight,
  groupDivBottom,
  backWidth,
  backTop,
  backLeft,
  lineIconTop,
  lineIconHeight,
}) => {
  const navStyle = useMemo(() => {
    return {
      width: navWidth,
      height: navHeight,
      position: navPosition,
      top: navTop,
      right: navRight,
      bottom: navBottom,
      left: navLeft,
    };
  }, [navWidth, navHeight, navPosition, navTop, navRight, navBottom, navLeft]);

  const groupDivStyle = useMemo(() => {
    return {
      height: groupDivHeight,
      width: groupDivWidth,
      right: groupDivRight,
      bottom: groupDivBottom,
    };
  }, [groupDivHeight, groupDivWidth, groupDivRight, groupDivBottom]);

  const backStyle = useMemo(() => {
    return {
      width: backWidth,
      top: backTop,
      left: backLeft,
    };
  }, [backWidth, backTop, backLeft]);

  const lineIconStyle = useMemo(() => {
    return {
      top: lineIconTop,
      height: lineIconHeight,
    };
  }, [lineIconTop, lineIconHeight]);

  return (
    <div className="nav1" style={navStyle}>
      <b className="about1">{aBOUT}</b>
      {showGroupDiv && (
        <div className="back-group" style={groupDivStyle}>
          {showBack && (
            <div className="back1" style={backStyle}>
              Back
            </div>
          )}
          {showLineIcon && (
            <img
              className="group-item"
              alt=""
              src={line2}
              style={lineIconStyle}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
