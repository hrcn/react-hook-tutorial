import React, { useState } from 'react';

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // Array destructuring of:
  // var countStateVariable = useState(0);
  // var count = countStateVariable[0];
  // var setCount = countStateVariable[1];

  // Declare multiple state variables:
  // const [age, setAge] = useState(42);
  // const [fruit, setFruit] = useState('banana');
  // const [todos, setTodos] = useState([{ text: 'Learn Hook' }]);

  // function handleOrangeClick() {
  //   // this.setState({ fruit: 'orange' })
  //   setFruit('orange');
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}