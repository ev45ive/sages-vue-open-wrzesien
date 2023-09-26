import { Ref, ref, watchEffect } from "vue";

import { mockAlbums } from "../fixtures/mockAlbums";
import { Album } from "../model/Album";

export function useAlbumSearch(query: Ref<string>) {
  const data = ref<Album[]>([]);

  //   watch(query, (query) => {
  //     if (query) data.value = mockAlbums;
  //   },{
  //     // immediate:true
  //   });

  watchEffect(() => {
    console.log("Query change ", query.value);
    if (query.value) data.value = mockAlbums;
  });

  return { data };
}
