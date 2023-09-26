import { Ref, reactive } from "vue";
import { AlbumSearchResponse, PagingObject } from "../model/Album";
import { Playlist } from "../model/Playlist";
import { useFetch } from "./useFetch";

export function useAlbumSearch(query: Ref<string>) {
  const params = reactive({ query, type: "album" });
  return useFetch<AlbumSearchResponse, { query: string }>("search", params);
}

export function usePlaylists() {
  return useFetch<PagingObject<Playlist>, {}>("my/playlists");
}
