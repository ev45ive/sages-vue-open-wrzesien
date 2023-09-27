import { ComputedRef, Ref, computed } from "vue";
// import { AlbumSearchResponse, PagingObject } from "../model/Album";
import { UseQueryReturnType, useQuery } from "vue-query";
import { musicAPI } from "../services/musicAPI";
import { AlbumResponse, AlbumSearchResponse } from "../model/Album";
import { AxiosResponse } from "axios";

export function useAlbumSearch(query: Ref<string> | ComputedRef<string>) {
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


export function useAlbum(
  id: Ref<string> | ComputedRef<string>
): UseQueryReturnType<AlbumResponse, Error> {
  return useQuery(["albums/details", id], ({ signal }) =>
    musicAPI
      .get<AlbumResponse>("albums/" + id.value, {
        signal,
      })
      .then((res) => res.data)
  );
}

// export function useAlbumSearch(query: Ref<string>) {
//   const params = reactive({ query, type: "album" });
//   return useFetch<AlbumSearchResponse, { query: string }>("search", params);
// }

// export function usePlaylists() {
//   return useFetch<PagingObject<Playlist>, {}>("my/playlists");
// }
