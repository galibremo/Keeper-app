import React, { useState } from "react";

function CreateArea(props) {
  const [isExpand,setIsExpand] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handelChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    setIsExpand(false);
    event.preventDefault();
  }
  function handelExpand(){
    setIsExpand(true)
  }
  return (
    <div>
      <form>
        {isExpand ? <input
          onChange={handelChange}
          name="title"
          value={note.title}
          placeholder="Title"
        /> : null}
        <textarea
          onClick={handelExpand}
          onChange={handelChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
