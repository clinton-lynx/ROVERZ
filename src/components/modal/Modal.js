import React from "react";
import './index.scss'
import { RiCloseLine } from "react-icons/ri";


const Modal = ({ setIsOpen }) => {
    return (
      <>
        <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className= "modal">
            <div className= "modalHeader">
              <h2 className="heading">Buy me a coffee</h2>
            </div>
            <button className= "closeBtn" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
            </button>
            <div className= "modalContent">
              Are you sure you want to delete the item?
            </div>
            <div className= "modalActions">
              <div className= "actionsContainer">
                <button className= "deleteBtn" onClick={() => setIsOpen(false)}>
                  Delete
                </button>
                <button
                  className= "cancelBtn"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Modal;