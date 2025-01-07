import { useState } from "react";
import { MdAddLink } from "react-icons/md";
import { toast } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast CSS

function Addtodo({ onnewitem }) {
  const [todoname, settodoname] = useState("");
  const [tododate, settododate] = useState("");

  const handlenamechange = (event) => {
    settodoname(event.target.value);
  };
  const handleDatechange = (event) => {
    settododate(event.target.value);
  };

  // Added validation to check if the input fields are empty
  const handleAddButtonClicked = () => {
    if (!todoname.trim() || !tododate.trim()) {
      // Check if either input is empty
      toast.warn("Please fill in both the Task and the Duedate.", {
        // Use toast notification
        position: "top-center",
        autoClose: 3000, // Auto close after 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    onnewitem(todoname, tododate);
    settododate("");
    settodoname("");
  };

  return (
    <div>
      <div className="container text-center">
        <div className="row g-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter To do Here!"
              value={todoname}
              onChange={handlenamechange}
            />
          </div>
          <div className="col-4">
            <input type="date" onChange={handleDatechange} value={tododate} />
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success g-btn"
              onClick={handleAddButtonClicked}
            >
              <MdAddLink />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;
