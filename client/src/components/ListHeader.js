const ListHeader = ({ listName }) => {
  const addTask = () => {
    console.log("add task");
  };

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
        <button className="addNewBtn" onClick={addTask}>
          Add New
        </button>
        <button className="signOutBtn" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
