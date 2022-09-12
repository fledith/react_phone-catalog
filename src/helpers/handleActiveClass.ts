import classNames from 'classnames';

export const handleActiveClass = (
  isActive: boolean,
  activeClass: string,
  defaultClass = '',
): string => classNames(defaultClass, { [activeClass]: isActive });
