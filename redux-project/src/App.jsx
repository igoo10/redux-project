import { useDispatch, useSelector } from 'react-redux'; 
import { increment, decrement, reset } from './redux/counterSlice'; 
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value); 
  const dispatch = useDispatch(); 

  return (
    <div className="App">
      <h1>Redux Counter</h1>
      <p>Count: {count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>Increse</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    </div>
  );
}

export default App;
