import "./App.css";
import { Note2 } from "./Note2";
import { useState, useEffect } from "react";
import {
  getAll as getAllNotes,
  create as createNotes,
} from "./services/notes/index.js";

export const Clase5 = () => {
  const [note, setNote] = useState([]);
  const [newNote, setNewnote] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const ids = note.map((note) => note.id);
  const maxId = Math.max(...ids);

  /*
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(URL)
        .then((res) => res.json())
        .then((json) => {
          setNote(json);
          setLoading(false);
        });
    }, 2000);
  }, []);
*/

  //------------------------------------ Axios----------------------------//
  useEffect(() => {
    setLoading(true);

    getAllNotes().then((note) => {
      setNote(note);
      setLoading(false);
    });
  }, []);

  //-----------------------------------------------------------------------//
  const handleShowAll = () => {
    setShowAll(() => !showAll);
  };

  const handleChange = (event) => {
    setNewnote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const noteAddToState = {
      titel: newNote,
      body: newNote,
      userId: maxId,
    };

    createNotes(noteAddToState)
      .then((newNotes) => {
        setNote([...note, newNotes]);
      })
      .catch((e) => {
        console.log(e);
      });
    //
    setNewnote("");
  };

  //if(note.length ===0)return "Hola Manu"

  return (
    <div>
      <h1>Notes</h1>
      <button onClick={handleShowAll}>
        {showAll ? "Show only important" : "Show all"}
      </button>
      {loading ? "Cargando ...." : ""}

      {note
        .filter((note) => {
          if (showAll === true) return true;
          return note.important === true;
        })
        .map((note) => {
          return (
            <div key={note.id}>
              <Note2
                key={note.id}
                id={note.id}
                title={note.title}
                body={note.body}
              />
            </div>
          );
        })}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={newNote} />
        <button>Crear notas</button>
      </form>
    </div>
  );
};
