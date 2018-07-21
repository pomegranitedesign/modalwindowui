import React, { Component } from 'react';

export default class Toggle extends Component {
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