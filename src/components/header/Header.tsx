import { Options } from "../options";
import logo from "../../../public/logo-no-background.svg";
import "./header.css";

export const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt='logo' />
      <Options />
    </div>
  );
};
