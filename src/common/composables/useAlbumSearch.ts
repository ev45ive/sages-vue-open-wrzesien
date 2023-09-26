import { Ref, ref, watchEffect } from "vue";

import { Album } from "../model/Album";

export function useAlbumSearch(query: Ref<string>) {
  const data = ref<Album[]>([]);

  watchEffect(async () => {
    if (!query.value) return;

    const res = await fetch("albums.json");
    data.value = await res.json();
  });

  //   watch(query, (query) => {
  //     if (query) data.value = mockAlbums;
  //   },{
  //     // immediate:true
  //   });

  // watchEffect(() => {
  //   console.log("Query change ", query.value);
  //   if (query.value) data.value = mockAlbums;
  // });

  return { data };
}
