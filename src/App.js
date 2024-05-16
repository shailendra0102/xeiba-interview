import "./styles.css";
import { useState, useRef } from "react";

export default function App() {
  const [list, setList] = useState([]);
  const ref = useRef(null);
  const handler = () => {
    setList([...list, ref.current.value]);
    ref.current.value = "";
  };
  const remove = (index) => {
    setList(
      list.filter((item, index2) => {
        return index !== index2;
      }),
    );
  };
  return (
    <div className="App">
      <input type="text" ref={ref} />
      <button onClick={handler}>Submit</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => remove(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
