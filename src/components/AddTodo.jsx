import React, {  useState } from "react";
import { IoBagAddSharp } from "react-icons/io5";

const AddTodo = ({ addItem }) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");


  const nameOnChange = (event) => {
    setName(event.target.value);
   
  };

  const dateOnChange = (event) => {
    setDate(event.target.value);
   
  };
  const sentData = () => {
    if (!name.trim() || !date.trim()) {
      alert("Both fileds are required ");
      return;
    }
    addItem(name, date);
    setName("");
    setDate("");
  };
  return (
    <div>
      <div className="container items-container ">
        <div className="row new-row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter name here"
              onChange={nameOnChange}
              value={name}
              style={{ borderColor: !name.trim() ? "red" : "initial" }}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              onChange={dateOnChange}
              value={date}
              style={{ borderColor: !date.trim() ? "red" : "initial" }}
            />
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={sentData}
              className="btn new-class btn-success"
            >
             <IoBagAddSharp />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
