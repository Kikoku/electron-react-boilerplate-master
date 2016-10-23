import * as types from './actionTypes';
import xml2js from 'xml2js';
import axios from 'axios';

function readAsync(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    }
    reader.onerror = (err) => {
      reject(err);
    }
    reader.readAsText(blob);
  });
}

function convertXmlAsync(xml) {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser({mergeAttrs: true, explicitArray: false});
    parser.parseString(xml, (err, result) => {
      if(err) reject(err);
      resolve(result);
    })
  })
}


export function mountNewFile(file) {
  return function (dispatch) {
    readAsync(file)
    .then((xml) => {
      return convertXmlAsync(xml);
    }).then((res) => {
      axios.post('https://murmuring-beyond-44790.herokuapp.com/api/v1/elio/player', {players: res.event.participation.person})
      .then((players) => {
        dispatch(loadNewFile(res, file.name, players))
      })
    })
  }
}

function loadNewFile(file, name, players) {
  return {
    type: types.LOAD_NEW_FILE,
    file,
    players: players.data,
    rounds: file.event.matches.round.length,
    matches: file.event.matches.round.reduce(function(p, c, i, a) {
      return [...p, ...c.match.map((match, i) => {
        return {
          ...match,
          number: c.number,
          person: players.data.filter((person) => (
            person.dci === match.person
          ))[0],
          opponent: match.opponent ? players.data.filter((person) => (
            person.dci === match.opponent
          ))[0] : {
            first: 'BUY',
            middle: 'BUY',
            last: 'BUY',
            dci: 'BUY',
            country: 'BUY',
            elo: 1600
          }
        }
      })]
    }, []),
    fileName: name,
    promise: axios.post('https://murmuring-beyond-44790.herokuapp.com/api/v1/elio/mount', {
      title: file.event.title,
      sanctionnumber: file.event.sanctionnumber,
      eventguid: file.event.eventguid,
      startdate: file.event.startdate
    })
  }
}

function eloUpdate(k, result, pElo, oElo) {
  let K = k;
  let R = result;
  let E = .5 + ((pElo - oElo) * .001)

  let change = K * (R - E);

  return change;

}

export function calculateElo(players, matches, rounds) {
  matches.forEach((match) => {

    let playerElo = players.filter((player) => player.dci === match.person.dci)[0];
    let opponentElo = players.filter((player) => player.dci === match.opponent.dci)[0];

    if(!opponentElo) {
      opponentElo = {
        first: 'BUY',
        middle: 'BUY',
        last: 'BUY',
        dci: 'BUY',
        country: 'BUY',
        elo: 1600
      }
    }

    players = players.map((player) => {
      if(player.dci === match.person.dci) {
        player.elo += eloUpdate(12, match.outcome === "2" ? .5 : match.win > match.loss ? 1 : 0, playerElo.elo, opponentElo.elo);
        if(match.outcome === "2") {
          player.draws += 1;
        } else if( match.win > match.loss) {
          player.wins += 1;
        } else {
          player.losses += 1;
        }
      } else if(player.dci === match.opponent.dci) {
        player.elo += eloUpdate(12, match.outcome === "2" ? .5 : match.win < match.loss ? 1 : 0, opponentElo.elo, playerElo.elo);
        if(match.outcome === "2") {
          player.draws += 1;
        } else if (match.win < match.loss) {
          player.wins += 1;
        } else {
          player.losses += 1;
        }
      }
      player.elo = Math.round(player.elo)
      return player;
    })
  })

  return {
    type: types.CALCULATE_ELO,
    promise: axios.post('https://murmuring-beyond-44790.herokuapp.com/api/v1/elio/elo-update', {
      players
    })
  }

}
