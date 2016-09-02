import React, { Component } from 'react';

class ErrorContainer extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.error.error}({this.props.error.statusCode}): {this.props.error.message}
        </p>
      </div>
    )
  }
}

export default ErrorContainer;
