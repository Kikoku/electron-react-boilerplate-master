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
  errors: [],
  fileName: ''
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
          rounds: action.rounds,
          matches: action.matches,
          players: action.players,
          eventguid,
          sanctionnumber,
          title,
          startdate,
          mounting: false,
          errors: []
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
        players: action.res.data
      }
    }

    default:
      return state;

  }
}

export default fileUpload;
