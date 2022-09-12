import { NavLink } from 'react-router-dom';
import { handleActiveClass } from '../../helpers/handleActiveClass';

interface Props {
  to: string;
  activeClass: string;
  defaultClass: string;
  children: JSX.Element | string;
}

export const CustomNavLink = (props: Props) => {
  const {
    to, activeClass, defaultClass, children,
  } = props;

  return (
    <NavLink
      to={to}
      className={({ isActive }) => (
        handleActiveClass(isActive, activeClass, defaultClass)
      )}
    >
      {children}
    </NavLink>
  );
};
