import React, { Component, Fragment } from 'react';
import { Transition } from 'react-spring';

import Toggle from '../Toggle/Toggle';
import SideMenu from '../SideMenu/SideMenu';
import MenuButton from '../MenuButton/MenuButton';
import MenuButtonContainer from '../MenuButtonContainer/MenuButtonContainer';

export default class SideNavContent extends Component {
  state = {
    items: [
      "Item One",
      "Item Two",
      "Item Three",
      "Item Four",
    ]
  }

  render() {
    const { items } = this.state;
    const { assignedClass } = this.props;

    return (
      <Toggle>
        {({ on, toggle }) => (
          <Fragment>
            {on ? (
              <Transition
                from={{ width: "0%" }}
                enter={{ width: "35%" }}
                leave={{ width: "0%" }}
              >
                {styles => (
                  <SideMenu
                    width={styles.width}
                    toggle={toggle}
                    items={items}
                    assignedClass={assignedClass.SideMenu}
                  />
                )}
              </Transition>
            ) : (
                <MenuButtonContainer assignedClass={assignedClass.MenuButtonContainer}>
                  <MenuButton
                    toggle={toggle}
                    assignedClass={assignedClass.MenuOpenButton}
                  />
                </MenuButtonContainer>
              )}
          </Fragment>
        )}
      </Toggle>
    );
  }
}