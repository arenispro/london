import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">
          The Mighty Capital of the Great Britain
        </span>
        <span className="headerTitleLg">LONDON</span>
      </div>
      <img className="headerImg" src="../assets/Z1.jpg" alt="" />
    </div>
  );
}
