import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/save">회원가입</Link>
      <br />
      <br />
      <Link to="/list">회원목록</Link>
    </>
  );
};
export default Header;