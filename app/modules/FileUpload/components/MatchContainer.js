import React from 'react';

const MatchContainer = ({match}) => (
  <div className="row">
    <div className="col-md-4">{match.person.last}, {match.person.first} {match.person.middle} ({match.person.dci}) - {match.person.elo}</div>
    <div className="col-md-4">{match.win} / {match.loss} / {match.draw}</div>
    <div className="col-md-4">{match.opponent.last}, {match.opponent.first} {match.opponent.middle} ({match.opponent.dci}) - {match.opponent.elo}</div>
  </div>
)

export default MatchContainer;
