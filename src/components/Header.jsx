import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div onClick={handleClick} className="header">
      <p style={{ fontFamily:"AppleSDGothicNeo", cursor: "pointer", margin: 0 }}>{"오는 길"}</p>
    </div>
  );
};

export default Header;
