import { useMemo } from "react";
import "./GetInTouch.css";

const GetInTouch = ({
  s6303051613084emailkmutnb,
  s6303051613084emailHref,
  GetInTouchWidth,
  GetInTouchHeight,
  GetInTouchPosition,
  GetInTouchTop,
  GetInTouchRight,
  GetInTouchBottom,
  GetInTouchLeft,
  s6303051613084emailkmutnbFontSize,
  s6303051613084emailkmutnbLineHeight,
  s6303051613084emailkmutnbFontWeight,
  s6303051613084emailkmutnbColor,
  githubLinkLineHeight,
  httpsgithubcomChayanrothJLineHeight,
}) => {
  const GetInTouchStyle = useMemo(() => {
    return {
      width: GetInTouchWidth,
      height: GetInTouchHeight,
      position: GetInTouchPosition,
      top: GetInTouchTop,
      right: GetInTouchRight,
      bottom: GetInTouchBottom,
      left: GetInTouchLeft,
    };
  }, [
    GetInTouchWidth,
    GetInTouchHeight,
    GetInTouchPosition,
    GetInTouchTop,
    GetInTouchRight,
    GetInTouchBottom,
    GetInTouchLeft,
  ]);

  const s6303051613084emailkmutnbacStyle = useMemo(() => {
    return {
      fontSize: s6303051613084emailkmutnbFontSize,
      lineHeight: s6303051613084emailkmutnbLineHeight,
      fontWeight: s6303051613084emailkmutnbFontWeight,
      color: s6303051613084emailkmutnbColor,
    };
  }, [
    s6303051613084emailkmutnbFontSize,
    s6303051613084emailkmutnbLineHeight,
    s6303051613084emailkmutnbFontWeight,
    s6303051613084emailkmutnbColor,
  ]);

  const githubLinkStyle = useMemo(() => {
    return {
      lineHeight: githubLinkLineHeight,
    };
  }, [githubLinkLineHeight]);

  const httpsgithubcomChayanrothJStyle = useMemo(() => {
    return {
      lineHeight: httpsgithubcomChayanrothJLineHeight,
    };
  }, [httpsgithubcomChayanrothJLineHeight]);

  return (
    <div className="GetInTouch" style={GetInTouchStyle}>
      <b className="get-in-touch">Get in touch</b>
      <a
        className="s6303051613084emailkmutnbac"
        href={s6303051613084emailHref}
        target="_blank"
        style={s6303051613084emailkmutnbacStyle}
      >
        {s6303051613084emailkmutnb}
      </a>
      <div
        className="github-link"
        style={githubLinkStyle}
      >{`Github Link : `}</div>
      <a
        className="httpsgithubcomchayanrothj"
        href="https://github.com/ChayanrothJA"
        target="_blank"
        style={httpsgithubcomChayanrothJStyle}
      >
        https://github.com/ChayanrothJA
      </a>
    </div>
  );
};

export default GetInTouch;
