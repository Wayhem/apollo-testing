import React from "react";
import { useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import { history } from "../history";
import { SONG_LIST } from "../queries/songs";

const SongList = () => {
  const { loading, error, data } = useQuery(SONG_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { songs = [] } = data;

  const renderSongs = () =>
    _.map(songs, ({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
      </li>
    ));

  return (
    <>
      <ul className="collection">{renderSongs()}</ul>
      <button
        className="btn-floating btn-large red light"
        onClick={() => history.push("/songs/new")}
      >
        <i className="material-icons">add</i>
      </button>
    </>
  );
};

export default SongList;
