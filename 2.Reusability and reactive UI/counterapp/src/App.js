import { useState } from 'react';
import Counter from './components/Counter';
import Stat from './components/Stat';

function App() {
  const [count, setCount] = useState([
    { id: 1, count: 0 },
    { id: 2, count: 0 },
  ]);
  const increment = (id) => {
    const updateState = count?.map((c) => {
      if (c?.id === id) {
        return {
          ...c,
          count: c?.count + 1,
        };
      } else {
        return {
          ...c,
        };
      }
    });
    setCount(updateState);
  };
  const decrement = (id) => {
    const updateState = count?.map((c) => {
      if (c?.id === id) {
        return {
          ...c,
          count: c?.count - 1,
        };
      } else {
        return {
          ...c,
        };
      }
    });
    setCount(updateState);
  };
  const TotalCount = () => {
    return count?.reduce((total, count) => total + count.count, 0);
  };

  return (
    <div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
        Simple Counter Application
      </h1>
      <div className='max-w-md mx-auto mt-10 space-y-5'>
        {count?.map((c, i) => (
          <Counter
            key={`index_${c.id}_${i}`}
            id={c.id}
            increment={increment}
            decrement={decrement}
            count={c.count}
          />
        ))}
        <Stat count={TotalCount()} />
      </div>
    </div>
  );
}

export default App;
