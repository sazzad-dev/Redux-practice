const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment');
const DecrementEl = document.getElementById('decrement');

const initialState = {
  value: 0,
};

function createReducer(state = initialState, action) {
  if (action.type === 'increment') {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === 'decrement') {
    return {
      ...state,
      value: state.value - 1,
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
  store.dispatch({
    type: 'increment',
  });
});

DecrementEl.addEventListener('click', () => {
  store.dispatch({
    type: 'decrement',
  });
});
