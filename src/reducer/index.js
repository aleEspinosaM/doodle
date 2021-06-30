import {
  GET_MESSAGES_STARTED,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_FAILED,
  POST_MESSAGE,
} from './../actions';
import {API_STATUS} from '../constants';

export const initialState = {
  messages: [],
  isLoadingMessages: API_STATUS.IDLE,
  loggedUser: 'alex'
};

export default function rootReducer(state, {type, payload}) {
  switch (type) {
    case GET_MESSAGES_STARTED:
      return {
        ...state,
        isLoadingMessages: API_STATUS.PENDING,
      };
    case GET_MESSAGES_FAILED:
      return {
        ...state,
        isLoadingMessages: API_STATUS.REJECTED,
        error: payload,
      };
    case GET_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: payload,
        isLoadingMessages: API_STATUS.RESOLVED,
      };
    case POST_MESSAGE: 
      return {
        ...state,
        messages: [...state.messages, payload]
      }
    default:
      return { ...state };
  }
};