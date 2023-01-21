import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Userwidget = () => {
  return (
    <>
      <NavLink to="/user">
        <FaUser />
      </NavLink>
    </>
  );
};
export default Userwidget;
