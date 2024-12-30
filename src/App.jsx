import { useState } from "react";
import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";

import Todo from "./components/Todo";
import Wellcome from "./components/Wellcome";

function App() {
  // const item =[];
  const item = [
    {
      name: "Dal",
      date: "11/06/2024",
    },
    {
      name: "Ghee",
      date: "12/06/2024",
    },
    {
      name: "Doi",
      date: "13/06/2024",
    },
  ];

  const [items, setItems] = useState(item);

  const addItem = (name, date) => {
    // console.log(name, date)
    setItems((previous) => [...previous, { name: name, date: date }]);
  };

  const deletItem = (name) => {
    // const newitem = items.filter((item) => item.name !== name);
    // setItems(newitem)

    setItems((previous) => previous.filter((item) => item.name !== name));
  };

  return (
    <>
      <div>
        <center>
          <AppName />
          <AddTodo addItem={addItem} />
          {items.length === 0 && <Wellcome />}
          <Todo items={items} deletItem={deletItem} />
        </center>
      </div>
    </>
  );
}

export default App;
