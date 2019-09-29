import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router";
import { ADD_SONG, SONG_LIST } from "../queries/songs";

const SongCreate = ({ history }) => {
  const [songTitle, setSongTitle] = useState("");
  const [addTodo, { data }] = useMutation(ADD_SONG);

  const onSubmit = e => {
    e.preventDefault();
    addTodo({
      variables: { title: songTitle },
      refetchQueries: [{ query: SONG_LIST }]
    }).then(() => {
      history.push("/");
    });
  };
  console.log(data);
  return (
    <>
      <button
        className="btn-floating btn-large blue light"
        onClick={() => history.goBack()}
      >
        <i className="material-icons">arrow_back</i>
      </button>
      <h3>Create new song</h3>
      <form onSubmit={onSubmit}>
        <label>Song title:</label>
        <input
          value={songTitle}
          onChange={({ target }) => setSongTitle(target.value)}
        />
      </form>
    </>
  );
};

export default withRouter(SongCreate);
