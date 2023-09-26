import { Ref, computed } from "vue";
// import { AlbumSearchResponse, PagingObject } from "../model/Album";
import { useQuery } from "vue-query";
import { musicAPI } from "../services/musicAPI";
import { AlbumSearchResponse } from "../model/Album";
import { AxiosResponse } from "axios";

export function useAlbumSearch(query: Ref<string>) {
  return useQuery(
    ["albums/search", query],
    ({ signal }) =>
      musicAPI.get<AlbumSearchResponse>("search", {
        signal,
        params: { query: query.value, type: "album" },
      }),
    {
      enabled: computed(() => !!query.value),
      initialData: { data: { albums: { items: [] } } },
      select: (res: AxiosResponse) => res.data.albums.items,
    }
  );
}

// export function useAlbumSearch(query: Ref<string>) {
//   const params = reactive({ query, type: "album" });
//   return useFetch<AlbumSearchResponse, { query: string }>("search", params);
// }

// export function usePlaylists() {
//   return useFetch<PagingObject<Playlist>, {}>("my/playlists");
// }
