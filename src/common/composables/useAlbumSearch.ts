import { Ref, ref, watch } from "vue";

import { Album } from "../model/Album";

export function useAlbumSearch(query: Ref<string>) {
  const data = ref<Album[]>([]);

  watch(query, async (query, _, onCleanup) => {
    if (!query) return;

    const ctrl = new AbortController();

    const res = await fetch("albums.json", { signal: ctrl.signal });
    data.value = await res.json();

    onCleanup(() => ctrl.abort());
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
