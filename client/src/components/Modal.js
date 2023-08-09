import { useState } from "react";

const Modal = ({ mode, setShowModal }) => {
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: "",
    title: "",
    progress: "",
    date: editMode ? "" : new Date(),
  });

  const handleChange = (e) => {
    console.log("Changing!", e);
    const { name, value } = e.target;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data);
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="formTitleContainer">
          <h3>Let's {mode} your task!</h3>
          <button className="closeButton" onClick={() => setShowModal(false)}>
            X
          </button>
        </div>
        <form>
          <label for="title"></label>
          <input
            id="title"
            required
            maxLength={30}
            placeholder="Type your task here..."
            name="title"
            value={data.title}
            onChange={handleChange}
          />
          <br />

          <label for="range">Drag to select your current progress:</label>
          <input
            id="range"
            type="range"
            min="0"
            max="10"
            name="progress"
            value={data.progress}
            onChange={handleChange}
          />
          <label for="submit"></label>
          <input id="submit" className={mode} type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
