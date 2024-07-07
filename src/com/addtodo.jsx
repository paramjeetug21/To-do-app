import { useRef } from "react";
import { MdAddTask } from "react-icons/md";

const Add = ({ onNewitem }) => {
  const todonameele = useRef(null);
  const duedateele = useRef(null);

  const handleNewItem = (event) => {
    event.preventDefault();
    const tn = todonameele.current.value;
    const dd = duedateele.current.value;
    console.log(`${tn}, ${dd}`);
    onNewitem(tn, dd);
    todonameele.current.value = "";
    duedateele.current.value = "";
  };

  return (
    <div className="row">
      <div className="col-4">
        <input type="text" placeholder="Enter todo here" ref={todonameele} />
      </div>
      <div className="col-4">
        <input type="date" ref={duedateele} />
      </div>
      <div className="col-4">
        <button
          className="btn btn-warning todo-items"
          style={{ float: "left" }}
          onClick={handleNewItem}
        >
          <MdAddTask /> ADD
        </button>
      </div>
    </div>
  );
};

export default Add;
