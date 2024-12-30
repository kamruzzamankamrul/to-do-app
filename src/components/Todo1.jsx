import React from "react";
import { AiFillDelete } from "react-icons/ai";

const Todo1 = ({name, date, deletItem}) => {
 
  return (
    <div>
      <div className="container items-container"  >
        <div className="row new-row ">
          <div className="col-6">{name}</div>
          <div className="col-4">{date}</div>
          <div className="col-2">
            <button type="button" className="btn new-class btn-danger"  onClick={()=> deletItem(name)} >
            <AiFillDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo1;
