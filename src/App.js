import "./styles.css";
import { useState, useRef, useEffect } from "react";

export default function App() {
  //   const [input1, setInput] = useState("");
  const [list, setList] = useState([]);
  const ref = useRef(null);
  const handler = () => {
    console.log(ref.current.value);
    list.push(ref.current.value);
    setList([...list]);
    // setInput(ref.current.value);
    ref.current.value = "";
  };
  const delete1 = (index) => {
    const data = list.splice(index, 1);
    // console.log(data);
    // console.log("list", list);
    setList([...list]);
  };
  // useEffect(() => {
  //   // console.log(ref.current);
  // }, []);
  return (
    <div className="App">
      <input type="text" ref={ref} />
      <button onClick={handler}>Submit</button>
      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => delete1(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
