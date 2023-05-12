import { Dropdown } from "../dropdown";
import logo from "../../../public/logo-no-background.svg";
import { BiCoffeeTogo } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import "./header.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
      </div>
      <ul className='header__list'>
        <li className='header__list-item'>
          <a target='_blank' href='https://github.com/r3mot/pedal-board'>
            <BsGithub className='github' size={20} />
          </a>
        </li>
        <li className='header__list-item'>
          <a target='_blank' href='https://www.buymeacoffee.com/coreydevs'>
            <BiCoffeeTogo className='coffee' size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};
