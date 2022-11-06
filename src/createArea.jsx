import React, { useState } from "react";
import notes from "./Notes";
function CreateArea(props) {
  const [note, setnote] = useState({
    title: "",
    content: ""
  });
  //console.log("dc",note)
  function handleChange(event) {
    const { name, value } = event.target;
    setnote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setnote(() => {
      return {
        title: "",
        content: ""
      };
    });

    event.target.title.value = "";
    event.target.content.value = "";

    //console.log(event.target.title.value);
    //console.log(note);
    event.preventDefault();
  }

  return (
    <div className="typebox">
      <form onSubmit={submitNote}>
        <input
          className="inputs"
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          className="inputs"
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder="Take a note..."
          row="3"
        />
        <button>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
