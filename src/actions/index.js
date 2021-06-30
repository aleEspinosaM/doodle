export const GET_MESSAGES_STARTED = "GET_MESSAGES_STARTED";
export const GET_MESSAGES_SUCCESS = "GET_MESSAGES_SUCCESS";
export const GET_MESSAGES_FAILED = "GET_MESSAGES_FAILED";
export const POST_MESSAGE = "POST_MESSAGE";

export const getMessagesStarted = () => ({ type: GET_MESSAGES_STARTED });
export const getMessagesFailed = (error) => ({
  type: GET_MESSAGES_FAILED,
  payload: error,
});
export const getMessagesSuccess = (data) => ({
  type: GET_MESSAGES_SUCCESS,
  payload: data,
});
export const sentMessage = (message) => ({
  type: POST_MESSAGE,
  payload: message
})