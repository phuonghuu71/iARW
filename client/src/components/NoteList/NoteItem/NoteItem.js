import React from "react";

function NoteItem({
  id,
  value,
  deleteNote,
  nodeRef,
  editMode,
  setEditMode,
  note,
  setNote,
  setTmpId,
}) {
  const openEditNote = (id) => {
    setEditMode(true);
    setNote(note);
    setTmpId(id);
  };

  return (
    <div
      ref={nodeRef}
      className="grid content-start w-full grid-cols-12 gap-2 p-2 mb-4 font-bold border-2 border-dotted rounded-md place-items-center"
    >
      <p className="w-full col-span-7 truncate text-ellipsis">{value}</p>
      <div
        className={`flex items-center col-span-5 fast-animation ${
          editMode ? "translate-x-[4.8rem]" : "translate-x-4"
        }`}
      >
        <button
          className="mr-2 button button-warning"
          onClick={() => {
            openEditNote(id);
          }}
        >
          Tùy chỉnh
        </button>
        <button
          className="button button-danger"
          id={id}
          onClick={(e) => {
            deleteNote(e.target.id);
          }}
        >
          Xóa
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
