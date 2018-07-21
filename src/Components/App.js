import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Transition, Spring, config } from 'react-spring';

import SideMenu from './SideMenu/SideMenu';
import SideNavContent from './SideNavContent/SideNavContent';
import MenuButton from './MenuButton/MenuButton';
import MenuButtonContainer from './MenuButtonContainer/MenuButtonContainer';
import Toggle from './Toggle/Toggle';
import { array } from '../Utilities/colors';
import assignedClass from './App.css';

const Content = (props) => {
  return (
    <Transition
      from={{
        opacity: 0
      }}

      enter={{
        opacity: 1
      }}

      leave={{
        opacity: 0
      }}

      config={config.gentle}
    >
      {styles => (
        <div
          style={{
            opacity: styles.opacity,
          }}
          className={assignedClass.Content}
        >
          {props.children}
        </div>
      )}
    </Transition>
  );
}

const Container = (styles, props) => (
  <div 
    style={{transform: `scale(${styles.scale})`}}
    className={assignedClass.Container}
  >
    {props.children}
  </div>
);

class App extends Component {
  render() {
    return (
      <div className={assignedClass.App}>
        <Transition
          from={{
            scale: 0
          }}

          enter={{
            scale: 1
          }}

          leave={{
            scale: 0
          }}

          config={{
            easing: "cubic-bezier(.17,.67,.85,.59)",
            tension: 170,
          }}
        >
          {styles => (
            <div
              style={{transform: `scale(${styles.scale})`}} 
              className={assignedClass.Container}
            >
              <SideNavContent assignedClass={assignedClass} />
              <Content>
                <h1>Your Content Will Be Here</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos deserunt commodi tempora exercitationem rerum eaque quasi illum iste assumenda ullam, laboriosam, nulla maxime! A inventore nesciunt est culpa vero?
                  Officiis quas accusantium aspernatur ut quaerat saepe minus error iusto assumenda omnis, unde pariatur. Eum illum possimus quis, deleniti nostrum modi autem! Quisquam, quas sit quia suscipit harum cum dignissimos?
                  <br />
                  <br />
                  Illum repellendus necessitatibus ratione quaerat et molestiae nesciunt esse magni sint expedita amet, fugiat velit possimus cumque quos nisi aliquam perspiciatis sapiente officia atque adipisci dolor dolorum earum? Officiis, porro.
                  Mollitia obcaecati excepturi, ipsum corrupti dolorum repellendus! Quisquam cum temporibus, sit dolorum labore beatae nobis quis laborum eveniet iusto quod blanditiis voluptas recusandae ea assumenda aspernatur quaerat quam repellendus culpa.
                </p>
              </Content>

            </div>
          )}
        </Transition>
      </div>
    );
  }
}

export default App;