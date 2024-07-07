import { useContext } from "react";
import Todoitems from "./todoitems";
import { I } from "../store/todo-item-store";
const Todoitem = ({ todoitems, onDeleteclick }) => {
  const hel = useContext(I);
  const help = hel.item;
  return (
    <>
      {help.map((items) => (
        <Todoitems
          key={items.name}
          todoname={items.name}
          tododate={items.duedate}
          onDeleteclick={onDeleteclick}
        ></Todoitems>
      ))}
    </>
  );
};
export default Todoitem;
