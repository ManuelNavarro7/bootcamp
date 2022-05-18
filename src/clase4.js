import "./App.css";
import { Note } from "./Note";

import { useState } from "react";

export const Clase4 = (props) => {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewnote] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [showText, setshowText] = useState(
    <div>
      <h1>Project Managment</h1>
    </div>
  );

  const handleChange = (event) => {
    setNewnote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const noteAddToState = {
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };
    console.log(noteAddToState);

    setNotes([...notes, noteAddToState]);
    setNewnote("");
  };

  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  const handleProjectManagment = () => {
    setshowText(
      <div>
        <h1>Project Managment</h1>
      </div>
    );
  };
  const handleIA = () => {
    setshowText(
      <div>
        <h1>Inteligence Artificial</h1>
        <h2>Aca puedo poner lo que quiero</h2>
      </div>
    );
  };

  if (typeof notes === "undefined" || notes.length === 0) {
    return "no tenemos notas";
  }

  return (
    <>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      <div>
        {notes

          .filter((note) => {
            if (showAll === true) return true;
            return note.important === true;
          })
          .map((note) => {
            return (
              <div key={note.id}>
                <Note
                  key={note.id}
                  id={note.id}
                  content={note.content}
                  date={note.date}
                  categories={note.categories}
                />
              </div>
            );
          })}
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleChange} value={newNote} />
          <button>Crear notas</button>
        </form>
      </div>
      <div>
        <button onClick={handleProjectManagment}>Project Managment</button>
        <button onClick={handleIA}>IA</button>
        {showText}
      </div>
    </>
  );
};
