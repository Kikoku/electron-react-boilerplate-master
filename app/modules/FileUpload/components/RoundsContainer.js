import React, { Component } from 'react';
import RoundContainer from './RoundContainer';

class RoundsContainer extends Component {
  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          Rounds
        </div>
        <ul className="list-group">
          {
            [...Array(this.props.rounds)].map((x, i) => (
              <RoundContainer
                key={i}
                number={i + 1}
                matches={this.props.matches.filter((match) => parseInt(match.number, 10) === i + 1)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default RoundsContainer
