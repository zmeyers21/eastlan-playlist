import { Station } from "./Station.model";

export interface Playlist {
  songs: Song[];
}

export interface Song {
  _id: string;
  stationId: string;
  artist: string;
  song: string;
  dateTimeEntered: string;
}