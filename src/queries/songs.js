import { gql } from "apollo-boost";

export const SONG_LIST = gql`
  {
    songs {
      title
      id
    }
  }
`;

export const ADD_SONG = gql`
  mutation AddSong($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;
