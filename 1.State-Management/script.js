const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment');
const DecrementEl = document.getElementById('decrement');

let count = 0;

IncrementEl.addEventListener('click', () => {
  count++;
  CounterEl.innerText = count;
});
DecrementEl.addEventListener('click', () => {
  count--;
  CounterEl.innerText = count;
});
