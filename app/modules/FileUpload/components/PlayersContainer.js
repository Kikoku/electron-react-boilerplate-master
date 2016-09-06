import React, { Component } from 'react';

class PlayersContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          Players
        </div>
        <table className="table table-condensed">
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Name
              </th>
              <th>
                DCI
              </th>
              <th>
                ELO
              </th>
            </tr>
          </thead>
          <tbody>
          {
            this.props.players.map((player, i) => (
              <tr key={i}>
                <th>
                  {i + 1}
                </th>
                <td>
                  {player.last}, {player.first} {player.middle}
                </td>
                <td>
                  {player.dci}
                </td>
                <td>
                  {player.elo}
                </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>
    )
  }
}

export default PlayersContainer;
