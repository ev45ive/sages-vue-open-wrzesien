import { PagingObject, Track } from "./Album";

export interface Playlist {
  id: string;
  name: string;
  public: boolean;
  description: string;
  tracks?: PagingObject<Track>;
}
