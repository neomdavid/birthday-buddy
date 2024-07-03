import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [count, setCount] = useState(data.length);
  const [people, setPeople] = useState(data);
  return (
    <div className="container">
      <h3>{count} Birthdays Today</h3>
      <List people={people} />
      <button
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
};
export default App;
