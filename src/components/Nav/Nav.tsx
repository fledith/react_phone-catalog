import './Nav.scss';
import { CustomNavLink } from '../CustomeNavLink';

export const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <CustomNavLink
            to="/"
            activeClass="nav__link--active"
            defaultClass="nav__link"
          >
            Home
          </CustomNavLink>
        </li>

        <li className="nav__item">
          <CustomNavLink
            to="/phones"
            activeClass="nav__link--active"
            defaultClass="nav__link"
          >
            Phones
          </CustomNavLink>
        </li>

        <li className="nav__item">
          <CustomNavLink
            to="/tablets"
            activeClass="nav__link--active"
            defaultClass="nav__link"
          >
            Tablets
          </CustomNavLink>
        </li>

        <li className="nav__item">
          <CustomNavLink
            to="/accessories"
            activeClass="nav__link--active"
            defaultClass="nav__link"
          >
            Accessories
          </CustomNavLink>
        </li>
      </ul>
    </nav>
  );
};
