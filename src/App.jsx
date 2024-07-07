import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppName from "./com/appname";
import Add from "./com/addtodo";
import Styles from "./item.module.css";
import Todoitem from "./com/items";
import Cont from "./com/cont";
import { useState, useReducer } from "react";
import Welcome from "./com/welcom";
import { I } from "./store/todo-item-store";
const pureaction = (current, action) => {
  let newlist = current;
  if (action.type === "NEW_ITEM") {
    newlist = [
      ...current,
      { name: action.payload.itemName, duedate: action.payload.itemDate },
    ];
  } else if (action.type === "DELETE_ITEM") return [];
  {
  }
  return newlist;
};
function App() {
  const item = [
    { name: "buy milk", duedate: "11/2/2002" },
    { name: "gulabzamun", duedate: "today" },
  ];

  // const [ti, sti] = useState([]);
  const [ti, dispach] = useReducer(pureaction, []);
  const onNewitem = (itemName, itemDate) => {
    const nyaitem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate,
      },
    };
    dispach(nyaitem);
    // if (itemName != "" && itemDate != "") {
    //   const newitem = [...ti, { name: itemName, duedate: itemDate }];
    //   sti(newitem);
    // sti((currvalue) => [...currvalue, { name: itemName, duedate: itemDate }]);
  };

  const onDeleteclick = (ITEMNAME) => {
    const newtodoitems = ti.filter((item) => item.name !== ITEMNAME);
    sti(newtodoitems);
    console.log(`sdsd :${ITEMNAME}`);
  };
  const df = [{ name: "paramjeet", duedata: "25/11/1111" }];
  return (
    <I.Provider
      value={{
        item: ti,
        onDeleteclick: onDeleteclick,
        onNewitem: onNewitem,
      }}
    >
      <center className="todo-container container">
        <AppName />
        <Add onNewitem={onNewitem} />
        <div className="todo-items">
          <Todoitem></Todoitem>
          {ti.length == 0 && <Welcome></Welcome>}
        </div>
      </center>
    </I.Provider>
  );
}

export default App;
