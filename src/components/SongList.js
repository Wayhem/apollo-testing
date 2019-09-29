import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import _ from "lodash";

const SONG_LIST = gql`
  {
    songs {
      title
      id
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(SONG_LIST);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { songs = [] } = data;

  const renderSongs = () =>
    _.map(songs, ({ title, id }) => <li key={id}>{title}</li>);

  return <>{renderSongs()}</>;
};

export default SongList;
