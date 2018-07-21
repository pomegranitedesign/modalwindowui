import React, { Component } from 'react';
import styled from 'styled-components';

const ContentItem = styled.li`
  padding: 50px;
  list-style: none;
  display: block;
`;

export default class SideMenu extends Component {
  render() {
    const { width, toggle, sideNavContent } = this.props;
    return (
      <div 
        className="SideMenu"
        onClick={toggle}
        style={{width: width}}
      >
        {sideNavContent.map(item => (
          <ContentItem key={item}>
            {item}
          </ContentItem>
        ))}
      </div>
    );
  }
}