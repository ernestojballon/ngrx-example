// Reducer example
const loadJokesSuccess = (state, action) => {
  return {
    ...state,
    jokes: action.jokes
  };
}

const loadJokesFailure = (state, action) => {
  return {
    ...state,
    err: action.err
  };
}

export default {
  loadJokesSuccess,
  loadJokesFailure
};