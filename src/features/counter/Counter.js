import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  incrementCountStatus
} from './counterSlice';

import {
  incrementAsync as incrementAsyncNew,
  incrementCountStatus as incrementCountStatusNew
} from './counterSliceNew';

import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);
  const incrementStatus = useSelector(incrementCountStatus);
  const incrementStatusNew = useSelector(incrementCountStatusNew);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  console.log(`Increment Status:`, incrementStatus);
  console.log(`Increment Status New:`, incrementStatusNew);

  const incrementValue = Number(incrementAmount) || 0;

  const handleAsyncSubmit = () => {
    dispatch(incrementByAmount(incrementValue))
    dispatch(incrementAsyncNew(incrementValue))
  }

  if (incrementStatus === 'success' && incrementStatusNew === 'success') {
    alert('Data have been saved successfully.');
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => handleAsyncSubmit()}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
