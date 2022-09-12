import { Link, Outlet } from 'react-router-dom';
import { Nav } from '../Nav';
import { CustomNavLink } from '../CustomeNavLink';

export const Layout = () => {
  return (
    <div className="App">
      <header className="App__header">
        <div className="App__header--left">
          <div className="App__logo">
            <Link to="/" className="App__logo-link">
              <img
                src={`${window.location.origin}/img/logo.svg`}
                alt="LOGO"
              />
            </Link>
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
            <img src={`${window.location.origin}/img/icons/heart.svg`} alt="heart" />
          </CustomNavLink>
        </div>

        <div className="App__cart App__header--right">
          <CustomNavLink
            to="/cart"
            activeClass="App__header-link--active"
            defaultClass="App__header-link"
          >
            <img src={`${window.location.origin}/img/icons/cart.svg`} alt="cart" />
          </CustomNavLink>
        </div>
      </header>

      <main className="App__main">
        <Outlet />
      </main>

      <footer className="App__footer">Footer</footer>
    </div>
  );
};
