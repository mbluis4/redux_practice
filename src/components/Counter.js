import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <section className="counter">
      <button className="btn" onClick={() => dispatch(decrement())}>
        -
      </button>
      <h2 className="count">{count}</h2>
      <button className="btn" onClick={() => dispatch(increment())}>
        +
      </button>
      <button className="btn reset" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </section>
  );
}
