import { Logo } from '../Logo';
import { Nav } from '../Nav';
import { CustomNavLink } from '../CustomeNavLink';
import heart from '../../img/icons/heart.svg';
import cart from '../../img/icons/cart.svg';

import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header--left">
        <div className="header__logo">
          <Logo />
        </div>

        <div className="header__nav">
          <Nav />
        </div>
      </div>

      <div className="header__favorites header--right">
        <CustomNavLink
          to="/favorites"
          activeClass="header-link--active"
          defaultClass="header-link"
        >
          <>
            <div className="header-counter">1</div>
            <img src={heart} alt="heart" />
          </>
        </CustomNavLink>
      </div>

      <div className="header__cart header--right">
        <CustomNavLink
          to="/cart"
          activeClass="header-link--active"
          defaultClass="header-link"
        >
          <>
            <div className="header-counter">2</div>
            <img src={cart} alt="cart" />
          </>
        </CustomNavLink>
      </div>
    </header>
  );
};
