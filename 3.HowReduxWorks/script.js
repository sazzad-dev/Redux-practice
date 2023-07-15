const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment');
const DecrementEl = document.getElementById('decrement');

const initialState = {
  value: 0,
};

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

function createReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
}

const store = Redux.createStore(createReducer);

const render = () => {
  const state = store.getState();
  CounterEl.innerText = state.value?.toString();
};
render();
store.subscribe(render);

IncrementEl.addEventListener('click', () => {
  store.dispatch(increment(10));
});

DecrementEl.addEventListener('click', () => {
  store.dispatch(decrement(5));
});
