import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import _ from "lodash";
import { history } from "../history";
import { SONG_LIST, DELETE_SONG } from "../queries/songs";

const SongList = () => {
  const { loading, error, data, refetch } = useQuery(SONG_LIST);
  const [deleteSong, { deleteData }] = useMutation(DELETE_SONG);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { songs = [] } = data;

  const onSongDelete = id => {
    deleteSong({ variables: { id } }).then(() => refetch());
  };

  const renderSongs = () =>
    _.map(songs, ({ title, id }) => (
      <li className="collection-item" key={id}>
        {title}
        <i className="material-icons" onClick={() => onSongDelete(id)}>
          delete
        </i>
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
