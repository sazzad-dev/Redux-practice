const CounterEl = document.getElementById('counter');
const IncrementEl = document.getElementById('increment');
const DecrementEl = document.getElementById('decrement');

const Counter2El = document.getElementById('counter2');
const Increment2El = document.getElementById('increment2');
const Decrement2El = document.getElementById('decrement2');

let count = 0;
let count2 = 0;

IncrementEl.addEventListener('click', () => {
  count++;
  CounterEl.innerText = count;
});
DecrementEl.addEventListener('click', () => {
  count--;
  CounterEl.innerText = count;
});

Increment2El.addEventListener('click', () => {
  count2++;
  Counter2El.innerText = count2;
});
Decrement2El.addEventListener('click', () => {
  count2--;
  Counter2El.innerText = count2;
});
