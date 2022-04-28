import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import NoteItem from "./NoteItem/NoteItem";

import "./styles.scss";

function NoteList({ showModal }) {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [editMode, setEditMode] = useState(false);

  const createNote = () => {
    const maxId =
      noteList.length === 0
        ? 0
        : Math.max.apply(
            Math,
            noteList.map((e) => {
              return e.id + 1;
            })
          );
    setNoteList([
      ...noteList,
      {
        id: maxId,
        value: note,
      },
    ]);

    setNote("");
  };

  const editNote = (id) => {
    console.log(id);
    setNoteList(
      noteList.map((el) => (el.id == id ? { ...el, value: note } : el))
    );

    closeEditNote();
  };

  const closeEditNote = () => {
    setEditMode(false);
    setNote("");
  };

  const [tmpId, setTmpId] = useState(0);

  const deleteNote = (id) => {
    let deleteItem = noteList.filter((e) => e.id != id);
    setNoteList(deleteItem);
  };

  useEffect(() => {
    if (!showModal) {
      setNoteList([]);
      setNote("");
      closeEditNote();
    }
  }, [showModal]);

  const nodeRef = useRef(null);

  return (
    <div>
      <div className="grid grid-cols-6 gap-0 mb-4">
        <div className="col-span-6">
          <div className="relative flex items-center justify-between mb-2">
            <label
              className="block text-sm font-bold text-gray-700"
              htmlFor="note"
            >
              Ghi chú
            </label>

            <div
              className={`absolute right-0 ${
                editMode ? "edit-mode-on" : "edit-mode-off"
              }`}
            >
              <button
                className="mr-2 button button-success"
                onClick={() => editNote(tmpId)}
              >
                Lưu
              </button>
              <button className="button button-danger" onClick={closeEditNote}>
                Hủy
              </button>
            </div>

            <div className={`${editMode ? "edit-mode-off" : "edit-mode-on"}`}>
              <button className="button button-success" onClick={createNote}>
                Tạo ghi chú
              </button>
            </div>
          </div>
          <textarea
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="note"
            type="note"
            rows="3"
            placeholder="Nhập ghi chú của bạn"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
        </div>
        <div className="flex items-end justify-end col-span-2"></div>
      </div>
      <TransitionGroup className="overflow-x-hidden overflow-y-scroll h-36 hide-scrollbar">
        {noteList.map((note, index) => (
          <CSSTransition
            nodeRef={nodeRef}
            in
            key={index}
            timeout={500}
            classNames="myNote"
          >
            <NoteItem
              id={note.id}
              value={note.value}
              deleteNote={deleteNote}
              nodeRef={nodeRef}
              editMode={editMode}
              setEditMode={setEditMode}
              note={note.value}
              setNote={setNote}
              setTmpId={setTmpId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default NoteList;
