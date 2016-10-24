import * as types from '../actions/actionTypes';

export const defaultState = {
  players: [],
  rounds: 0,
  matches: [],
  eventguid: '',
  sanctionnumber: '',
  title: '',
  startdate: '',
  mounting: false,
  building: false,
  mounted: false,
  errors: [],
  fileName: '',
  submitted: false
}

const fileUpload = (state = defaultState, action) => {

  switch (action.type) {

    case types.LOAD_NEW_FILE_REQUEST: {
      return {
        ...state,
        mounting: true,
        fileName: action.fileName
      }
    }

    case types.LOAD_NEW_FILE: {

      const { eventguid, sanctionnumber, title, startdate} = action.res.data

      return {
          ...state,
          rounds: action.rounds,
          matches: action.matches,
          players: action.players.map((player) => {
            player.change = 0;
            return player;
          }),
          eventguid,
          sanctionnumber,
          title,
          startdate,
          mounting: false,
          errors: [],
          mounted: true
      }
    }

    case types.LOAD_NEW_FILE_FAILURE: {

      return {
        ...state,
        mounting: false,
        errors: [
          ...state.errors,
          action.error.response.data
        ]
      }
    }

    case types.CALCULATE_ELO: {
      return {
        ...state,
        submitted: true
      }
    }

    default:
      return state;

  }
}

export default fileUpload;
