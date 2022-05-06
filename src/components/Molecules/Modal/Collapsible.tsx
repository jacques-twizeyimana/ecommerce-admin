import React from 'react';

import Icon from '../../Atoms/Icon';
interface ICollapsibleProps {
  title: string;
  isOpen?: boolean;
  children: React.ReactNode;
}

export default function Collapsible({
  title,
  isOpen = false,
  children,
}: ICollapsibleProps) {
  const [open, setOpen] = React.useState(isOpen);

  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="content-item mb-4">
        <h6 className="item-name">
          {title}
          <button className="btn w-auto" onClick={toogleOpen}>
            <Icon name={open ? 'arrow-up-black' : 'arrow-down-dark'} size={20} />
          </button>
        </h6>
        {open ? <div className="col-11 border p-2">{children}</div> : null}
      </div>
    </div>
  );
}
