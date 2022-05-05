import '../../../styles/components/Molecules/Button/Button.scss';

import React from 'react';

import { ButtonProps } from '../../../types/props';

export default function Button<T>({
  children,
  disabled,
  full,
  icon,
  className = '',
  onClick,
  isLoading,
  ...attrs
}: ButtonProps<T>) {
  return (
    <button {...attrs} disabled={disabled} className={className} onClick={onClick}>
      {children}
    </button>
  );
}
