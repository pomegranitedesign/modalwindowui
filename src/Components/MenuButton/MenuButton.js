import React from 'react';

const MenuButton = ({toggle, assignedClass}) => (
  <button
    onClick={toggle}
    className={assignedClass}
  >
    Menu
  </button>
);  

export default MenuButton;