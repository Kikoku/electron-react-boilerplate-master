import React, { Component } from 'react';
import MatchContainer from './MatchContainer';

class RoundContainer extends Component {
  render() {
    return (
      <li className="list-group-item">
        Round {this.props.number}
        {
          this.props.matches.map((match, i) => (
            <div className="well well-sm">
              <MatchContainer
                match={match}
              />
            </div>
          ))
        }
      </li>
    )
  }
}

export default RoundContainer
