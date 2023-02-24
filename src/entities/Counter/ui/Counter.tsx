import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{value}</h1>
      <Button variant="primary" size="sm" onClick={increment}>
        increment
      </Button>

      <Button variant="primary" size="sm" onClick={decrement}>
        decrement
      </Button>
    </div>
  );
};

