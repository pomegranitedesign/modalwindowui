import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Transition, Spring, config } from 'react-spring';

import SideMenu from './SideMenu/SideMenu';
import MenuButton from './MenuButton/MenuButton';
import MenuButtonContainer from './MenuButtonContainer/MenuButtonContainer';
import { array } from '../Utilities/colors';
import './App.css';

// Toggle Component
class Toggle extends Component {
  state = {
    on: false
  }

  handleToggle = () => {
    this.setState(({on}) => ({on: !on}));
  }

  render() {
    const { children } = this.props;

    return children({
      on: this.state.on,
      toggle: this.handleToggle
    });
  }
}

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
          className="Content"
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
    className="Container"
  >
    {props.children}
  </div>
);

class SideNavContent extends Component {
  state = {
    sideNavContent: [
      "Item One",
      "Item Two",
      "Item Three",
      "Item Four",
    ]
  }

  render() {
    const { sideNavContent } = this.state;

    return (
      <Toggle>
        {({on, toggle}) => (
          <Fragment>
            {on ? (
              <Transition
                from={{width: "0%"}}
                enter={{width: "35%"}}
                leave={{width: "0%"}}
              >
                {styles => (
                  <SideMenu 
                    width={styles.width} 
                    toggle={toggle}
                    sideNavContent={sideNavContent}
                  />
                )}
              </Transition>
            ) : (
              <MenuButtonContainer>
                <MenuButton toggle={toggle} />
              </MenuButtonContainer>
            )}
          </Fragment>
        )}
      </Toggle>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">

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
              className="Container"
            >
              <SideNavContent />
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