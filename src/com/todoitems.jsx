import { IoTrash } from "react-icons/io5";
import { I } from "../store/todo-item-store";
import { useContext } from "react";
const Todoitems = ({}) => {
  const toI = useContext(I);
  console.log(toI);
  const toiele = toI.item;

  return (
    <div className="row">
      <div className="col-4">{toiele}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-4">
        <button
          className="btn btn-danger "
          onClick={() => onDeleteclick(todoname)}
        >
          <IoTrash></IoTrash>
        </button>
      </div>
    </div>
  );
};
export default Todoitems;
