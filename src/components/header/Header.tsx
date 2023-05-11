import { Dropdown } from "../dropdown";
import logo from "../../../public/logo-no-background.svg";
import "./header.css";

export const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      {/* <img className="coffee-button" src="./cofee.png" alt="buy me a coffee" /> */}
    </div>
  );
};
