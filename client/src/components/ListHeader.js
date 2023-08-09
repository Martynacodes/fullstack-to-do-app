import Modal from "./Modal";
import { useState } from "react";

const ListHeader = ({ listName }) => {
  const [showModal, setShowModal] = useState(false);

  const signOut = () => {
    console.log("signout");
  };
  return (
    <div className="listHeader">
      <h1>
        {listName}
        <span>Get things done, one item at a time.</span>
      </h1>
      <div className="buttonsContainer">
        <button className="addNew" onClick={() => setShowModal(true)}>
          Add New
        </button>
        <button className="signOut" onClick={signOut}>
          Sign Out
        </button>
      </div>
      {showModal && <Modal mode={"create"} setShowModal={setShowModal} />}
    </div>
  );
};

export default ListHeader;
