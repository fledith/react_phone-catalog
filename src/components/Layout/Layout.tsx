import { Outlet } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { Nav } from '../Nav';
import { CustomNavLink } from '../CustomeNavLink';
import heart from '../../img/icons/heart.svg';
import cart from '../../img/icons/cart.svg';

/* eslint-disable max-len */
export const Layout = () => {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header--left">
          <div className="App__logo">
            <Logo />
          </div>

          <div className="App__nav">
            <Nav />
          </div>
        </div>

        <div className="App__favorites App__header--right">
          <CustomNavLink
            to="/favorites"
            activeClass="App__header-link--active"
            defaultClass="App__header-link"
          >
            <>
              <div className="App__header-counter">1</div>
              <img src={heart} alt="heart" />
            </>
          </CustomNavLink>
        </div>

        <div className="App__cart App__header--right">
          <CustomNavLink
            to="/cart"
            activeClass="App__header-link--active"
            defaultClass="App__header-link"
          >
            <>
              <div className="App__header-counter">2</div>
              <img src={cart} alt="cart" />
            </>
          </CustomNavLink>
        </div>
      </header>

      <main className="App__main">
        <Outlet />
      </main>

      <footer className="App__footer">
        <Logo />
        <nav className="App__footer-nav">
          <ul className="App__footer-list">
            <li className="App__footer-item">
              <a
                href="https://github.com/fledith/react_phone-catalog/tree/develop"
                className="App__footer-link"
              >
                Github
              </a>
            </li>

            <li className="App__footer-item">
              <a href="#contacts" className="App__footer-link">Contacts</a>
            </li>

            <li className="App__footer-item">
              <a href="#rights" className="App__footer-link">Rights</a>
            </li>
          </ul>
        </nav>
        <div className="App__footer-back">
          Back to top
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="App__footer-back-btn">{'>'}</a>
        </div>
      </footer>
    </div>
  );
};
