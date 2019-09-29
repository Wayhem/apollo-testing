import React from "react";
import { useQuery } from "@apollo/react-hooks";
import _ from "lodash";
import { SONG } from "../queries/songs";

const SongDetail = props => {
  const id = _.get(props, "match.params.id");
  const history = _.get(props, "history");

  const { loading, error, data } = useQuery(SONG, { variables: { id } });

  if (loading) return <>loading...</>;
  if (error) return `Error! ${error}`;

  const { song } = data;
  return (
    <>
      <button
        className="btn-floating btn-large blue light"
        onClick={() => history.goBack()}
      >
        <i className="material-icons">arrow_back</i>
      </button>
      <h3>{song.title}</h3>
    </>
  );
};

export default SongDetail;
