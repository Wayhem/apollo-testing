import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { ADD_SONG, SONG_LIST } from "../queries/songs";

const LyricCreate = ({ history }) => {
  const [lyric, setLyric] = useState("");

  const onSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <button
        className="btn-floating btn-large blue light"
        onClick={() => history.goBack()}
      >
        <i className="material-icons">arrow_back</i>
      </button>
      <h3>Create new lyric</h3>
      <form onSubmit={onSubmit}>
        <label>Lyrics:</label>
        <input
          value={lyric}
          onChange={({ target }) => setLyric(target.value)}
        />
      </form>
    </>
  );
};

export default LyricCreate;
