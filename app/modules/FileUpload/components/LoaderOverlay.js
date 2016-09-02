import React, { Component } from 'react';

class LoaderOverlay extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(142, 68, 173,.7)',
          transition: 'opacity .3s, visibility .3s',
          opacity: this.props.enabled ? .7 : 0 ,
          visibility: this.props.enabled ? 'visible' : 'hidden',
          display: 'block',
          zIndex: 3
        }}
      />
    )
  }
}

export default LoaderOverlay;
