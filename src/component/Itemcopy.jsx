import { MdDeleteForever } from "react-icons/md";

function Itemcopy({ todoname, tododate, ondeleteclick }) {
  return (
    <div>
      <div className="container">
        <div className="row g-row">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger g-btn"
              onClick={() => ondeleteclick(todoname)}
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Itemcopy;
