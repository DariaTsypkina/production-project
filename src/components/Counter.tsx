import { useState } from "react";
import s from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((state) => state + 1);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment} className={s.btn}>
        increment
      </button>
    </div>
  );
};

export default Counter;
