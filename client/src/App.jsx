import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    { name: "rent", price: "14500" },
    { name: "electricity", price: "1500" },
  ]);
  console.log(items);

  return (
    <div className="max-w-2xl mx-auto space-y-10 pt-10 text-center ">
      <h1 className="text-3xl font-bold">Todo List</h1>
      <Form setItems={setItems} />
      <List items={items} />
    </div>
  );
}

export default App;
