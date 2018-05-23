import React, { Component } from 'react';
import classnames from 'classnames';
import './Arrow.css';

class Arrow extends Component {
  render() {
    const {className, onClick} = this.props;
    const classRoot = classnames('arrow', className);
    return (
      <a className={classRoot} onClick={onClick}>
        <span className="top-arm" />
        <span className="bottom-arm" />
        <span className="arrow-slide" />
      </a>
    );
  }
}

export default Arrow;