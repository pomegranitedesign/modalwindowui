import React from 'react';

const MenuButtonContainer = ({children, assignedClass}) => (
  <div className={assignedClass}>
    {children}
  </div>  
);

export default MenuButtonContainer;