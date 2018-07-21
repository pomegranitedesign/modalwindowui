import React from 'react';

const MenuButton = ({toggle}) => (
  <button
    onClick={toggle}
    className="MenuOpenButton"
  >
    Menu
  </button>
);  

export default MenuButton;