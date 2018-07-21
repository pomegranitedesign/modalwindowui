import React, { Component } from 'react';
import { Trail, animated } from 'react-spring';
import styled from 'styled-components';

const ContentItem = styled.li`
  padding: 50px;
  list-style: none;
  display: block;
`;

const AnimItem = ContentItem.withComponent(animated.li);

export default class SideMenu extends Component {
  render() {
    const { width, toggle, items, assignedClass } = this.props;
    return (
      <div 
        className={assignedClass}
        onClick={toggle}
        style={{width: width}}
      >
        <Trail from={{opacity: 0}} to={{opacity: 1}} keys={items.map((items, key) => key)}>
          {items.map(item => styles => (
            <AnimItem style={{styles}}>
              {item}
            </AnimItem>
          ))}
        </Trail>
      </div>
    );
  }
}