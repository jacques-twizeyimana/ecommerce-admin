import React, { useState } from 'react';

interface IDropdownProps {
  className?: string;
  children: React.ReactNode;
  header: React.ReactNode;
}

export default function Dropdown({ children, header, className }: IDropdownProps) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="position-relative">
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <button
        className="dropdown-h btn d-block w-100"
        onBlur={() => setisOpen(false)}
        onClick={() => setisOpen(!isOpen)}>
        {header}
      </button>
      <div className={`w-100 z-10 ${isOpen ? 'position-relative' : 'd-none'}`}>
        <div className={`position-absolute top-0 ${className}`}>{children}</div>
      </div>
    </div>
  );
}
