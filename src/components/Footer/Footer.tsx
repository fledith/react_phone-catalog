import { useCallback, useEffect, useState } from 'react';
import { Logo } from '../Logo';

import './Footer.scss';

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const scrollToTop = useCallback(() => window.scroll(0, 0), []);

  return (
    <footer className="footer">
      <Logo />
      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a
              href="https://github.com/fledith/react_phone-catalog/tree/develop"
              className="footer__link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>

          <li className="footer__item">
            <a href="#contacts" className="footer__link">Contacts</a>
          </li>

          <li className="footer__item">
            <a href="#rights" className="footer__link">Rights</a>
          </li>
        </ul>
      </nav>
      {isVisible ? (
        <div className="footer__back">
          Back to top
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <button
            type="button"
            className="footer__back-btn"
            onClick={scrollToTop}
          >
            {'>'}
          </button>
        </div>
      ) : (
        <span className="footer__slug" />
      )}
    </footer>
  );
};
