import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';

export const Logo = () => (
  <Link to="/" className="logo">
    <img
      src={logo}
      alt="LOGO"
    />
  </Link>
);
